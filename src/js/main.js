window.addEventListener('load', () => init());

let page = '';
let query = '';
let mainElement;

let wikiData = [];

function init(){
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    page = (typeof params.page != 'undefined')? params.page : '';
    query = (typeof params.query != 'undefined')? params.query : '';

    mainElement = document.getElementsByTagName('main')[0];
    mainElement.innerHTML = "";

    // console.log(page);
    // console.log(query);

    activateLink();

    switch(true){
        case (page === "studhosting"): createWiki("studhosting.json"); break;
        case (page === "fablab"): createWiki("fablab.json"); break;
        case (page === "wordpress"): createWiki("wordpress.json"); break;
    }
}

function activateLink(){
    const activeItems = document.getElementsByClassName('active');
    for(let i = 0; i < activeItems.length; i++){
        activeItems[i].classList.remove('active');
    }

    document.getElementById(page).classList.add('active');
}

function createWiki(url){
    fetch(`data/${url}`)
    .then((response) => response.json())
    .then((data) => {
      if (typeof data.error !== 'undefined') {
        throw new Error(data.error.message);
      }
      wikiData = data;
      createWikiContent();
    })
    .catch(ajaxErrorHandler);
}

function createWikiContent(){
    console.log(wikiData);

    let nav = document.createElement('ul');
    mainElement.appendChild(nav);

    let content = document.createElement('content');
    mainElement.appendChild(content);

    for(let i = 0; i < wikiData.tutorial.length; i++){
        // nav list item
        let listItem = document.createElement('li');
        nav.appendChild(listItem);

        // nav link
        let link = document.createElement('a');
        link.innerText = wikiData.tutorial[i].question;
        link.href = `?page=${page}&query=${wikiData.tutorial[i].link}`;
        listItem.appendChild(link);

        // content
        let question = document.createElement('question');
        question.id = wikiData.tutorial[i].link;
        content.appendChild(question);

        if(query === wikiData.tutorial[i].link){
            question.scrollIntoView({ block: "center" });
        }

        let title = document.createElement('h2');
        title.innerText = wikiData.tutorial[i].question;
        question.appendChild(title);

        let answer = document.createElement('answer');
        answer.innerHTML = wikiData.tutorial[i].answerHTML;
        question.appendChild(answer);
    }

}

function ajaxErrorHandler(message) {
    console.log(message);
}