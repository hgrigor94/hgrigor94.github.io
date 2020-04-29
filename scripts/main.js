'use strict'
function genRandCollor() {
    return '#' + Math.trunc(Math.random()*1000)
}

const myHeading = document.querySelector('h1');
var H1name = 'World'

myHeading.onclick = function () {
    this.textContent = "Hello " + H1name + ' ' + "!"
    this.style.color = genRandCollor()
    //alert('Ouch! Stop poking me!')
}

myHeading.onmousemove = function () {
    this.style.fontSize = '80px'
}

myHeading.onmouseleave = function () {
    this.style.fontSize = '60px'
}


const firefoxLogo = document.querySelector('img')

firefoxLogo.onclick = function () {
    firefoxLogo.style.backgroundColor = genRandCollor()

}

firefoxLogo.onmouseover = function () {
    if (this.getAttribute('src') === 'images/firefox-logo.png') {
        this.setAttribute('src', 'images/chrome-logo.png');
    } else {
        this.setAttribute('src', 'images/firefox-logo.png');
    }
}

const myButton = document.querySelector('button');

myButton.onclick = function (){
    setUserName();
}

function setUserName() {
    var myName = prompt('Please enter your name. ');
    console.log(myName)
    if ( !myName || myName === null) {
        myName = 'World'
    }
    localStorage.setItem('name', myName);
    H1name = myName
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    H1name = localStorage.getItem('name');
}

