import "./styles.css";
import salmonLogo from "./assets/freepik__a_salmon_smoking_a_joint.png";
import cascadianFlag from "./assets/Cascadian-Flag-1024x614.png";

const logo = document.createElement("img");
logo.src = salmonLogo;
document.querySelector("#logo").appendChild(logo);

const flag = document.createElement("img");
flag.src = cascadianFlag;
document.querySelector(".location").appendChild(flag);