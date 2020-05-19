
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
    document.getElementById("mujer").checked = true;
    document.getElementById("sector").value = "";
    document.getElementById("calle").value = "";
    document.getElementById("numero").value = "";
    document.getElementById("celular").value = "";
    document.getElementById("renta").checked = true;
    document.getElementById("comentarios").value = "";
    document.getElementById("ine1").setAttribute("src", "../assets/1.png");
    document.getElementById("ine2").setAttribute("src", "../assets/2.png");
    document.getElementById("nombreDeRefencia").value = "";
    document.getElementById("parentesco").value = "";
    document.getElementById("sectorDeReferencia").value = "";
    document.getElementById("calleDeReferencia").value = "";
    document.getElementById("numeroDeCasaDeRefencia").value = "";
    document.getElementById("celularDeRefencia").value = "";
    document.getElementById("nombre").focus();


};

// funcion del boton registrar conectar con la base de datos
function registrar() {


    var $nombre = document.getElementById("nombre").value;
    var $apellidoPaterno = document.getElementById("apellidoPaterno").value;
    var $apellidoMaterno = document.getElementById("apellidoMaterno").value;
    var $fechaDeNacimiento = document.getElementById("fechaDeNacimiento").value;
    var $genero = genero();
    var $sector = document.getElementById("sector").value;
    var $calle = document.getElementById("calle").value;
    var $numero = document.getElementById("numero").value;
    var $celular = document.getElementById("celular").value;
    var $tipoDeVivienda = tipoVivienda();
    var $comentarios = document.getElementById("comentarios").value;
    // faltaria enviar las fotos a firebase antes de proceder
    var $nombreDeReferencia = document.getElementById("nombreDeReferencia").value;
    var $parentesco = document.getElementById("parentesco").value;
    var $sectorDeReferencia = document.getElementById("sectorDeReferencia").value;
    var $calleDeReferencia = document.getElementById("calleDeReferencia").value;
    var $numeroDeCasaDeReferencia = document.getElementById("numeroDeCasaDeReferencia").value;
    var $celularDeReferencia = document.getElementById("celularDeReferencia").value;



    // verifica y notifica campos vacios
    if ($nombre == "") {
        document.getElementById("nombre").focus();
    } else if ($apellidoPaterno == "") {
        document.getElementById("apellidoPaterno").focus();
    } else if ($apellidoMaterno == "") {
        document.getElementById("apellidoMaterno").focus();
    } else if ($fechaDeNacimiento == "") {
        document.getElementById("fechaDeNacimiento").focus();
    } else if ($sector == "") {
        document.getElementById("sector").focus();
    } else if ($calle == "") {
        document.getElementById("calle").focus();
    } else if ($numero == "") {
        document.getElementById("numero").focus();
    } else if ($celular == "") {
        document.getElementById("celular").focus();
    } else if ($nombreDeReferencia == "") {
        document.getElementById("nombreDeReferencia").focus();
    } else if ($parentesco == "") {
        document.getElementById("parentesco").focus();
    } else if ($sectorDeReferencia == "") {
        document.getElementById("sectorDeReferencia").focus();
    } else if ($calleDeReferencia == "") {
        document.getElementById("calleDeReferencia").focus();
    } else if ($numeroDeCasaDeReferencia == "") {
        document.getElementById("numeroDeCasaDeReferencia").focus();
    } else if ($celularDeReferencia == "") {
        document.getElementById("celularDeReferencia").focus();

    } else {

        db.collection("users").add({
            Nombre: $nombre,
            ApellidoPaterno: $apellidoPaterno,
            ApellidoMaterno: $apellidoMaterno,
            FechaDeNacimiento: $fechaDeNacimiento,
            Genero: $genero,
            Colonia: $sector,
            Calle: $calle,
            NumeroDeCasa: $numero,
            Celular: $celular,
            tipoVivienda: $tipoDeVivienda,
            Comentarios: $comentarios,
            NombreDeferencia: $nombreDeReferencia,
            Parentesco: $parentesco,
            ColoniaDeReferencia: $sectorDeReferencia,
            CalleDeReferencia: $calleDeReferencia,
            NumeroDeCasaReferencia: $numeroDeCasaDeReferencia,
            TelefonoDeReferencia: $celularDeReferencia

        })
            .then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);


            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });

    }

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




function limpiar() {

    document.getElementById("cliente").value = "";
    document.getElementById("cliente").focus();
    document.querySelector(".displayCliente").classList.add('desaparecer');
    document.querySelector(".displayVenta").classList.add('desaparecer');

};


function seleccionarCliente() {
    document.querySelector(".displayVenta").classList.toggle('desaparecer');

};


function identificar() {
    document.querySelector(".displayCliente").classList.remove('desaparecer');


};





