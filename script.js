let size = 16
let containerDiv = document.createElement('div');
containerDiv.setAttribute('class', 'container');
containerDiv.setAttribute('id', 'myContainer');
for (let i = 1; i < size+1; i++) {
    let itemDiv = document.createElement('div');
    itemDiv.setAttribute('class', 'item');
    itemDiv.setAttribute('id', i);
    containerDiv.appendChild(itemDiv);

}

document.body.appendChild(containerDiv);
let items = document.querySelectorAll('div.item');
    items.forEach((div) => {
        div.addEventListener('mouseenter', changeColor);
        });

const button = document.querySelector('button.btn');
button.addEventListener('click', clearGrid);    


function changeColor(e){
    let activatedSquare= document.getElementById(e.target.id);
    activatedSquare.setAttribute('class', 'itemDarker');
}
function clearGrid(){
    const currentGrid = document.querySelectorAll('div.item');
    currentGrid.forEach((div) => {
        containerDiv.removeChild(div);
        });
    const currentGridDark = document.querySelectorAll('div.itemDarker');
    currentGridDark.forEach((div) => {
        containerDiv.removeChild(div);
        });
    newGrid();
}

function newGrid(){
    let newSize = prompt("How many squares per side do you want the grid to be?");
    if (isNaN(newSize)){
        newSize = prompt("Please enter a valid number!");
    } else {
        newSize = parseInt(newSize, 10);
        for (let i = 1; i < (newSize*newSize)+1; i++) {
                let itemDiv = document.createElement('div');
                itemDiv.setAttribute('class', 'item');
                itemDiv.setAttribute('id', i);
                containerDiv.appendChild(itemDiv);
            
            } 

       
        let gridRowsValue = 'grid-template-rows: ';
        let gridColumnsValue = '; grid-template-columns: ';
        for (let i = 0; i <(newSize); i++) {
                gridColumnsValue += 'auto ';
                gridRowsValue += 'auto ';
                console.log(gridColumnsValue);
                let newGridValue = gridRowsValue + gridColumnsValue;
                document.getElementById('myContainer').setAttribute('style', newGridValue); 
                
        }
        let items = document.querySelectorAll('div.item');
        items.forEach((div) => {
        div.addEventListener('mouseenter', changeColor);
        });
        
        
        }
    }
       

