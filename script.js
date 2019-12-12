
// initializes marker color as black
let markerColor = "black";


// sets container size, creates divs to fill container, gives divs listener, adds divs
function makeGrid(num) {

    let boxSize = (600 / num) + "px";
    let boxTotal = num * num;
    let container = document.querySelector("#container");

    container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${num}, 1fr)`;

    for (i = 0; i < (boxTotal); i++) {
        let div = document.createElement("div");
        div.style.width = boxSize;
        div.style.height = boxSize;
        div.classList.add("boxes");
        div.setAttribute("id", "div" + i);

        div.addEventListener("mouseover", changeBoxColor);

        document.getElementById("container").appendChild(div);
    }
}

// sets target to selected color
function changeBoxColor(e) {
    e.target.style.background = markerColor;
}

// changes color based on selected button
function changeMarkerColor(color) {
    if (color == 0) {
        markerColor = "black";
    } else if (color == 1) {
        markerColor = "blue";
    } else {
        markerColor = "red";
    }
}

// selects all elements w/ class ".boxes" and sets their background to white
function clearGrid() {
    const boxes = Array.from(document.querySelectorAll(".boxes"));
    boxes.forEach(boxes=> boxes.style.background = "white");
}

// gets user to input new size, removes old grid, makes new grid based on input
function inputSize() {
    let answer = prompt("How many squares across would you like?");
    resetGrid();
    makeGrid(answer);
}

// selects all elements w/ class ".boxes" and removes them from container
function resetGrid() {
    const box = Array.from(document.querySelectorAll('.boxes'));
    box.forEach(boxes => boxes.parentNode.removeChild(boxes));
}

// makes initial grid to fill page on load
makeGrid(16);



