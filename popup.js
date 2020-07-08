
document.addEventListener('DOMContentLoaded', function () {
    changeFont();
});

function changeFont(){
    chrome.storage.sync.get(['key'], function(result) {
        let font=result.key;
        let checkedRadioButton = document.getElementById(font ? font : 'Arial');
        checkedRadioButton.checked=true;
    });
    let button = document.getElementById('button');
    button.addEventListener("click", function() {
        const font = document.querySelector('input[name="font"]:checked').value;
        chrome.storage.sync.set({key: font}, function () {});
    });
}