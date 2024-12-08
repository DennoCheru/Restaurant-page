import { createHomePage } from "./home";
import { createMenuPage } from "./menu";
import { createContactPage } from "./contact";
import '../src/styles.css';

console.log('Welcome to our restaurant');

function clearContent() {
    const content = document.getElementById('content')
    content.textContent = '';
}

function init() {
    document.getElementById('homeBtn').addEventListener('click', () => {
        clearContent();
        createHomePage();
    });
    document.getElementById('menuBtn').addEventListener('click', () => {
        clearContent();
        createMenuPage();
    });
    document.getElementById('contactBtn').addEventListener('click', () => {
        clearContent();
        createContactPage();
    });
    createHomePage()
}

init();