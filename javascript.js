const grid = document.querySelector(".grid");
const gridHeight = Math.round(parseFloat(getComputedStyle(grid).height));
const gridWidth = Math.round(parseFloat(getComputedStyle(grid).width));

const addHover = element => {
    element.addEventListener("mouseover", e => {
        element.classList.add("mousedover");
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

function addChangeGrid(button) {
    button.addEventListener("click", e => {
        let inputValue = +prompt("Please enter a desired width/height");
        if (inputValue > 0 && inputValue < 100 && inputValue) {
            grid.innerHTML = "";
            createSquare(inputValue);
        } else {
            alert("Please choose a number between 0 and 100");
        }
    })
}
addChangeGrid(document.getElementById("change"));



