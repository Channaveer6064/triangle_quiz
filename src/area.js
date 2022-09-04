var a = document.querySelector("#s1");
var b = document.querySelector("#s2");
var btner = document.querySelector(".clickH");
var op = document.querySelector("#op");

function CalCulteArea() {
  op.innerText = 0.5 * (parseInt(a.value, 10) * parseInt(b.value, 10));
  console.log(0.5 * (parseInt(a.value, 10) * parseInt(b.value, 10)));
}

btner.addEventListener("click", CalCulteArea);
