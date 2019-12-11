function makeGrid(num) {

    let boxSize = (960 / num) + "px";
    let boxTotal = num * num;

    for (i = 0; i < boxTotal; i++) {
        let div = document.createElement("div");
        div.style.width = boxSize;
        div.style.height = boxSize;
        div.classList.add("boxes");
        div.setAttribute("id", "div" + i);

        div.addEventListener("mouseover", function() {
            div.classList.add('pixeled');
        })

        document.getElementById("container").appendChild(div);
    }
}

function clearGrid() {
    const boxes = Array.from(document.querySelectorAll('.pixeled'));
    boxes.forEach(pixeled => pixeled.classList.remove('pixeled'));
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



