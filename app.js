var btnTranslate = document.querySelector('#btn-translate');
var txtInput = document.querySelector('#txt-input');

const clickHandler = () => {
    var inputValue = txtInput.value;
    console.log('Clicked');
    console.log(inputValue);
}

btnTranslate.addEventListener('click', clickHandler);   