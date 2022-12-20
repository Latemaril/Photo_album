const dragItems = document.querySelectorAll(".js_item")
const dropZones = document.querySelectorAll(".js_cell")
// const right = document.querySelector('.right');

// right.addEventListener('drop', event => {
//     console.log(event.target)
//     event.preventDefault()
//
//     const dragFlag = event.dataTransfer.getData("js_item");
//     const dragItem = document.querySelector(`[data-item="${dragFlag}"]`);
//     const clone = dragItem.cloneNode(true);
//     clone.id = "dick"
//
//     console.log(event.target.className)
//     if (event.target.className.includes('js_cell')) {
//         event.target.append(clone);
//     } else {
//         const parent = event.target.parentNode
//         parent.removeChild(event.target)
//         parent.append(clone)
//     }
// })

dragItems.forEach((js_item) => {
    js_item.addEventListener("dragstart", handlerDragstart)
    js_item.addEventListener("dragend", handlerDragend)
    js_item.addEventListener("drag", handlerDrag)
})

dropZones.forEach((js_cell) => {
    js_cell.addEventListener("dragenter", handlerDragenter)
    js_cell.addEventListener("dragleave", handlerDragleave)
    js_cell.addEventListener("dragover", handlerDragover)
    js_cell.addEventListener("drop", handlerDrop)
})

function handlerDragstart(event) {
    event.dataTransfer.setData("js_item", this.dataset.item)

    this.classList.add("js_item--active")
}

function handlerDragend(event) {
    console.log("Fuck")
    this.classList.remove("js_item--active")
}

function handlerDrag(event) {}

function handlerDragenter(event) {
    event.preventDefault()
    this.classList.add("js_cell--active")
}

function handlerDragleave(event) {
    this.classList.remove("js_cell--active")
}

function handlerDragover(event) {
    event.preventDefault()
}

function handlerDrop(event) {
    this.classList.remove("js_cell--active")

    console.log(event.target)
    event.preventDefault()

    const dragFlag = event.dataTransfer.getData("js_item")
    const dragItem = document.querySelector(`[data-item="${dragFlag}"]`)
    // dragItem.removeAttribute("draggable")
    const clone = dragItem.cloneNode(true)
    clone.id = "dick"

    console.log(event.target.className)
    if (event.target.className.includes('js_cell')) {
        event.target.append(clone)
    } else {
        const parent = event.target.parentNode
        parent.removeChild(event.target)
        parent.append(clone)
    }
}

