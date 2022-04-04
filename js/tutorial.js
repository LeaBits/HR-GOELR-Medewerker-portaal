window.addEventListener('load', init);

const questionsLinkContainer = document.querySelector('links #toc');
const questionsContainer = document.querySelector('questions');
// const questionURL = "./data/wordpress.json";
let questionURL;

/**
 * init
 */
function init(){
    let content = document.getElementById('content');
    questionURL = `./data/${content.dataset.link}`;

    getData(questionURL, createQuestionsSuccessHandler);
}

function createQuestionsSuccessHandler(data){
    if(data.alert != null){
        let alertDiv = document.getElementById('tutorialAlert');
        alertDiv.innerHTML = data.alert;
        alertDiv.classList.add('display');
    }

    if(!isAnObject(data.tutorial)){
        return;
    }

    for(const key in data.tutorial){
        createQuestion(data.tutorial[key]);
    }
}

function createQuestion(item){
    // link
    const listItem = createDOM('li');
    const link = createDOM('a', {'href': '#'+item.link});
    link.innerText = item.question;
    listItem.appendChild(link);
    questionsLinkContainer.appendChild(listItem);

    // question
    const col = createDOM('col', {'class': 'col-12', 'id': item.link});
    const card = createDOM('card', {'class': 'card'});
    card.classList.add('my-2');

    // header
    const cardHeader = createDOM('cardHeader', {'class': 'card-header'});
    cardHeaderContent = createDOM('span');
    cardHeaderContent.innerHTML = '<strong>'+item.question+'</strong>';
    cardHeader.appendChild(cardHeaderContent);
    card.appendChild(cardHeader);

    // body
    const cardBody = createDOM('cardBody', {'class': 'card-body'});
    cardBody.innerHTML = item.answerHTML + '<br/>';
    for(const tag of item.tags){
        const badge = createDOM('span', {'class': 'badge bg-primary text-light'});
        badge.innerText = tag;
        cardBody.appendChild(badge);
    }
    card.appendChild(cardBody);

    col.appendChild(card);
    questionsContainer.appendChild(col);
}