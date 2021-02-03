const container = document.querySelector('.container');
const resetBtn = document.querySelector('.reset-btn');


resetBtn.addEventListener('click', resetGrid);
window.addEventListener('load', () =>{
    setGrid(10, 10);
});


myForm.addEventListener('submit', (e)=> {
    e.preventDefault();
     rows = Number(document.myForm.rowInput.value);
     columns = Number(document.myForm.columns.value);
    console.log(columns);
    console.log(rows);
    setGrid(rows, columns);
});

function setGrid (rows, columns){
    clearGrid();

    for (let i =0; i<rows; i++ ){
        const row = document.createElement('div');
        row.classList.add('grid-row');
        container.appendChild(row);

        for (let i =0; i<columns; i++ ){
            const block = document.createElement('div');
            block.classList.add('block');
            block.addEventListener('click', blockToggle);
            row.appendChild(block);
        }
    }
}




function resetGrid() {
    const gridArray = Array.from(container.childNodes);
        gridArray.forEach((row) => {
        const rowArray = Array.from(row.childNodes);
        rowArray.forEach((block)=>{
            if(block.classList == 'block-toggled') {
                block.classList.remove('block-toggled');
                block.classList.add('block'); 
                
            }
        });
    });
    }






function clearGrid() {
const gridArray = Array.from(container.childNodes);
    gridArray.forEach((element) => {
    container.removeChild(element);
});
}


function blockToggle(e) {
    if(e.target.classList[0] == 'block') {
        this.classList.remove('block'); 
        this.classList.add('block-toggled');
    }else {
        this.classList.remove('block-toggled');
        this.classList.add('block'); 
    }
    
}


 

