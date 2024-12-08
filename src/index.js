import { createHomePage } from "./initial-load";
import { createMenuPage } from "./menu";
import { createContactPage } from "./contact";
import '../src/styles.css';

console.log('Welcome to our restaurant');

function init() {
    document.getElementById('homeBtn').addEventListener('click', createHomePage);
    document.getElementById('menuBtn').addEventListener('click', createMenuPage);
    document.getElementById('contactBtn').addEventListener('click', createContactPage);
    createHomePage()
}

init();