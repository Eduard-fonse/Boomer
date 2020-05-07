
// configuracion de firebase
var firebaseConfig = {
    apiKey: "AIzaSyCJuL7dVIHu-jdomIBK8rOrnwA1TsyaPgs",
    authDomain: "boomer-964b7.firebaseapp.com",
    databaseURL: "https://boomer-964b7.firebaseio.com",
    projectId: "boomer-964b7",
    storageBucket: "boomer-964b7.appspot.com",
    messagingSenderId: "386044112007",
    appId: "1:386044112007:web:7f462931bd25de604c9c22",
    measurementId: "G-MBLKFQPCJR",
};
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

// funcion del boton limpiar
function limpiar() {
    document.getElementById("nombre").value = "";
    document.getElementById("apellidoPaterno").value = "";
    document.getElementById("apellidoMaterno").value = "";
    document.getElementById("fecha").value = "";


};

// funcion del boton registrar conectar con la base de datos
function registrar() {

    var nombre = document.getElementById("nombre").value;
    var apellidoPaterno = document.getElementById("apellidoPaterno").value;
    var apellidoMaterno = document.getElementById("apellidoMaterno").value;
    // falta mandar fecha a la base de datos firebase


    db.collection("users").add({
        nombre: nombre,
        apellidoPaterno: apellidoPaterno,
        apellidoMaterno: apellidoMaterno,
        // fechaDeNacimiento: fechaDeNacimiento,
        // genero: genero,
        // colonia: colonia,
        // calle: calle,
        // numeroDeCasa: numeroDeCasa,
        // comentario: comentario,
        // tipoVivienda: tipoVivienda,
        // nombreDeferencia: nombreDeferencia,
        // parentesco: parentesco,
        // coloniaDeReferencia: coloniaDeReferencia,
        // calleDeReferencia: calleDeReferencia,
        // numeroDeCasaReferencia: numeroDeCasaReferencia,
        // telefonoDeReferencia: telefonoDeReferencia

    })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });

};

// funcion que controla la animación del menu hamburguesa
function animacionMenu() {
    let boton = document.getElementById("icono");
    let enlaces = document.getElementById("enlaces");
    let contador = 0;
    var cerrado = false;


    boton.addEventListener("click", function () {
        if (contador == 0) {
            enlaces.className = ('enlaces dos');
            contador = 1;
        } else {
            enlaces.classList.remove('dos');
            enlaces.className = ('enlaces uno');
            contador = 0;
        }
    })

    window.addEventListener('resize', function () {
        if (screen.width > 1024) {
            contador = 0;
            enlaces.classList.remove('dos');
            enlaces.className = ('enlaces uno');

        }
    })

    window.addEventListener('click', function (e) {
        console.log(e.target);
        if (cerrado == false) {
            let span = document.querySelector('.links-header');
            if (e.target == span) {
                contador = 0;
            }
        }
    });

}
animacionMenu()

// funcion controla el estado de seccion de la aplicación
function observador() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            console.log("User is signed in.");

        } else {
            // User is signed out.
            console.log("User is signed out");

        }
    });

}
observador();


