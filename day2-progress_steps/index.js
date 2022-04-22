const progress = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let currentActive = 1
next.addEventListener('click', () => {
    currentActive++
    if (currentActive > 4) {
        currentActive = circles.length
    }
    console.log(currentActive)
    update()

})
prev.addEventListener("click", () => {
    if (currentActive > 1) {
        currentActive--
        console.log(currentActive);
    }
    update()

})
let update = () => {

    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
    })
    const actives = document.querySelectorAll(".active")
    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + "%"
    if (actives.length === 1) {
        prev.disabled = true
    } else if (actives.length === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
} 
