/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let whoIndx = Math.floor(Math.random() * who.length);
  let actionIndx = Math.floor(Math.random() * action.length);
  let whatIndx = Math.floor(Math.random() * what.length);
  let whenIndx = Math.floor(Math.random() * when.length);
  // return (who "+" action "+" what "+" when);

  let screen =
    who[whoIndx] +
    " " +
    action[actionIndx] +
    " " +
    what[whatIndx] +
    " " +
    when[whenIndx];
  document.getElementById("excuse").innerHTML = screen;
  console.log(
    who[whoIndx] +
      " " +
      action[actionIndx] +
      " " +
      what[whatIndx] +
      " " +
      when[whenIndx]
  );
};
