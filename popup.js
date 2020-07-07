
document.addEventListener('DOMContentLoaded', function () {
    changeFont();
});

function changeFont(){
    let button = document.getElementById('button');
    button.addEventListener("click", function() {
        const font = document.querySelector('input[name="font"]:checked').value;
        chrome.storage.sync.set({key: font}, function () {});
    });
}