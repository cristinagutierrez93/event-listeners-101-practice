// You now have a 3x3 grid. We want to configure this grid such that when the left 3 cells are clicked, the colors turn red, when the middle 3 cells are clicked, the color turns green, and when the last 3 cells are clicked, the color turns blue. 

let redGridCell= document.getElementsByClassName("grid-cell red");

for (let i=0; i<redGridCell.length; i++){
        redGridCell.addEventListener ("click",() => {
        redGridCell.style.backgroundColor= "red";
    })
}

// Write some JS code below such that event listeners are attached to all the correct elements following the specifications above.

// Hint: Some sort of loop may be helpful to you in this process!