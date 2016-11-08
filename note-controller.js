"use strict";

var element = document.getElementById("app").innerHTML;

function changeHTMLText(id, string) {
   document.getElementById(id).innerHTML = string;
}


 console.log(document.getElementById("app").innerHTML);

 changeHTMLText("app", "Howdy");

 console.log(document.getElementById("app").innerHTML);
