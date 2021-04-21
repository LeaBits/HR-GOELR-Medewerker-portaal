window.addEventListener('load', init);

const questionsLinkContainer = document.querySelector('links #toc');
const questionsContainer = document.querySelector('questions');
const questionURL = "./data/wordpress.json";

/**
 * init
 */
function init(){
    getData(questionURL, createQuestionsSuccessHandler);
}

function getQuestionID(number){
    return "question"+number;
}

function createQuestionsSuccessHandler(data){
    if(!isAnObject(data.wordpress)){
        return;
    }

    for(const key in data.wordpress){
        createQuestion(key, data.wordpress[key]);
    }
}

function createQuestion(number, item){
    const ID = getQuestionID(number);

    // link
    const listItem = createDOM('li');
    const link = createDOM('a', {'href': '#'+ID});
    link.innerText = item.question;
    listItem.appendChild(link);
    questionsLinkContainer.appendChild(listItem);

    // question
    const col = createDOM('col', {'class': 'col-12', 'id': ID});
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