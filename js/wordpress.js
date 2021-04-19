window.addEventListener('load', init);

const questionsContainer = document.querySelector('questions');
const questionURL = "./data/wordpress.json";

/**
 * init
 */
function init(){
    getData(questionURL, createQuestionsSuccessHandler);
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
    console.log(item);

    const col = createDOM('col', {'class': 'col-12'});
    const card = createDOM('card', {'class': 'card'});
    card.classList.add('my-2');

    // header
    const cardHeader = createDOM('cardHeader', {'class': 'card-header'});
    cardHeaderContent = createDOM('span');
    cardHeaderContent.innerHTML = '<strong>'+item.question+'</strong>';
    cardHeader.appendChild(cardHeaderContent);
    for(const tag of item.tags){
        const badge = createDOM('span', {'class': 'badge bg-primary text-light'});
        badge.innerText = tag;
        cardHeader.appendChild(badge);
    }
    card.appendChild(cardHeader);

    // body
    const cardBody = createDOM('cardBody', {'class': 'card-body'});
    cardBody.innerHTML = item.answerHTML;
    card.appendChild(cardBody);

    col.appendChild(card);
    questionsContainer.appendChild(col);
}