let setGridButton = document.querySelector("#setGrid");
let container = document.querySelector("#container");

function createGrid(size) {
    container.textContent = '';

    for (let i = 0; i < size; i++) {

        let row = document.createElement("div");
        row.classList.add("row");

        for (let i = 0; i < size; i++) {
            let spaen = document.createElement("div");

            spaen.addEventListener("click", () => {
                console.log("L");
            })

            spaen.classList.add("box");

            row.appendChild(spaen);
        }

        container.appendChild(row);
    }
}

createGrid(4);

setGridButton.addEventListener("click", () => {
    let size = prompt("Create grid of size: ", 4) || 4;

    if(size > 100 || size < 1) {
        alert("Invalid Size");
        size = 4;
    }

    createGrid(size);
    
})