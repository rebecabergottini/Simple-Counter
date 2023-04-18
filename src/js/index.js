//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import Home from "./component/home.jsx";

let digitSec1 = 0;
let digitSec2 = 0;
let digitMin1 = 0;
let digitMin2 = 0;
let digitHour1 = 0;
let digitHour2 = 0;


setInterval(function () {
  digitSec1++;
  if (digitSec1 === 10) {
    digitSec1 = 0;
    digitSec2++;
  }
  if (digitSec2 === 6) {
    digitSec2 = 0;
    digitMin1++;
  }
  if (digitMin1 === 10) {
    digitMin1 = 0;
    digitMin2++;
  }
  if (digitMin2 === 6) {
    digitMin2 = 0;
    digitHour1++;
  }
  if (digitHour1 === 10) {
    digitHour1 = 0;
    digitHour2++;
  }
  if (digitHour2 === 2 && digitHour1 === 4) {
    digitHour2 = 0;
    digitHour1 = 0;
  }

    ReactDOM.render( <Home
      segundo1={digitSec1}
      segundo2={digitSec2}
      minuto1={digitMin1}
      minuto2={digitMin2}
      hora1={digitHour1}
      hora2={digitHour2}
    /> , document.querySelector("#app"));
}, 1000)
