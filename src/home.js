import salmonLogo from "./assets/freepik__a_salmon_smoking_a_joint.png";
import cascadianFlag from "./assets/Cascadian-Flag-1024x614.png";
export function buildHomePage() {
    const content = document.querySelector("#content")

    content.innerHTML = "";

    const logo = document.createElement("div");
    logo.className = "logo";
    content.appendChild(logo);

    const title = document.createElement("h1");
    title.textContent = "The Smoking Salmon";
    logo.appendChild(title);

    const logoImg = document.createElement("img");
    logoImg.src = salmonLogo;
    document.querySelector(".logo").appendChild(logoImg);

    const desc = document.createElement("div");
    desc.className = "desc";
    content.appendChild(desc);

    const descText = document.createElement("p");
    descText.textContent = "The Smoking Salmon is a classic Cascadian Steakhouse and Cannabis Bar. Our menu is made with fresh ingredients, our drinks are brewed locally, and our cannabis is all home-grown - whether it's eating, drinking, or smoking, we're committed to giving you the best experience!";
    desc.appendChild(descText);

    const disclaimer = document.createElement("p");
    disclaimer.className = "disclaimer";
    disclaimer.textContent = "Disclaimer: This is not a real establishment; and even if it was, it would be in Cascadia, where weed is legal.";
    desc.appendChild(disclaimer);
    
    const hours = document.createElement("div");
    hours.className = "hours";
    hours.innerHTML = "<h2>Hours</h2><p>Sunday: 8am - 10pm</p><p>Monday: 6am - 10pm</p><p>Tuesday: 6am - 10pm</p><p>Wednesday: 6am - 10pm</p><p>Thursday: 6am - 10pm</p><p>Friday: 6am - 12pm</p><p>Saturday: 8am - 12pm</p>";
    content.appendChild(hours);

    const location = document.createElement("div");
    location.className = "location";
    location.innerHTML = "<h2>Location</h2><p>420 69th Ave, Fir Hollow, Cascadia</p>";
    content.appendChild(location);

    const flag = document.createElement("img");
    flag.src = cascadianFlag;
    document.querySelector(".location").appendChild(flag);
};