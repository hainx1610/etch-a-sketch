const grid = document.querySelector(".grid");
const gridHeight = Math.round(parseFloat(getComputedStyle(grid).height));
const gridWidth = Math.round(parseFloat(getComputedStyle(grid).width));
let mode = "regular";

function colorRandomly(element) {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    element.style.background = bgColor;
}

document.getElementById("change").addEventListener("click", e => {
    let inputValue = +prompt("Please enter a desired width/height");
    if (inputValue > 0 && inputValue < 100 && inputValue) {
        grid.innerHTML = "";
        createSquare(inputValue);
    } else {
        alert("Please choose a number between 0 and 100");
    }
})

document.getElementById("regular").addEventListener("click", e => {
    mode = "regular";
})

document.getElementById("rainbow").addEventListener("click", e => {
    mode = "rainbow";
})

document.getElementById("reset").addEventListener("click", e => {
    mode = "regular";
    grid.innerHTML = "";
    createSquare(16);
})

function addHover(element) {
    element.addEventListener("mouseenter", e => {
        if (mode === "regular") {
            element.classList.add("mouseenter");
        } else if (mode === "rainbow") {
            colorRandomly(element);
        }
    })
}

function createSquare(n) {
    for (let i = 1; i <= n ** 2; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.height = gridHeight/n  + "px";
        square.style.width = gridWidth/n  + "px";
        addHover(square);
        grid.appendChild(square);
    }
}

createSquare(16);











