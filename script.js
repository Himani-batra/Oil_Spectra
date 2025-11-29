// Scroll Animation
const animateElements = document.querySelectorAll("[data-animate]");

function showElements() {
    animateElements.forEach(el => {
        const rect = el.getBoundingClientRect().top;
        if (rect < window.innerHeight - 100) {
            el.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", showElements);
window.addEventListener("load", showElements);