/**
 * getData
 * @param url
 * @param successHandler
 */
function getData(url, successHandler){
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(successHandler)
        .catch(getDataErrorHandler);

}

/**
 * getDataErrorHandler
 * @param e
 */
function getDataErrorHandler(e){
    console.log(e);
}

/**
 * createDOM
 * @param tag
 * @param params
 * @returns {*}
 */
function createDOM(tag, params){
    const temp = document.createElement(tag);
    if(typeof params === 'object' && params !== null){
        for(let key in params) {
            temp.setAttributeNS(null, key, params[key]);
        }
    }
    return temp;
}

/**
 * isAnObject
 * @param item
 * @returns {boolean}
 */
function isAnObject(item){
    if(typeof item != null && typeof item === 'object'){
        return true;
    }
    return false
}