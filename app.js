function random(number) {
    return Math.floor(Math.random() * (number + 1));
}
let randomColors = [];
let randomSelectedColor = '';

const displayRandomcolors = () => {
    const randomColorContainer = document.getElementById(
        "random-colors-container"
    );
    const rndCol1 = `rgb(${random(135)}, ${random(255)}, ${random(255)})`;
    // console.log(rndCol)
    randomColors.push(rndCol1);
    const rndCol2 = `rgb(${random(135)}, ${random(255)}, ${random(255)})`;
    randomColors.push(rndCol2);
    // console.log(rndCol)
    const rndCol3 = `rgb(${random(135)}, ${random(255)}, ${random(255)})`;
    randomColors.push(rndCol3);
    // console.log(rndCol)

    
    randomColorContainer.innerHTML = `
    <div class='random-colors' style="background-color: ${rndCol1};" onclick="checkColor(this)"></div>
    <div class='random-colors' style="background-color: ${rndCol2};" onclick="checkColor(this)"></div>
    <div class='random-colors' style="background-color: ${rndCol3};" onclick="checkColor(this)"></div>
    `
};
const newColor = document.getElementById("new-color").addEventListener("click", () => {
    randomColors = []
      displayRandomcolors();
        
    //   console.log(randomColors)
      const randomSelectedColorIndex = Math.floor(Math.random() * 3)
    //   console.log(randomSelectedColorIndex)
      randomSelectedColor=randomColors[randomSelectedColorIndex];
    //   console.log(randomSelectedColor)
      
 
      const rgbId = document.getElementById('rgb-id');
        rgbId.innerText = `${randomSelectedColor}`
  
        

        
        
    });
    
    const checkColor = (color)=> {
        // const randomSelectedColor =  newColor();
        // console.log(randomSelectedColor)
        const pickedColor  = color.style.backgroundColor;
        if (pickedColor !== randomSelectedColor) {
            
            color.style.visibility  = 'hidden';
            // color.style.visibility  = document.getElementById('random-colors-container').style.backgroundColor;
            // console.log(document.getElementById('random-colors-container').style.backgroundColor)
        }
        else{
            console.log('matched')
            const rgbHeading = document.getElementById('rgb-heading')
         
            rgbHeading.style.backgroundColor = randomSelectedColor
            // rgbHeading.style.backgroundColor = document.getElementById('random-colors-container').style.backgroundColor

        
        }
       
        // console.log(color)
        // console.log(color.style.backgroundColor);
    }
    