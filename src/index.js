import "./styles.css";
import { buildHomePage } from "./home.js";

buildHomePage();

const homeBtn = document.querySelector("#homeBtn");
const menuBtn = document.querySelector("#menuBtn");
const contactBtn = document.querySelector("#contactBtn");

homeBtn.addEventListener("click", buildHomePage);