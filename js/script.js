const dragItems = document.querySelectorAll(".js_item");
const dropZones = document.querySelectorAll(".js_cell");

dragItems.forEach((dragItem) => {
    dragItem.addEventListener("dragstart", handlerDragstart);
    dragItem.addEventListener("dragend", handlerDragend);
    dragItem.addEventListener("drag", handlerDrag);

})

dropZones.forEach((js_cell) => {
    js_cell.addEventListener("dragenter", handlerDragenter);
    js_cell.addEventListener("dragleave", handlerDragleave);
    js_cell.addEventListener("dragover", handlerDragover);
    js_cell.addEventListener("drop", handlerDrop);
})

function handlerDragstart(event) {
    event.dataTransfer.setData("js_item", this.dataset.item);

    this.classList.add("dragItem--active");
}

function handlerDragend(event) {
    this.classList.remove("dragItem--active");
}

function handlerDrag(event) {}

function handlerDragenter(event) {
    event.preventDefault();
    this.classList.add("js_cell--active");
}

function handlerDragleave(event) {
    this.classList.remove("js_cell--active");
}

function handlerDragover(event) {
    event.preventDefault();
}

function handlerDrop(event) {
    if (document.getElementById("dick") !== null) {
        document.getElementById("dick").remove();
    }

    const dragFlag = event.dataTransfer.getData("js_item");
    const dragItem = document.querySelector(`[data-item="${dragFlag}"]`);

    const clone = dragItem.cloneNode(true);
    clone.id = "dick"
    this.append(clone);
}

document.querySelector('button').addEventListener('click', function() {
    const c = document.querySelector('#cont').classList;
    c.toggle('col-md-9');
    document.querySelector('#side').classList.toggle('d-done');
});