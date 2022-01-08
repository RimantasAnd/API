//console.log("labas");

let postsArr = [];
let authorsArr = [];
let nicksArr = [];
let currentNick = null;
let numberPostsPerSheet = 12;
let previousBtn = document.querySelector(".previous");
let nextBtn = document.querySelector(".next");
let nextPage = null;
let previousPage = null;
let page = null;
let firstPostInPage=null;

let params = new URLSearchParams(document.location.search);
page = params.get("page");
if (page==null) {page=0}
page=parseInt(page);
nextPage=page+1;
previousPage=page-1;
firstPostInPage=(numberPostsPerSheet*page);

if (page==0){
  previousBtn.classList.add('disabled')
  nextBtn.classList.remove('disabled');
  nextBtn.setAttribute(`href`,`?page=${nextPage}`);
}else {
  previousBtn.classList.remove('disabled');
  nextBtn.classList.remove('disabled');
  nextBtn.setAttribute(`href`,`?page=${nextPage}`);
  previousBtn.setAttribute(`href`,`?page=${previousPage}`);
}

const fetchReq1 = fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${numberPostsPerSheet}&_start=${firstPostInPage}`).then(response => response.json());
const fetchReq2 = fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());
const allData = Promise.all([fetchReq1, fetchReq2]);
allData.then((res) => {
  postsArr = res[0];
  authorsArr = res[1];

  if (postsArr.length != 0) {
    parsePosts();
  } else {
    previousBtn.classList.remove('disabled')
    nextBtn.classList.add('disabled');
    previousBtn.setAttribute(`href`, `?page=${previousPage}`);
    nextBtn.setAttribute(`href`, ``);
  }
});


function parsePosts() {
  let bodyPosition = document.getElementById("accordionPanels");
  for (let i = 0; i < postsArr.length; i++) {
    fetch(`https://jsonplaceholder.typicode.com/comments/?postId=${postsArr[i].id}`)
      .then(response => response.json())
      .then(comments => {
        var commentsArr = [];
        commentsArr.length = 0;
        let athor_id = parseInt(postsArr[i].userId) - 1;
        bodyText = new accordeonItem(postsArr[i].id, authorsArr[athor_id].id, postsArr[i].body, comments, postsArr[i].title, authorsArr[athor_id].username);
        bodyText.createItem(bodyPosition);
      })
  }
}


  
  



