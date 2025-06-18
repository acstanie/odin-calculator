const btns = document.querySelectorAll(".btns");
const calcDisplay = document.querySelector(".calc-display");

const display = document.createElement("div");
display.classList.toggle("display");
display.textContent = '0';
calcDisplay.appendChild(display);

btns.forEach((btn) => {
     btn.addEventListener("mouseenter", (e) => {
        btn.style.cursor = "pointer";
    });
});

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (e.target.className === 'btns btn-1 dark-grey-btns') {
            if (display.textContent === "0") {
                display.textContent = "";
            }
    
            display.textContent += "1";
        }
        if (e.target.className === 'btns btn-2 dark-grey-btns') {
            if (display.textContent === "0") {
                display.textContent = "";
            }
            display.textContent += "2";
        }
        if (e.target.className === 'btns btn-3 dark-grey-btns') {
            if (display.textContent === "0") {
                display.textContent = "";
            }
            display.textContent += "3";
        }
        if (e.target.className === 'btns btn-4 dark-grey-btns') {
            if (display.textContent === "0") {
                display.textContent = "";
            }
            display.textContent += "4";
        }
        if (e.target.className === 'btns btn-5 dark-grey-btns') {
            if (display.textContent === "0") {
                display.textContent = "";
            }
            display.textContent += "5";
        }
        if (e.target.className === 'btns btn-6 dark-grey-btns') {
            if (display.textContent === "0") {
                display.textContent = "";
            }
            display.textContent += "6";
        }
        if (e.target.className === 'btns btn-7 dark-grey-btns') {
            if (display.textContent === "0") {
                display.textContent = "";
            }
            display.textContent += "7";
        }
        if (e.target.className === 'btns btn-8 dark-grey-btns') {
            if (display.textContent === "0") {
                display.textContent = "";
            }
            display.textContent += "8";
        }
        if (e.target.className === 'btns btn-9 dark-grey-btns') {
            if (display.textContent === "0") {
                display.textContent = "";
            }
            display.textContent += "9";
        }
        if (e.target.className === 'btns btn-0 dark-grey-btns') {
            if (display.textContent === "0") {
                display.textContent = "";
            }
            display.textContent += "0";
        }
        if (e.target.className === 'btns dark-grey-btns decimal') {
            display.textContent += ".";
        }

        if (e.target.className === 'btns grey-btns clear') {
            display.textContent = "0";
        }
        
        console.log(e.target.className)
    });
});

// let num = -2

// console.log(0 - num)