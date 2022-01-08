let params = new URLSearchParams(document.location.search);
albumId= params.get("albumId");
// console.log(params);
authorname=params.get("author")
// console.log("album Id",albumId);
// console.log("author",authorname);



fetch(`https://jsonplaceholder.typicode.com/photos/?albumId=${albumId}`)
.then(response => response.json())
.then(photos =>{
    // console.log(photos);
  
    fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}`)
    .then(response => response.json())
    .then(albums =>{
        // console.log(albums);

 photos.forEach(photo => {
        let carouselInnerEllement=document.createElement('div');
        carouselInnerEllement.classList.add('carousel-item');
        document.querySelector('.carousel-inner').appendChild(carouselInnerEllement);
        carouselInnerEllement.innerHTML+=`<img src="https://picsum.photos/600/400.jpg?random=${photo.id}" class="d-block w-100" alt="..."></img>`;
        carouselInnerEllement.innerHTML+=`
        <div class="carousel-caption d-none d-md-block">
        <h5>"Photo is": ${photo.title}</h5>
        <p>"Albm : ${albums.title} from ${authorname}</p>
        </div>`;
    });

    document.querySelector('.carousel-item').classList.add('active');
    // pirmajam dadeda clase active


    })
  
})


