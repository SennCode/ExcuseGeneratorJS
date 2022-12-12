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
  let pronombre = ["Un", "El"];
  let sujeto = ["perro", "payaso", "conductor", "borracho"];
  let accion = ["comió", "robó", "pisó", "rompió"];
  let posesion = ["mi trabajo", "mi comida", "mi camisa", "mi ordenador"];
  let lugar = ["en la calle", "en mi casa", "en la carretera", "en la piscina"];

  // let palabras = [pronombre, sujeto, accion, posesion, lugar];
  // for (let i = 0; i > palabras.length; i++) {
  //   return Math.floor(Math.random() * palabras.length[i]);
  // }
  return (
    pronombre[Math.floor(Math.random() * pronombre.length)] +
    " " +
    sujeto[Math.floor(Math.random() * sujeto.length)] +
    " " +
    accion[Math.floor(Math.random() * accion.length)] +
    " " +
    posesion[Math.floor(Math.random() * posesion.length)] +
    " " +
    lugar[Math.floor(Math.random() * lugar.length)]
  );
};
