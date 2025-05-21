export function buildMenuPage() {
    const content = document.querySelector("#content")

    content.innerHTML = "";

    const menuTitle = document.createElement("div");
    menuTitle.className = "menu-title";
    menuTitle.innerHTML = "<h1>Menu</h1>";
    content.appendChild(menuTitle);
    
    const starters = document.createElement("div");
    starters.className = "starters";
    starters.innerHTML = "<h2>Starters & Sides</h2>"
    content.appendChild(starters);

    const entrees = document.createElement("div");
    entrees.className = "entrees";
    entrees.innerHTML = "<h2>Entrees</h3>";
    content.appendChild(entrees);

    const beverages = document.createElement("div");
    beverages.className = "beverages";
    beverages.innerHTML = "<h2>Beverages</h2>";
    content.appendChild(beverages);

    const cannabis = document.createElement("div");
    cannabis.className = "cannabis";
    cannabis.innerHTML = "<h2>Cannabis</h2>";
    content.appendChild(cannabis);

    const menuItems = [
        {
            name: "Wild Greens Salad",
            type: "starter",
            description: "Dandelion, miner's lettuce, and watercress with a berry vinaigrette",
            price: "$2",
        },{
            name: "Wild Mushroom Crostini",
            type: "starter",
            description: "Foraged chantrelle and morel mushrooms sautéed in garlic and butter, served on toasted local bread",
            price: "$3",
        },{
            name: "Dungeness Crab Cakes",
            type: "starter",
            description: "Lightly pan-fried cakes made with fresh crab, herbs, breadcrumbs, and lemon zest",
            price: "$3",
        },{
            name: "Cedar-Smoked Oysters",
            type: "starter",
            description: "Smoked on cedar planks, served cold with lemon and herbs",
            price: "$3",
        },{
            name: "Cedar-Plank Salmon",
            type: "entree",
            description: "Fresh sockeye salmon grilled on cedar planks, seasoned with herbs, lemon, and sea salt",
            price: "$8",
        },{
            name: "Salmon Chowder",
            type: "entree",
            description: "A creamy soup made with chunks of wild salmon, potatoes, onions, herbs, and corn",
            price: "$8",
        },{
            name: "Dungeness Crab Feast",
            type: "entree",
            description: "Whole Dungeness crab boiled, served with butter, garlic, and lemon",
            price: "$10",
        },{
            name: "Wild Mushroom Risotto",
            type: "entree",
            description: "A risotto made with foraged chantrelle, morel, and matsutake mushrooms",
            price: "$7",
        },{
            name: "Grass-Fed Burger with Marionberry BBQ Sauce",
            type: "entree",
            description: "Grass-fed beef topped with a sweet-savory berry-based barbecue sauce, served with local greens",
            price: "$8",
        },{
            name: "Coffee",
            type: "drink",
            price: "$1",
        },{
            name: "White Wine",
            type: "drink",
            price: "$2",
        },{
            name: "Red Wine",
            type: "drink",
            price: "$2",
        },{
            name: "Vinho Verde",
            type: "drink",
            price: "$2",
        },{
            name: "IPA",
            type: "drink",
            price: "$2",
        },{
            name: "Pilsner",
            type: "drink",
            price: "$2",
        },{
            name: "Stout",
            type: "drink",
            price: "$2",
        },{
            name: "Sativa Joint",
            type: "cannabis",
            price: "$1",
        },{
            name: "Indica Joint",
            type: "cannabis",
            price: "$1",
        },{
            name: "Hybrid Joint",
            type: "cannabis",
            price: "$1",
        },{
            name: "Sativa Blunt",
            type: "cannabis",
            price: "$3",
        },{
            name: "Indica Blunt",
            type: "cannabis",
            price: "$3",
        },{
            name: "Hybrid Blunt",
            type: "cannabis",
            price: "$3",
        }
    ]

    for (var i=0; i<menuItems.length; i++) {
        const menuItem = document.createElement("div");
        menuItem.className = "menu-item";
        if (menuItems[i].description) {
            menuItem.innerHTML = `<h3>${menuItems[i].name}</h3><p>${menuItems[i].description}</p>`;
        } else {
            menuItem.innerHTML = `<h3>${menuItems[i].name}</h3>`;
        };
        const menuItemPrice = document.createElement("p");
        menuItemPrice.className = "price";
        menuItemPrice.textContent = `${menuItems[i].price}`;
        menuItem.appendChild(menuItemPrice);
        switch (menuItems[i].type) {
            case "starter":
                starters.appendChild(menuItem);
                break;
            case "entree":
                entrees.appendChild(menuItem);
                break;
            case "drink":
                beverages.appendChild(menuItem);
                break;
            case "cannabis":
                cannabis.appendChild(menuItem);
                break;
        };
    }
}