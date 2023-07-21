
const megaMenuBtn = document.getElementById("mega");
const megaMenuDiv = document.getElementById("mega-menu");
const statisticsSec = document.getElementById("stats");
const skillSection = document.getElementById("skill");
const progressSpans = document.querySelectorAll(".bar span");
const timerSpans = [...document.querySelectorAll(".events .count-down p")];
const scrollbtn = document.getElementById("scrollbtn");
const counterOnScroll = [
  ...document.querySelectorAll(".stats .container .box span"),
];

const daysSpan = document.getElementById("days");
const hoursSpan = document.getElementById("hours");
const minutesSpan = document.getElementById("minutes");
const secondSpan = document.getElementById("seconds");
const date = new Date("2023-7-31 14:00:00");
let started = false;

//The Events Timer
const contdown = window.setInterval(() => {
  let dateNow = new Date();
  let diff = date.getTime() - dateNow.getTime();
  let days = Math.floor(diff / 1000 / 60 / 60 / 24);
  let hours = Math.floor(diff / 1000 / 60 / 60);
  let minutes = Math.floor(diff / 1000 / 60);
  let seconds = Math.floor(diff / 1000);
  if (diff <= 1000) {
    clearInterval(contdown);
  }
  daysSpan.textContent = days;
  hoursSpan.textContent = hours - days * 24;
  minutesSpan.textContent = minutes - hours * 60;
  secondSpan.textContent = seconds - minutes * 60;
  timerSpans.forEach((e) => {
    e.textContent =
      e.textContent.length < 2 ? "0" + e.textContent : e.textContent;
  });
}, 1000);

//On Scroll Actions

window.onscroll = function () {
  //show scroll top btn when scrolling is greater than clients apparing document height
  if (scrollY >= document.documentElement.clientHeight) {
    scrollbtn.classList.remove("fade");
  } else {
    scrollbtn.classList.add("fade");
  }

  //increase width smoothly  when reaching skill section

  if (window.scrollY >= skillSection.offsetTop - 300) {
    for (let i = 0; i < progressSpans.length; i++) {
      progressSpans[i].style.width = progressSpans[i].dataset.width;
    }
  }
  //increase numbers smoothly every when reaching stats section

  if (window.scrollY >= statisticsSec.offsetTop - 300) {
    started = true;
    counterOnScroll.forEach((e) => {
      increaseOnScroll(e);
    });
  }
};

//show mega menu on click
megaMenuBtn.onclick = function () {
  megaMenuDiv.classList.toggle("active-menu");
};

scrollbtn.onclick = function () {
  scrollTo({
    behavior: "smooth",
    top: 0,
  });
};
/*************** */

function increaseOnScroll(ele) {
  let goal = +ele.dataset.num;
  let timer = setInterval(() => {
    if (ele.textContent < goal) {
      ++ele.textContent;
    } else {
      clearInterval(timer);
    }
  }, 2000 / goal);
}
