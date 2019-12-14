
// initializes marker color as black
let markerColor = "black";


// sets container size, creates divs to fill container, gives divs listener, adds divs
function makeGrid(num) {

    // stops function if user pushes cancel on new input, leaving old grid in place
    if (num == null) {
        return;
    }

    // clears old grid to make room for new grid
    resetGrid();

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

        div.addEventListener("mouseover", determinePaintColor);

        document.getElementById("container").appendChild(div);
    }
}

// random sets all hex characters and iterates through them randomly 
// using Math.random() then sets them equal to color
// gradient at bottom takes current rgb value, splits it, and adjusts by 10%
function determinePaintColor(e) {
    if (markerColor == "black") {
        return e.target.style.backgroundColor = "black";
    } else if (markerColor == "random") {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return e.target.style.backgroundColor = color;
    } else {
        const rgb = e.target.style.backgroundColor.replace(/[^\d,]/g, '').split(',');
        rgb[2] = rgb[1]; // for some reason rgb[2] was alwasy 25500. this fixed it. 
        rgb[0] -= Math.round((255 / 100) * 10);
        rgb[1] -= Math.round((255 / 100) * 10);
        rgb[2] -= Math.round((255 / 100) * 10);
        e.target.style.backgroundColor = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
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

// gets user to input new size, checks for correct input, 
// and then calls to make new grid based on input
function inputSize() {
    let answer = prompt("How many squares across would you like?");
    while (isNaN(answer) || answer < 1 || answer > 99) {
        if (answer == null) {
            break;
        }
        answer = prompt("How many squares across would you like? You must input a number " + 
                        "between 1 and 99");
    }
    makeGrid(answer);
}

// selects all elements w/ class ".boxes" and removes them from container
function resetGrid() {
    const box = Array.from(document.querySelectorAll('.boxes'));
    box.forEach(boxes => boxes.parentNode.removeChild(boxes));
}

// makes initial grid to fill page on load
makeGrid(16);



