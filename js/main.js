"use strict";

let url = document.location;
let navLinks = document.querySelectorAll(".main-navigation__items a");

navLinks.forEach((value) => {
  value.href == url.href ? (value.style.color = "#0B0706") : "#525560";
});
