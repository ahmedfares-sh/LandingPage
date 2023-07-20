// js of header

const megaMenuBtn = document.getElementById("mega");
const megaMenuDiv = document.getElementById("mega-menu");

const skillSection = document.getElementById("skill");
const progressSpans = document.querySelectorAll(".bar span");

window.onscroll = function () {
   console.log(window.scrollY);
   console.log(skillSection.offsetTop);
  if (window.scrollY >= skillSection.offsetTop - 300) {

   
    for(let i =0;i<progressSpans.length;i++){
        progressSpans[i].style.width = progressSpans[i].dataset.width
    }
  }
};
megaMenuBtn.onclick = function () {
  megaMenuDiv.classList.toggle("active-menu");
};
