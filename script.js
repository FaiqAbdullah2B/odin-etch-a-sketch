let setGridButton = document.querySelector("#setGrid");
let container = document.querySelector("#container");

function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";

    for(let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

function getRandom255() {
   return Math.floor(Math.random() * 256);
}

function createGrid(size) {
    container.textContent = '';

    for (let i = 0; i < size; i++) {

        let row = document.createElement("div");
        row.classList.add("row");

        for (let i = 0; i < size; i++) {
            let spaen = document.createElement("div");

            let opacity = 0;

            spaen.addEventListener("click", () => {
                if(opacity < 1)
                    opacity += 0.1;

                spaen.style.backgroundColor = `rgba(${getRandom255()},
                ${getRandom255()}, ${getRandom255()}, ${opacity})`;
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