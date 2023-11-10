
const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResulatdo = document.querySelector("#resultado");
const form = document.querySelector("#formulario");

// const p = document.querySelector("p");
// const parrafito = document.querySelector(".parrafito")
// const pid = document.getElementById("pid")
// const input = document.querySelector("input")
// p.style.color = "red";
// console.log(input.value);

// console.log({
//     p, parrafito, pid, input
// });

// h1.innerHTML="Patito<br> feo";
// h1.innerText = "patito <br> feo";
// console.log(h1.getAttribute("class"));
// // h1.setAttribute("class", "rojo");
// h1.classList.add("rojo")
// h1.classList.remove("verde")

// input.value = "456"

// const img = document.createElement("img");
// img.setAttribute("src", "https://images.pexels.com/photos/16986836/pexels-photo-16986836/free-photo-of-el-guardian-misti.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load")
// img.setAttribute("height", "720");
// console.log(img)
// pid.innerHTML = img;

form.addEventListener("submit", btnOnClick);
function btnOnClick(event){
    console.log(event)
    event.preventDefault();
    const suma = parseInt(input1.value) + parseInt(input2.value); 
    pResulatdo.innerText = "Resultado: "+suma;
}