const grid = document.querySelector(".grid");
const gridHeight = Math.round(parseFloat(getComputedStyle(grid).height));
const gridWidth = Math.round(parseFloat(getComputedStyle(grid).width));

function createSquare(n) {
    for (let i = 1; i <= n ** 2; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.height = gridHeight/n  + "px";
        square.style.width = gridWidth/n  + "px";
        grid.appendChild(square);
    }
}

createSquare(16);



