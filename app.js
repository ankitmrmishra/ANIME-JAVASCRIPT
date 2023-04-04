
const wrapper = document.getElementById('tile')

let columns = 0
 let row = 0
const colors = [
    "rgb(218, 54, 43)" ,
     "rgb(218, 54, 43)" ,
"rgb(41, 83, 140)" ," rgb(41, 83, 140)" ,
"rgb(219, 164, 71)" ,  "rgb(219, 164, 71)",
"rgb(67, 61, 111)  ","rgb(67, 61, 111)",
"rgb(98, 251, 154) "," rgb(98, 251, 154)",
"rgb(44, 119, 238) "," rgb(44, 119, 238)",
"rgb(218, 147, 190) "," rgb(218, 147, 190)",
"rgb(60, 187, 167) "," rgb(60, 187, 167)",
"rgb(139, 46, 212) "," rgb(139, 46, 212)",
"rgb(59, 145, 169) "," rgb(59, 145, 169)"
]

const handleonclick = index =>{
  
 anime({
    targets: ".tile",
    backgroundColor : colors[index % (colors.length)],

    delay: anime.stagger(100,{
      grid: [columns, row],
      from: index
    })
  });
}

const createTile = index => {
const tile = document.createElement("div");
tile.classList.add("tile");
tile.addEventListener('click' , () => handleonclick(index) )  


return tile;
}

const createTiles = quantity =>{
    Array.from(Array(quantity)).map((tile , index) =>  {
        wrapper.appendChild(createTile(index));
    })
}



const createGrid = () =>{
    wrapper.innerHTML = " ";

    columns = Math.floor(document.body.clientWidth / 50);
     row = Math.floor(document.body.clientWidth / 50);
     wrapper.style.setProperty("--columns" , columns);
     wrapper.style.setProperty("--row" , row);

    
createTiles(columns * row);
}
createGrid();

window.onresize = () => createGrid();