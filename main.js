const btn = document.querySelector(".btn");
const sumar = document.querySelector(".sumar");
const restar = document.querySelector(".restar");
const multi = document.querySelector(".multi");
const dividir = document.querySelector(".dividir");

sumar.addEventListener("click", suma);

function suma() {
  const dato1 = +document.querySelector(".dato1").value;
  const dato2 = +document.querySelector(".dato2").value;

  document.querySelector(".resultado").innerHTML = dato1 + dato2;
}

restar.addEventListener("click", resta);

function resta() {
  const dato1 = +document.querySelector(".dato1").value;
  const dato2 = +document.querySelector(".dato2").value;

  document.querySelector(".resultado").innerHTML = dato1 - dato2;
}

multi.addEventListener("click", multiplicacion);

function multiplicacion() {
  const dato1 = +document.querySelector(".dato1").value;
  const dato2 = +document.querySelector(".dato2").value;

  document.querySelector(".resultado").innerHTML = dato1 * dato2;
}

dividir.addEventListener("click", divi);

function divi() {
  const dato1 = +document.querySelector(".dato1").value;
  const dato2 = +document.querySelector(".dato2").value;

  document.querySelector(".resultado").innerHTML = dato1 / dato2;
}