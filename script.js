
let parentDiv = document.querySelector('#parentDiv')

function createGrid(parent) {
    for (let i = 0; i < 256; i++) {
        let div = document.createElement('div');
        div.addEventListener('mouseenter', () => {
            div.style.backgroundColor = "white"
        })
        parent.appendChild(div)
    }
}
createGrid(parentDiv)








