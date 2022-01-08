console.log("labas");
let commentArr = [];
let userId="";
let authorNumberInArray=null;
// let blank='&nbsp;&nbsp;';

let params = new URLSearchParams(document.location.search);
userId = params.get("id");
console.log(params);
console.log("user id",userId);

if (userId == null) {
 userId=1;
};
console.log("user id",userId);

fetch(`https://jsonplaceholder.typicode.com/users?id=${userId}`)
  .then(response => response.json())
  .then(authors => {
    console.log(authors.length);
    console.log(authors.name);
    console.log(authors.username);
    console.log(authors);
    let author=authors[0];
    // for (let index = 0; index < authors.length; index++) {
    //   if (userId === authors[index].nickname) {
    //     authorNumberInArray = index;
    //     console.log(authorNumberInArray, userId);
        
    //   }
    // }
    let cardBodyElement = document.createElement('h6');
    cardBodyElement.classList.add(`card-subtitle`);
    cardBodyElement.classList.add(`mb-2`);
    cardBodyElement.classList.add(`text-muted`);
    cardBodyElement.innerHTML = `username : ${author.username}`;
    document.querySelector(`.card-body`).appendChild(cardBodyElement);

    cardBodyElement = document.createElement('h5');
    cardBodyElement.classList.add(`card-title`);
    cardBodyElement.innerHTML = author.name;
    document.querySelector(`.card-body`).appendChild(cardBodyElement);

    let mainData = document.createElement('div');
    mainData.classList.add('main_data');
    mainData.innerHTML = `
      <h6 class="card-subtitle mb-2 text-muted">My address</h6>
        <ul>
          <li class="list-group-item">street :<span>${author.address.street}</span></li>
          <li class="list-group-item">suite :<span>${author.address.suite}</span></li>
          <li class="list-group-item">city:<span>${author.address.city}</span></li>
          <li class="list-group-item">zipcode:<span>${author.address.zipcode}</span></li>
        </ul>
      <h6 class="card-subtitle mb-2 text-muted">My company</h6>
        <ul>
          <li class="list-group-item">name :<span>${author.company.name}</span></li>
          <li class="list-group-item">catchPhrase :<span>${author.company.catchPhrase}</span></li>
          <li class="list-group-item">bs:<span>${author.company.bs}</span></li>
        </ul>
        `;
    document.querySelector(`.card-body`).appendChild(mainData);

    cardBodyElement = document.createElement('p');
    cardBodyElement.classList.add(`card-text`);
    cardBodyElement.innerHTML = `<small class="text-muted">call me : <a href="tel:+${author.phone}" class="card-link">Don't hesitate call me</a></small>`;
    document.querySelector(`.card-body`).appendChild(cardBodyElement);

    cardBodyElement = document.createElement('a');
    cardBodyElement.setAttribute('href', `${author.website}`);
    cardBodyElement.classList.add(`card-link`);
    cardBodyElement.innerHTML = `Plese visit my site`;
    document.querySelector(`.card-body`).appendChild(cardBodyElement);

    cardBodyElement = document.createElement('a');
    cardBodyElement.setAttribute('href', `mailto:${author.email}`);
    cardBodyElement.classList.add(`card-link`);
    cardBodyElement.innerHTML = `Don't hesitate write me`;
    document.querySelector(`.card-body`).appendChild(cardBodyElement);

let urlString=author.name.replace(" ", "%20");


let mapstring=`src="https://maps.google.com/maps?width=100%25&amp;height=200&amp;hl=en&amp;q=${author.address.geo.lat},%20${author.address.geo.lng}+(${urlString})&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">`;
// console.log(mapstring);


let mapPlace=document.getElementById(`map`);
let inp=`<iframe class="map" `;
inp+=mapstring;
inp+=`</iframe>`;
mapPlace.innerHTML=inp;
// console.log(inp);

let authElement=document.getElementById('author');
console.log(authElement,author.name);
authElement.innerHTML=author.name;


fetch(`https://jsonplaceholder.typicode.com/albums/?userId=${author.id}`)
  .then(response => response.json())
  .then(albums => {
    console.log(albums);


    albums.forEach(album => {


      fetch(`https://jsonplaceholder.typicode.com/photos/?albumId=${album.id}`)
      .then(response => response.json())
      .then(photos =>{
// let albumListElement=document.createElement('li');
//     albumListElement.classList.add('list-group-item');
//     albumListElement.classList.add('d-flex');
//     albumListElement.classList.add('justify-content-between');
//     albumListElement.classList.add('align-items-start');
//     albumListElement.innerHTML=`<div class="ms-2 me-auto">
//     <div class="fw-bold">${album.title}</div>
//      ${album.id} By ${author.name}</div>
//      <span class="badge bg-primary rounded-pill">${photos.length}</span>`;
//     document.querySelector('.list-group-numbered').appendChild(albumListElement);

        let albumListElement = document.createElement('li');
        albumListElement.classList.add('list-group-item');
        albumListElement.classList.add('d-flex');
        albumListElement.classList.add('justify-content-between');
        albumListElement.classList.add('align-items-start');
        document.querySelector('.list-group-numbered').appendChild(albumListElement);
        let albumListElementDiv = document.createElement('div');
        albumListElementDiv.classList.add('ms-2');
        albumListElementDiv.classList.add('me-auto');
        albumListElement.appendChild(albumListElementDiv);
        let albumListElementDivTitle = document.createElement('div');
        albumListElementDivTitle.classList.add('fw-bold');

        // urlString=author.name.replace(" ", "%20");

        albumListElementDivTitle.innerHTML = `<a href=album.html?albumId=${album.id}&author=${author.name.replace(" ", "%20")}>${album.title}</a>`;
        // albumListElementDivTitle.innerHTML = `<a href=album.html?albumId=${album.id}>${album.title}</a>`;



        albumListElementDiv.appendChild(albumListElementDivTitle);
        albumListElementDiv.innerHTML += `${album.id} By ${author.name}`;
        albumListElement.innerHTML += `<span class="badge bg-primary rounded-pill">${photos.length}</span>`;

   

       


    // itemBody.innerHTML = `<a href=album.html?id=${album.id}>${album.id}</a>`;




      console.log(album.title,photos.length)
    } )




      
    });

    



  })


     










  


  //  console.log(cardBodyElement);
  });





 






