/* eslint-disable */
import "bootstrap";
import "./style.css";

let who = ["the dog", "my granma", "his turtle", "my bird"];
let what = ["eat", "pissed", "crushed", "broked"];
let when = [
  "before the class",
  "right in time",
  "when i finished",
  "during my lunch",
  "why I was praying"
];

window.onload = function() {
  //write your code here
  let randomWho = Math.floor(Math.random() * 3) + 1;
  let randomWaht = Math.floor(Math.random() * 3) + 1;
  let randomWhen = Math.floor(Math.random() * 4) + 1;
  let excuse =
    "<h1>" +
    who[randomWho] +
    " " +
    what[randomWaht] +
    " " +
    when[randomWhen] +
    "</h1>";
  document.querySelector("#excuse").innerHTML = excuse;
};
