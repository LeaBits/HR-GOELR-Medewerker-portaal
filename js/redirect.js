window.addEventListener('load', () => init());

function init(){
    let page = getPage();
    let hash = getQueryHash();

    window.location.replace(`src/index.html?page=${page}&query=${hash}`);
}

function getPage(){
    let body = document.getElementsByTagName('body')[0];
    return body.id;
}

function getQueryHash(){
    let hash = window.location.hash;

    while(hash.charAt(0) === '#'){
        hash = hash.substring(1);
    }

    return hash;
}