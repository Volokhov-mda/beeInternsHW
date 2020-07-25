inputButton.addEventListener('click', () => {
    GetNumberFromPrompt('Введите целое число');
});

window.onbeforeunload = function(e) {
    return '?';
};

function GetNumberFromPrompt(message) {
    let textEntered = window.prompt(message);

    if (textEntered != null) {
        numberEntered = parseInt(textEntered);

        if (!isNaN(numberEntered)) {
            iFrame.document.getElementById('number_header').innerHTML = numberEntered;
        } else {
            GetNumberFromPrompt('Вы ввели не число! Введите целое число');
        }
    }
}
