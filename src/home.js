import bgImage from './images/bg.png';

function createHomePage() {
    const content = document.getElementById('content');

    const homeContainer = document.createElement('div');
    homeContainer.classList.add('home-container');

    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to our Restaurant!';

    const subheading = document.createElement('h2');
    subheading.textContent = 'Your tastebud\'s favourite choice!'

    homeContainer.appendChild(headline);
    homeContainer.appendChild(subheading);

    content.appendChild(homeContainer);
}

export { createHomePage };