// console.log("hello")
var ang1 = document.querySelector("#num1");
var ang2 = document.querySelector("#num2");
var ang3 = document.querySelector("#num3");
var btn = document.querySelector(".click");
var output = document.querySelector("#otpt");

function AngleHandler() {
  // console.log(ang1.value + ang2.value + ang3.value)
  if (
    parseInt(ang1.value, 10) +
      parseInt(ang2.value, 10) +
      parseInt(ang3.value, 10) ===
    180
  ) {
    output.innerText = "Yess....You Got It correct \n Its Triangle";
  } else {
    output.innerText = "Sry You can't make a triangle with those Angles ";
  }
}

btn.addEventListener("click", AngleHandler);
