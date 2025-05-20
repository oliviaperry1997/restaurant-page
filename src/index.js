import "./styles.css";
import { buildHomePage } from "./home.js";
import { buildMenuPage } from "./menu.js";

buildHomePage();

const homeBtn = document.querySelector("#homeBtn");
const menuBtn = document.querySelector("#menuBtn");
const contactBtn = document.querySelector("#contactBtn");

homeBtn.addEventListener("click", buildHomePage);
menuBtn.addEventListener("click", buildMenuPage);