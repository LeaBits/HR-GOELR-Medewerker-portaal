window.addEventListener('load', init);

const specializationContainer = document.querySelector('#specializations');
const specializationURL = "./data/specialization.json";

const linksContainer = document.querySelector('links');
const linksURL = "./data/links.json";

/**
 * init
 */
function init(){
    getData(specializationURL, createSpecializationsSuccessHandler);
    getData(linksURL, createLinksSuccessHandler);
}

/**
 * Specializations
 */

/**
 * createSpecializationsSuccessHandler
 * @param data
 */
function createSpecializationsSuccessHandler(data){
    if(!isAnObject(data.specialization) ||
        !isAnObject(data.specialization.advanced) ||
        !isAnObject(data.specialization.intermediate)){
        return;
    }

    let specializations = data.specialization.advanced.concat(data.specialization.intermediate);
    specializations.sort();
    for(const item of specializations) {
        if(data.specialization.advanced.includes(item)){
            createSpecialization(item, true);
        }else{
            createSpecialization(item);
        }
    }
}

/**
 * createSpecialization
 * @param item
 */
function createSpecialization(item, isAdvanced = false){
    const badge = createDOM('span', {'class': 'badge text-light'});
    badge.innerText = item;
    if(isAdvanced){
        badge.classList.add('bg-success');
    }else{
        badge.classList.add('bg-info');
    }
    specializationContainer.appendChild(badge);
}

/**
 * Links
 */

/**
 * createLinksSucessHandler
 * @param data
 */
function createLinksSuccessHandler(data){
    if(!isAnObject(data.links)){
        return;
    }

    for(const item of data.links) {
        createLink(item);
    }
}

/**
 * createLink
 * @param item
 */
function createLink(item){
    // card
    const col = createDOM('col', {'class': 'col-md-4 mt-1 mb-1'});
    for(const category of item.categories){
        col.classList.add(category);
    }
    const card = createDOM('card', {'class': 'card'});

    // header
    const cardHeader = createDOM('cardHeader', {'class': 'card-top card-img-top card-body'});
    const icon = createDOM('i', {'class': 'fa-7x '+item.icon});
    cardHeader.appendChild(icon);
    card.appendChild(cardHeader);

    // body
    const cardBody = createDOM('cardBody', {'class': 'card-body'});
    const title = createDOM('h5', {'class': 'card-title'});
    title.innerText = item.title;
    cardBody.appendChild(title);
    const text = createDOM('p', {'class': 'card-text'});
    text.innerText = item.description;
    cardBody.appendChild(text);
    const link = createDOM('a', {'href': item.link, 'target': '_blank', 'class': 'btn btn-dark stretched-link'});
    link.innerText = 'Klik hier';
    cardBody.appendChild(link);
    card.appendChild(cardBody);

    col.appendChild(card);
    linksContainer.appendChild(col);
}