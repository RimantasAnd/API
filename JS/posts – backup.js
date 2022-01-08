//console.log("labas");
let commentsArr = [];
let postsArr =[];
let authorsArr =[];
let nicksArr =[];
let currentNick=null;




v=`<strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.`;



const fetchReq1 = fetch('https://jsonplaceholder.typicode.com/posts?_limit=10&_start=20').then(response => response.json());
const fetchReq2 = fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());
const allData = Promise.all([fetchReq1,fetchReq2]);
allData.then((res) =>{
postsArr = res[0];
authorsArr  = res[1];
parsePosts()
});



//////////////////////////////////////////////////////////////////////////


function parsePosts(){
  console.log("hi");
  console.log(postsArr);
  console.log(postsArr.length);
  console.log(authorsArr);
  let bodyPosition = document.getElementById("accordionPanels");


 



  for (let i = 0; i<postsArr.length; i++) {


//  // https://jsonplaceholder.typicode.com/comments/?postId=1

//  fetch(`https://jsonplaceholder.typicode.com/photos/?albumId=${albumId}`)
//  .then(response => response.json())
//  .then(comment =>{


//  } )
   



  let commsSubArr=commentsArr.filter(comment=>comment.post==postsArr[i].id);

currentNick = nicksArr.indexOf(postsArr[i].nick);
  
  
   bodyText = new accordeonItem(postsArr[i].id,authorsArr[i].id , postsArr[i].body, commsSubArr, postsArr[i].title, authorsArr[i].username);
   bodyText.createItem(bodyPosition);
  }

}


  
  



