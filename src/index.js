import { createHomePage } from "./home";
import { createMenuPage } from "./menu";
import { createContactPage } from "./contact";
import '../src/styles.css';

console.log('Welcome to our restaurant');

function clearContent() {
    const content = document.getElementById('content')
    content.textContent = '';
}

function setActiveBtn(buttonId) {
    const buttons = document.querySelectorAll('nav button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });
    document.getElementById(buttonId).classList.add('active');
}

function init() {
    document.getElementById('homeBtn').addEventListener('click', () => {
        clearContent();
        setActiveBtn('homeBtn');
        createHomePage();
    });
    document.getElementById('menuBtn').addEventListener('click', () => {
        clearContent();
        setActiveBtn('menuBtn');
        createMenuPage();
    });
    document.getElementById('contactBtn').addEventListener('click', () => {
        clearContent();
        setActiveBtn('contactBtn');
        createContactPage();
    });
    setActiveBtn('homeBtn');
    createHomePage()
}

init();