const otherLinks = document.querySelector(".header .nav-bar .other-links")
const otherLink = document.querySelector(".header .nav-bar .other-link")
document.addEventListener("click", (e) => {
    if (e.target === otherLink) {
        otherLinks.classList.toggle("active")
    } else {
        otherLinks.classList.remove("active")
    }
})
// Set the date we're counting down to
let count = 2024;
let countDownDate = new Date(`Jan 1, ${count}, 00:00:00`);
let year = new Date();
let days = document.querySelector(".days")
let hours = document.querySelector(".hours")
let minutes = document.querySelector(".minutes")
let seconds = document.querySelector(".seconds")
let years = document.querySelector("#events .title span")
// Update the count down every 1 second
let x = setInterval(function() {
  let now = new Date();
  let distance = countDownDate - now;
  let day = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let second = Math.floor((distance % (1000 * 60)) / 1000);
    days.innerHTML = day
    hours.innerHTML = hour
    minutes.innerHTML = minute
    seconds.innerHTML = second
    years.innerHTML = year.getFullYear()
    if (distance === 0) {
        ++count
        setInterval(x)
    }
}, 1000);
