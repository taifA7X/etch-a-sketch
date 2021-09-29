let grid = document.querySelector('#grid')
let erase = document.querySelector('#erase')
let size = prompt("Enter length of sides")

function createGrid(size) {
    for (let i = 0; i < (size *size); i++) {
        let div = document.createElement('div')
        div.style.border = '1px solid grey';
        div.addEventListener('mouseenter', () => {
            div.style.backgroundColor = 'red'
        })
        erase.addEventListener('click', () => {
            div.style.backgroundColor = 'white'
        })
        grid.appendChild(div)
    }
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
}

if (size > 101) {
    alert('Too much');
}
else {createGrid(size)}











