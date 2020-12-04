var btnTranslate = document.querySelector('#btn-translate');
var txtInput = document.querySelector('#txt-input');
var outputDiv = document.querySelector('#output-div');

// TESTING URL
// var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

// MINION TRANSLATOR URL
var url = "https://api.funtranslations.com/translate/minion.json"

const getURL = text => encodeURI(url + "?" + "text=" + text)


const clickHandler = () => {
    // INPUT
    var inputValue = txtInput.value;

    // calling server for processing
    fetch(getURL(inputValue))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;

            // output
            outputDiv.innerText = translatedText;
        })
        .catch(error => {
            // error handling
            alert('ERROR OCCURED FROM THE SERVER, TRY AGAIN AFTER SOME TIME' + error)
        })
}

btnTranslate.addEventListener('click', clickHandler);