import "./css/style.css";
import "./assets/logo-alura.svg";
import "./assets/Vector.svg"
import "./assets/animation_1665196782581.json";
// import animation from "./assets/lottie.json";




const botonEncriptar = document.getElementById("buttonEncriptar");
const botonDesencriptar = document.getElementById("buttonDesencriptar");
const mensajeHTML = document.getElementById("mensaje");
const textoHTML = document.getElementById("texto");
const botonCopiar = document.getElementById("buttonCopy");

botonEncriptar.addEventListener("click", () => {

    const inputTexto = document.querySelector(".input-texto");

    let textoArea = inputTexto.value;

    let textoEncriptado = encriptar(textoArea);

    mensajeHTML.textContent = textoEncriptado;

    textoHTML.classList.add("invisible");




    console.dir(botonCopiar);

    // console.log(textoEncriptado);


    // console.dir(inputTexto);

});

// botonDesencriptar.addEventListener("click", () => {

//     const textoEncriptado = document.querySelector(".input-texto");

//     let mensaje = textoEncriptado.value;

//     let textoLeido = desencriptar(mensaje);





//     // console.dir(textoLeido);
// });






const buttonCopy = document.querySelector(".buttonCopy");
// const animation = document.querySelector(".animation");


// Las "llaves" de encriptación que utilizaremos son las siguientes:
// `La letra "e" es convertida para "enter"`
//   `La letra "i" es convertida para "imes"`
//   `La letra "a" es convertida para "ai"`
//   `La letra "o" es convertida para "ober"`
//   `La letra "u" es convertida para "ufat"`
function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];



    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;

}



function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;

}



