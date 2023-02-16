/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#the-excuse").innerHTML = generateExcuse();
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let quien = ["Mi perro", "El vecino", "Mi abuela", "Un loco"];
  let accion = [
    "se comió",
    "me mojó",
    "se robó",
    "se sentó sobre",
    "metió en la ducha"
  ];
  let que = [
    "mi tarea",
    "el informe",
    "mi projecto",
    "el computador",
    "mi trabajo"
  ];
  let cuando = [
    "esta mañana",
    "anoche",
    "camino hacia acá",
    "no sé en qué momento",
    "justo antes de salir"
  ];

  let quienIndex = Math.floor(Math.random() * quien.length);
  let accionIndex = Math.floor(Math.random() * accion.length);
  let queIndex = Math.floor(Math.random() * que.length);
  let cuandoIndex = Math.floor(Math.random() * cuando.length);

  return (
    quien[quienIndex] +
    " " +
    accion[accionIndex] +
    " " +
    que[queIndex] +
    " " +
    cuando[cuandoIndex]
  );
};
