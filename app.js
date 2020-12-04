var btnTranslate = document.querySelector('#btn-translate');
var txtInput = document.querySelector('#txt-input');
var outputDiv = document.querySelector('#output-div')

const clickHandler = () => {
    var inputValue = txtInput.value;
    outputDiv.innerText = inputValue
}

btnTranslate.addEventListener('click', clickHandler);   