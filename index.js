// js of header 

const megaMenuBtn = document.getElementById("mega");
const megaMenuDiv = document.getElementById("mega-menu");
megaMenuBtn.onclick = function () {
  megaMenuDiv.classList.toggle("active-menu");
};
