const otherLinks = document.querySelector(".header .nav-bar .other-links")
const otherLink = document.querySelector(".header .nav-bar .other-link")
document.addEventListener("click", (e) => {
    if (e.target === otherLink) {
        otherLinks.classList.toggle("active")
    } else {
        otherLinks.classList.remove("active")
    }
})

// Animate Width to skills
let ourSkillSection = document.getElementById("our-skills")
let progressSkill = document.querySelectorAll(".prog span")
window.addEventListener("scroll", () => {
    if (window.scrollY >= ourSkillSection.offsetTop - 50) {
        progressSkill.forEach((skill) => {
            skill.style.width = skill.dataset.width
        })
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

// Animate Counter Number
let stats = document.getElementById("stats");
let numberStats = document.querySelectorAll("#stats .number")
const speed = 200;
window.addEventListener("scroll", () => {
    if (window.scrollY >= stats.offsetTop - 450) {
        numberStats.forEach((number) => {
            const animate = () => {
                const value = +number.getAttribute("data-goal");
                const data = +number.innerHTML;
                const time = value / speed;
                if (data < value) {
                    number.innerHTML = Math.ceil(data + time);
                    setTimeout(animate, 100)
                } else {
                    number.innerHTML = value;
                };
            };
            animate();
        });
    };
});
