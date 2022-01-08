let blank='&nbsp;&nbsp;';

class card {
    constructor(title, text, link) {
        this.title = title;
        this.text = text;
        this.link = link;
    }
    createCard() {
        // console.log(this.title,this.text,this.text)
        let text = `
      <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
      <div class="card-body">
      <h5 class="card-title">${this.title}</h5>
      <p class="card-text">${this.text}</p>
      <a href="${this.link}" class="card-link">email</a>
      </div>
      </div>`;
        return text;
    }
}



class accordeonItem {
    constructor(id, link, body, comments,title,username) {
        this.body = body;
        this.comments = comments;
        this.id = id;
        this.link = link;
        this.title = title;
        this.username = username;
    }
    creatHeader() {
        let itemHeader = document.createElement('h2');
        itemHeader.classList.add(`accordion-header`);
        itemHeader.setAttribute(`id`, `panelsStayOpen-heading-${this.id}`);
        document.getElementById(`accordion-item-${this.id}`).appendChild(itemHeader);
        let itemButon = document.createElement('button');
        itemButon.classList.add(`accordion-button`);
        // ----------------
        // itemButon.classList.add(`collapsed`);
        // ----------------
        itemButon.setAttribute(`type`, `button`);
        itemButon.setAttribute(`data-bs-toggle`, `collapse`);
        itemButon.setAttribute(`data-bs-target`, `#panelsStayOpen-collapse-${this.id}`);
        itemButon.setAttribute(`aria-expanded`, `true`);
        // ----------------
        itemButon.setAttribute(`aria-controls`, `panelsStayOpen-collapse-${this.id}`);
        document.getElementById(`panelsStayOpen-heading-${this.id}`).appendChild(itemButon);
        // itemButon.innerHTML = `<span>post id: ${this.id}${blank}</span> <span>${this.title}  ${blank}</span>  <span> ${this.nickname} ${blank}</span> ${blank}<strong> <a href="${this.link}">${this.link}</a></strong>`;
        itemButon.innerHTML = `
        <span class="post_id">post id: ${this.id}${blank}</span>
        <span class="title">title : ${this.title}${blank}</span> 
        <span class="username">username: ${this.username}${blank}</span>`;
        //  ${blank}<strong> <a href="${this.link}">${this.link}</a></strong>

    }
    createBody() {
        let itemPannel = document.createElement('div');
        itemPannel.classList.add(`accordion-collapse`);
        itemPannel.classList.add(`collapse`);
        itemPannel.classList.add(`show`);
        itemPannel.setAttribute(`id`, `panelsStayOpen-collapse-${this.id}`);
        itemPannel.setAttribute(`aria-labelledby`, `panelsStayOpen-${this.id}`);
        let x = document.getElementById(`accordion-item-${this.id}`);
        document.getElementById(`accordion-item-${this.id}`).appendChild(itemPannel);
        let itemBody = document.createElement('div');
        itemBody.classList.add(`accordion-body`);
        itemBody.setAttribute(`id`, `accordion-body-item-${this.id}`);

        // <a href="url">link text</a>${this.link}
        // itemBody.innerHTML = this.body;
        // https://jsonplaceholder.typicode.com/users?id=1
        
        // itemBody.innerHTML = `<a href=https://jsonplaceholder.typicode.com/users?id=${this.link}>${this.body}</a>`;
        itemBody.innerHTML = `<a href=user.html?id=${this.link}>${this.body}</a>`;
       // <a href="user.html?nickname=JR">Click Here</a>

        document.getElementById(`panelsStayOpen-collapse-${this.id}`).appendChild(itemBody);
    }

    appendCards() {
        if (this.comments.length) {
            let list = document.createElement("ul");
            let listPlace = document.getElementById(`accordion-body-item-${this.id}`);
            listPlace.appendChild(list);
        }
        let ulList = document.getElementById(`accordion-body-item-${this.id}`).querySelector("ul");
        this.comments.forEach(element => {
            // let cardItem = new card(element.title, element.text, element.link);
            let cardItem = new card(element.name, element.body, element.email);
            let liElement = document.createElement("li");
            liElement.innerHTML = cardItem.createCard();
            ulList.appendChild(liElement);
        });
    }

    createItem(where) {
        let accordionItem = document.createElement('div');
        accordionItem.classList.add(`accordion-item`);
        accordionItem.setAttribute('id', `accordion-item-${this.id}`);
        where.appendChild(accordionItem);
        this.creatHeader();
        this.createBody();
        this.appendCards();
    }
}

