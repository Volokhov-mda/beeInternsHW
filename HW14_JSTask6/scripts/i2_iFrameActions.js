numberHeader.addEventListener('DOMSubtreeModified', () => {
    window.parent.document.getElementById('number_entered_plus_one').innerHTML = window.parent.numberEntered + 1;
});
