var bstxt = document.querySelector("#bstxt");

var out = document.querySelector("#out");

var butn = document.querySelector("#butn");

butn.addEventListener("click", trans());

//var url = "https://api.funtranslations.com/translate/valspeak.json?text=";

var url = "https://api.funtranslations.com/translate/dothraki.json?text=";



function err() {
    out.innerHTML = "error in api trans ";
}

function trans() {

    return function handler() {

        url = url + bstxt.value;
        let cntxt;

        fetch(url)
            .then(response => { return response.json(); })
            .then(json => {
                cntxt = json.contents.translated;
                out.innerHTML = cntxt;
            })
            .catch(err());
    };
}