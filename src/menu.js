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

    const menuItem1 = document.createElement("div");
    menuItem1.className = "menu-item";
    menuItem1.innerHTML = "<h3>Wild Greens Salad</h3><p>Dandelion, miner's lettuce, and watercress with a berry vinaigrette</p>";
    const menuItem1Price = document.createElement("p");
    menuItem1Price.className = "price";
    menuItem1Price.textContent = "$2"
    menuItem1.appendChild(menuItem1Price);
    starters.appendChild(menuItem1);

    const menuItem2 = document.createElement("div");
    menuItem2.className = "menu-item";
    menuItem2.innerHTML = "<h3>Wild Mushroom Crostini</h3><p>Foraged chantrelle and morel mushrooms sautéed in garlic and butter, served on toasted local bread</p>";
    const menuItem2Price = document.createElement("p");
    menuItem2Price.className = "price";
    menuItem2Price.textContent = "$3"
    menuItem2.appendChild(menuItem2Price);
    starters.appendChild(menuItem2);

    const menuItem3 = document.createElement("div");
    menuItem3.className = "menu-item";
    menuItem3.innerHTML = "<h3>Dungeness Crab Cakes</h3><p>Lightly pan-fried cakes made with fresh crab, herbs, breadcrumbs, and lemon zest</p>";
    const menuItem3Price = document.createElement("p");
    menuItem3Price.className = "price";
    menuItem3Price.textContent = "$3"
    menuItem3.appendChild(menuItem3Price);
    starters.appendChild(menuItem3);

    const menuItem4 = document.createElement("div");
    menuItem4.className = "menu-item";
    menuItem4.innerHTML = "<h3>Cedar-Smoked Oysters</h3><p>Smoked on cedar planks, served cold with lemon and herbs</p>";
    const menuItem4Price = document.createElement("p");
    menuItem4Price.className = "price";
    menuItem4Price.textContent = "$3"
    menuItem4.appendChild(menuItem4Price);
    starters.appendChild(menuItem4);

    const entrees = document.createElement("div");
    entrees.className = "entrees";
    entrees.innerHTML = "<h2>Entrees</h3>";
    content.appendChild(entrees);

    const menuItem5 = document.createElement("div");
    menuItem5.className = "menu-item";
    menuItem5.innerHTML = "<h3>Cedar-Plank Salmon</h3><p>Fresh sockeye salmon grilled on cedar planks, seasoned with herbs, lemon, and sea salt</p>";
    const menuItem5Price = document.createElement("p");
    menuItem5Price.className = "price";
    menuItem5Price.textContent = "$8"
    menuItem5.appendChild(menuItem5Price);
    entrees.appendChild(menuItem5);

    const menuItem6 = document.createElement("div");
    menuItem6.className = "menu-item";
    menuItem6.innerHTML = "<h3>Salmon Chowder</h3><p>A creamy soup made with chunks of wild salmon, potatoes, onions, herbs, and corn</p>";
    const menuItem6Price = document.createElement("p");
    menuItem6Price.className = "price";
    menuItem6Price.textContent = "$8"
    menuItem6.appendChild(menuItem6Price);
    entrees.appendChild(menuItem6);

    const menuItem7 = document.createElement("div");
    menuItem7.className = "menu-item";
    menuItem7.innerHTML = "<h3>Dungeness Crab Feast</h3><p>Whole Dungeness crab boiled, served with butter, garlic, and lemon</p>";
    const menuItem7Price = document.createElement("p");
    menuItem7Price.className = "price";
    menuItem7Price.textContent = "$10"
    menuItem7.appendChild(menuItem7Price);
    entrees.appendChild(menuItem7);

    const menuItem8 = document.createElement("div");
    menuItem8.className = "menu-item";
    menuItem8.innerHTML = "<h3>Wild Mushroom Risotto</h3><p>A risotto made with foraged chantrelle, morel, and matsutake mushrooms</p>";
    const menuItem8Price = document.createElement("p");
    menuItem8Price.className = "price";
    menuItem8Price.textContent = "$7"
    menuItem8.appendChild(menuItem8Price);
    entrees.appendChild(menuItem8);

    const menuItem9 = document.createElement("div");
    menuItem9.className = "menu-item";
    menuItem9.innerHTML = "<h3>Grass-Fed Burger with Marionberry BBQ Sauce</h3><p>Grass-fed beef topped with a sweet-savory berry-based barbecue sauce, served with local greens</p>";
    const menuItem9Price = document.createElement("p");
    menuItem9Price.className = "price";
    menuItem9Price.textContent = "$8"
    menuItem9.appendChild(menuItem9Price);
    entrees.appendChild(menuItem9);

    const beverages = document.createElement("div");
    beverages.className = "beverages";
    beverages.innerHTML = "<h2>Beverages</h2>";
    content.appendChild(beverages);

    const menuItem10 = document.createElement("div");
    menuItem10.className = "menu-item";
    menuItem10.innerHTML = "<h3>Coffee</h3>";
    const menuItem10Price = document.createElement("p");
    menuItem10Price.className = "price";
    menuItem10Price.textContent = "$1"
    menuItem10.appendChild(menuItem10Price);
    beverages.appendChild(menuItem10);

    const menuItem11 = document.createElement("div");
    menuItem11.className = "menu-item";
    menuItem11.innerHTML = "<h3>White Wine</h3>";
    const menuItem11Price = document.createElement("p");
    menuItem11Price.className = "price";
    menuItem11Price.textContent = "$2";
    menuItem11.appendChild(menuItem11Price);
    beverages.appendChild(menuItem11);

    const menuItem12 = document.createElement("div");
    menuItem12.className = "menu-item";
    menuItem12.innerHTML = "<h3>Red Wine</h3>";
    const menuItem12Price = document.createElement("p");
    menuItem12Price.className = "price";
    menuItem12Price.textContent = "$2";
    menuItem12.appendChild(menuItem12Price);
    beverages.appendChild(menuItem12);

    const menuItem13 = document.createElement("div");
    menuItem13.className = "menu-item";
    menuItem13.innerHTML = "<h3>Vinho Verde</h3>";
    const menuItem13Price = document.createElement("p");
    menuItem13Price.className = "price";
    menuItem13Price.textContent = "$2";
    menuItem13.appendChild(menuItem13Price);
    beverages.appendChild(menuItem13);

    const menuItem14 = document.createElement("div");
    menuItem14.className = "menu-item";
    menuItem14.innerHTML = "<h3>IPA</h3>";
    const menuItem14Price = document.createElement("p");
    menuItem14Price.className = "price";
    menuItem14Price.textContent = "$2";
    menuItem14.appendChild(menuItem14Price);
    beverages.appendChild(menuItem14);

    const menuItem15 = document.createElement("div");
    menuItem15.className = "menu-item";
    menuItem15.innerHTML = "<h3>Pilsner</h3>";
    const menuItem15Price = document.createElement("p");
    menuItem15Price.className = "price";
    menuItem15Price.textContent = "$2";
    menuItem15.appendChild(menuItem15Price);
    beverages.appendChild(menuItem15);

    const menuItem16 = document.createElement("div");
    menuItem16.className = "menu-item";
    menuItem16.innerHTML = "<h3>Stout</h3>";
    const menuItem16Price = document.createElement("p");
    menuItem16Price.className = "price";
    menuItem16Price.textContent = "$2";
    menuItem16.appendChild(menuItem16Price);
    beverages.appendChild(menuItem16);

    const cannabis = document.createElement("div");
    cannabis.className = "cannabis";
    cannabis.innerHTML = "<h2>Cannabis</h2>";
    content.appendChild(cannabis);

    const menuItem17 = document.createElement("div");
    menuItem17.className = "menu-item";
    menuItem17.innerHTML = "<h3>Sativa Joint</h3>";
    const menuItem17Price = document.createElement("p");
    menuItem17Price.className = "price";
    menuItem17Price.textContent = "$1";
    menuItem17.appendChild(menuItem17Price);
    cannabis.appendChild(menuItem17);

    const menuItem18 = document.createElement("div");
    menuItem18.className = "menu-item";
    menuItem18.innerHTML = "<h3>Indica Joint</h3>";
    const menuItem18Price = document.createElement("p");
    menuItem18Price.className = "price";
    menuItem18Price.textContent = "$1";
    menuItem18.appendChild(menuItem18Price);
    cannabis.appendChild(menuItem18);

    const menuItem19 = document.createElement("div");
    menuItem19.className = "menu-item";
    menuItem19.innerHTML = "<h3>Hybrid Joint</h3>";
    const menuItem19Price = document.createElement("p");
    menuItem19Price.className = "price";
    menuItem19Price.textContent = "$1";
    menuItem19.appendChild(menuItem19Price);
    cannabis.appendChild(menuItem19);

    const menuItem20 = document.createElement("div");
    menuItem20.className = "menu-item";
    menuItem20.innerHTML = "<h3>Sativa Blunt</h3>";
    const menuItem20Price = document.createElement("p");
    menuItem20Price.className = "price";
    menuItem20Price.textContent = "$3";
    menuItem20.appendChild(menuItem20Price);
    cannabis.appendChild(menuItem20);

    const menuItem21 = document.createElement("div");
    menuItem21.className = "menu-item";
    menuItem21.innerHTML = "<h3>Indica Blunt</h3>";
    const menuItem21Price = document.createElement("p");
    menuItem21Price.className = "price";
    menuItem21Price.textContent = "$3";
    menuItem21.appendChild(menuItem21Price);
    cannabis.appendChild(menuItem21);

    const menuItem22 = document.createElement("div");
    menuItem22.className = "menu-item";
    menuItem22.innerHTML = "<h3>Hybrid Blunt</h3>";
    const menuItem22Price = document.createElement("p");
    menuItem22Price.className = "price";
    menuItem22Price.textContent = "$3";
    menuItem22.appendChild(menuItem22Price);
    cannabis.appendChild(menuItem22);
}