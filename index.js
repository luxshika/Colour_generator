const ContainerElement = document.querySelector(".container");
for (let index = 0; index < 20; index++) {
 const colourContainerEl = document.createElement("div");
 colourContainerEl.classList.add("colour-container");
 ContainerElement.appendChild(colourContainerEl);
  
}
const colourContainerEl = document.querySelectorAll(".colour-container");
generateColours()

function generateColours(){
    colourContainerEl.forEach((colourContainerEl) => {
      const newColourCode = randomColour()
      colourContainerEl.style.backgroundColor = "#"+ newColourCode;
      colourContainerEl.innerText = "#"+newColourCode;


    })

}
function randomColour(){
  const chars = "0123456789abcdef";
  const colourCodeLength = 6;
  var colour = "";
  for (let index = 0; index < colourCodeLength; index++) {
       const randomNum =Math.floor(Math.random()*chars.length);
       colour += chars.substring(randomNum,randomNum+1);
      
    
  }
  return colour;
}