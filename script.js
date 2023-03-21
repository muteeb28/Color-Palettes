var css = document.querySelector("h3");
var colour1 =document.querySelector(".colour1");
var colour2=document.querySelector(".colour2");
var body =document.getElementById("gradient");
var randomButton = document.getElementById("random");

function setGradient(){
    body.style.background="linear-gradient(to right,"+colour1.value +","+colour2.value+")";
    css.textContent =body.style.background+";";
}

// Set the initial gradient on page load
setGradient();

colour1.addEventListener("input",setGradient);
colour2.addEventListener("input",setGradient);

// Add event listener to the "Random" button
randomButton.addEventListener("click", function(){
    var randomColor1 = getRandomColor();
    var randomColor2 = getRandomColor();
    colour1.value = randomColor1;
    colour2.value = randomColor2;
    setGradient();
});

// Function to generate a random color
function getRandomColor(){
    var letters = "0123456789ABCDEF";
    var color = "#";
    for(var i=0; i<6; i++){
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;
}



// function hexToRgba(hex, alpha) {
//     var r = parseInt(hex.slice(1, 3), 16),
//         g = parseInt(hex.slice(3, 5), 16),
//         b = parseInt(hex.slice(5, 7), 16);
  
//     if (alpha) {
//       return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
//     } else {
//       return "rgb(" + r + ", " + g + ", " + b + ")";
//     }
//   }
  

// var css = document.querySelector("h3");
// var colour1 =document.querySelector(".colour1");
// var colour2=document.querySelector(".colour2");
// var body =document.getElementById("gradient");

// function setGradient(){
//     body.style.background="linear-gradient(to right,"+colour1.value +","+colour2.value+")";
//     css.textContent =body.style.background+";";
// }

// colour1.addEventListener("input",setGradient);
// colour2.addEventListener("input",setGradient);





// body.style.background = "linear-gradient(to right,red,blue)";
// colour1.addEventListener("input",function(){
//  body.style.background="linear-gradient(to right,"+colour1.value +","+colour2.value+")";
// })
// colour2.addEventListener("input",function(){
//     body.style.background="linear-gradient(to right,"+colour1.value +","+colour2.value+")";
// })

// colour1.addEventListener(input,function(){
//     body.style.background = 
//     "linear-gradient(to right,"
//     +colour1.value
//     +", "
//     +colour2.value
//     +")";
// })