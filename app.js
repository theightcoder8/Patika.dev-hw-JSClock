let username = prompt('Please enter ur name');
const willkommen = document.getElementById('willkommen');
const clock = document.getElementById('clock');

let counter = 0;
let timingBox = document.getElementById('timing-box');

const VisibleBox = function() {
    if(counter < 60) {
        const box = document.createElement('div');
        box.id = "new-box";
        timingBox.appendChild(box);
        counter++;
    } else if(counter === 60) {
        timingBox.innerHTML = " ";
        counter = 0;
    }
};

const loadFunction = function() {
    const date = new Date;
    const willkommenMessage = "Merhaba " + username;
    clock.innerHTML = "Şuan Saat : " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    willkommen.innerHTML = willkommenMessage;
    VisibleBox();
};

const myInterval = function() {
    setInterval(loadFunction, 1000);
};

myInterval();
