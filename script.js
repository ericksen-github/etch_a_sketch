let markerColor = "pixeled"

function makeGrid(num) {

    let boxSize = (600 / num) + "px";
    let container = document.querySelector("#container");

    container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${num}, 1fr)`;

    for (i = 0; i < (num * num); i++) {
        let div = document.createElement("div");
        div.style.width = boxSize;
        div.style.height = boxSize;
        div.classList.add("boxes");
        div.setAttribute("id", "div" + i);

        div.addEventListener("mouseover", function() {
            div.classList.add(markerColor);
        })

        document.getElementById("container").appendChild(div);
    }
}

function changeMarkerColor(color) {
    clearGrid()
    if (color == 0) {
        markerColor = "pixeled";
    } else if (color == 1) {
        markerColor = "blueColor";
    } else {
        markerColor = "redColor";
    }
    const boxes = Array.from(document.querySelectorAll(".boxes"));
    boxes.forEach(boxes => boxes.addEventListener("mouseover", function() {
        boxes.classList.add(markerColor);
    }));
}

function clearGrid() {
    const boxes = Array.from(document.querySelectorAll(".boxes"));
    boxes.forEach(boxes=> boxes.classList.remove(markerColor));
}

function inputSize() {
    let answer = prompt("How many squares across would you like?");
    resetGrid();
    makeGrid(answer);
}

function resetGrid() {
    const box = Array.from(document.querySelectorAll('.boxes'));
    box.forEach(boxes => boxes.parentNode.removeChild(boxes));
}

makeGrid(16);



