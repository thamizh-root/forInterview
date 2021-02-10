const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
    console.log("Value of i is "+i);
    console.log("Value of hexColor "+hexColor);
  }
 
   color.textContent = hexColor;
   console.log("color.textContent ="+hexColor);
   
  document.body.style.backgroundColor = hexColor ;
  console.log("document.body.style.backgroundColor ="+hexColor);
});

function getRandomNumber() {

 return Math.floor(Math.random() * hex.length);
}
