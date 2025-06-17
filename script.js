const btns = document.querySelectorAll(".btns");
const calcDisplay = document.querySelector(".calc-display");

const display = document.createElement("div");
display.classList.toggle("display");
calcDisplay.appendChild(display);


const one = document.querySelector(".btn-1");
const two = document.querySelector(".btn-2");
const three = document.querySelector(".btn-3");
const four = document.querySelector(".btn-4");
const five = document.querySelector(".btn-5");
const six = document.querySelector(".btn-6");
const seven = document.querySelector(".btn-7");
const eight = document.querySelector(".btn-8");
const nine = document.querySelector(".btn-9");
const zero = document.querySelector(".btn-0");  

for(let btn of btns) {
    btn.addEventListener("mouseenter", (e) => {
        btn.style.cursor = "pointer";
    });
}

one.addEventListener("click", (e) => {
    display.textContent += "1";
    
});

two.addEventListener("click", (e) => {
    display.textContent += "2";
});