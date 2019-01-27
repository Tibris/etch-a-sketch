let resetButton = document.getElementById("reset-button");
let containerDiv = document.getElementById("container-div");

function grid(number) {
    for(let i = 0; i < number; i++) {
        let row = document.createElement('div');
        row.className = "row";

        document.getElementById("container-div").appendChild(row);
        for(let j = 0; j < number; j++) {
            let square = document.createElement('div');
            square.className = "square";
            square.style.width = 550/number + "px";
            square.style.height = 550/number + "px";
            row.appendChild(square);
            let x = 1;
            square.addEventListener("mouseover", function() {
                let red = (Math.floor(Math.random() * 255))/x;
                let green = (Math.floor(Math.random() * 255))/x;
                let blue = (Math.floor(Math.random() * 255))/x;
                let color = "rgb(" + red + "," + green + "," + blue + ")";
                square.style.backgroundColor = color;
                x=x+35;
            });
        }
        
    }
}

function resetGrid() {
    let gridNumber = prompt("Enter square number(for each side): ", "2");
    containerDiv.innerHTML = "";
    grid(gridNumber);
}


function main() {
    grid(10);
    resetButton.addEventListener("click", resetGrid);

}

main();