import "./css/style.css";
import "./assets/logo-alura.svg";
import "./assets/Vector.svg"
// import "./assets/animation_1665196782581.json";
// import animation from "./assets/lottie.json";

// const main = () => {
//   console.log("Carmen");

// const inputTexto = document.querySelector(".input-texto");
// const mensaje = document.querySelector(".mensaje");
// const animation = document.querySelector(".animation");


// //   // Las "llaves" de encriptación que utilizaremos son las siguientes:

// //   // `La letra "e" es convertida para "enter"`
// //   //   `La letra "i" es convertida para "imes"`
// //   //   `La letra "a" es convertida para "ai"`
// //   //   `La letra "o" es convertida para "ober"`
// //   //   `La letra "u" es convertida para "ufat"`

// function btnEncriptar() {
//   const textoEncriptado = buttonPlayElement(inputTexto.value)
//   mensaje.value = textoEncriptado;
//   mensaje.index.backgroundImage = "none"
//   inputTexto.value = ""
// }

// function encriptar(stringEncriptada) {
//   let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
//   stringEncriptada = stringEncriptada.tolowerCase();

//   for (let i = 0; i < matrizCodigo.length; i++) {
//     if (stringEncriptada.includes(matrizCodigo[i][0])) {
//       stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
//     }
//   }
//   return stringEncriptada;

// }

// let buttonPlayElement = document.getElementById("buttonPlay");
// buttonPlayElement.addEventListener("click", () => {

//   let animationElement = document.getElementById("animation");
//   let lottieAnimation = lottie.loadAnimation({
//     container: animationElement, // the dom element that will contain the animation
//     renderer: 'svg',
//     loop: true,
//     autoplay: true,
//     path: './assets/lottie.svg' // the path to the animation json
//   });


//   let buttonStopElement = document.getElementById("buttonStop");
//   buttonStopElement.addEventListener("click", () => {
//     console.dir(lottieAnimation);

//     lottieAnimation.destroy();
//   });
// });








// main();



