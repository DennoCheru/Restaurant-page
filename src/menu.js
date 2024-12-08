
import pancakes from './images/pancakes.jpg';
import roastBeef from './images/roast-beef.jpg';
import bananaBread from './images/banana-bread.jpg';

function createMenuPage() {
    const content = document.getElementById('content');
    content.textContent = "";

    const headline = document.createElement('h1');
    headline.textContent = "Our Menu";

    const menuGrid = document.createElement('div');
    menuGrid.classList.add('menu-grid');

    const meals = [
        { name: "Pancakes", price: "$12", image: pancakes, 
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis dolorum voluptate quos. Dignissimos quidem reiciendis harum distinctio saepe aperiam quo consequuntur tempore aut animi, obcaecati, sapiente laboriosam pariatur? Enim, dolores." },
        { name: "Banana bread", price: "$15", image: bananaBread,
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis dolorum voluptate quos. Dignissimos quidem reiciendis harum distinctio saepe aperiam quo consequuntur tempore aut animi, obcaecati, sapiente laboriosam pariatur? Enim, dolores."
         },
        { name: "Roast Beef", price: "$20", image: roastBeef,
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis dolorum voluptate quos. Dignissimos quidem reiciendis harum distinctio saepe aperiam quo consequuntur tempore aut animi, obcaecati, sapiente laboriosam pariatur? Enim, dolores."
         },
    ];

    meals.forEach(meal => {
        const card = document.createElement('div');
        card.classList.add('card');

        const mealImg = document.createElement('img');
        mealImg.src = meal.image;
        mealImg.alt = meal.name;

        const mealName = document.createElement('h2');
        mealName.textContent = meal.name;

        const mealPrice = document.createElement('p');
        mealPrice.textContent = meal.price;
        
        const mealDesc = document.createElement('p');
        mealDesc.textContent = meal.desc;

        card.appendChild(mealImg);
        card.appendChild(mealName);
        card.appendChild(mealPrice);
        card.appendChild(mealDesc);

        menuGrid.appendChild(card);
    });

    content.appendChild(headline);
    content.appendChild(menuGrid);
}

export { createMenuPage };