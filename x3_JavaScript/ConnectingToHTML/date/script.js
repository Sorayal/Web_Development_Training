"use strict";

// id needs # before the name
const namedPara = document.querySelector("#main_para");

const languages = ["Java", "Go", "C"];

const liNodes = languages.map((lang) => {
  let li = document.createElement("li");
  li.textContent = lang;
  return li;
});

const paraFill = function () {
  //namedPara.innerHTML = "Ruby Ruby";
  namedPara.append(...liNodes);
};

const paraRemove = function () {
  let li = namedPara.childNodes;
  console.log(li);
  while (namedPara.firstChild) {
    namedPara.removeChild(namedPara.firstChild);
    console.log("Removing...");
  }
  /*
  li.forEach((element) => {    
    // doesnt delete all elements, leaves one for unknown reason
    element.remove();
    console.log(li);
  });
  */
};
