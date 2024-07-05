

let buttons = document.querySelectorAll(".button");
let body = document.querySelector("body");

buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        let color = e.target.id;
        body.style.backgroundColor = color;
    });
});
