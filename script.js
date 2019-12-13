
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
        div.style.background = "rgb(255, 255, 255)";
        div.classList.add("boxes");
        div.setAttribute("id", "div" + i);

        div.addEventListener("mouseover", changeBoxColor);

        document.getElementById("container").appendChild(div);
    }
}

// sets target to selected color
function changeBoxColor(e) {
        e.target.style.backgroundColor = determinePaintColor(e.target.style.background);
}

// random sets all hex characters and iterates through them randomly 
// using Math.random() then sets them equal to color
// gradient at bottom takes current rgb value, splits it, and adjusts by 10%
function determinePaintColor(current) {
    if (markerColor == "black") {
        return "black";
    } else if (markerColor == "random") {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    } else {
        const rgb = current.replace(/[^\d,]/g, '').split(',');
        rgb[2] = rgb[1]; // for some reason rgb[2] was alwasy 25500. this fixed it. 
        rgb[0] -= Math.round((255 / 100) * 10);
        rgb[1] -= Math.round((255 / 100) * 10);
        rgb[2] -= Math.round((255 / 100) * 10);
        return `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
    }
}

// changes color based on selected button
function changeMarkerColor(color) {
    if (color == 0) {
        markerColor = "black";
    } else if (color == 1) {
        markerColor = "gradient";
        clearGrid();
    } else {
        markerColor = "random";
    }
}

// selects all elements w/ class ".boxes" and sets their background to white
function clearGrid() {
    const boxes = Array.from(document.querySelectorAll(".boxes"));
    boxes.forEach(boxes=> boxes.style.background = "rgb(255, 255, 255)");
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



