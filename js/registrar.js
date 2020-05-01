
function animacionTextField() {
    $(".txtb input").on("focus", function () {
      $(this).addClass("focus");
    });
  
    $(".txtb input").on("blur", function () {
      if ($(this).val() == "")
        $(this).removeClass("focus");
    });
  
  }
  animacionTextField()



function registrar() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;

    // comprobar los datos y enviarlos a firebase auth //

    if (email == "") {
        window.alert("Introduzca Correo Electronico");
        document.getElementById("email").focus();
    } else if (password == "") {
        window.alert("Introduzca contraseña");
        document.getElementById("password").focus();

    } else if (confirmPassword == "") {
        window.alert("Confirmar contraseña");
        document.getElementById("confirm-password").focus();

    } else if (password != confirmPassword) {
        window.alert("Las contraseñas no son iguales");
        document.getElementById('password').value = "";
        document.getElementById('confirm-password').value = "";
        document.getElementById("password").focus();
    } else {

       
    
        firebase.auth().createUserWithEmailAndPassword(email, password)

            .then(function () {
                verificarEmail()
            })
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);

                if (errorCode == "auth/invalid-email") {
                    window.alert("Introduzca un correo electrónico válido");
                    document.getElementById('email').value = "";
                    document.getElementById('password').value = "";
                    document.getElementById('confirm-password').value = "";
                    document.getElementById("email").focus();
                } else if (errorCode == "auth/email-already-in-use") {
                    window.alert("Este correo electrónico ya está en  uso");
                    document.getElementById('email').value = "";
                    document.getElementById('password').value = "";
                    document.getElementById('confirm-password').value = "";
                    document.getElementById("email").focus();
                } else if (errorCode == "auth/weak-password") {
                    window.alert("La contraseña debe ser de al menos 6 caracteres");
                    document.getElementById('password').value = "";
                    document.getElementById('confirm-password').value = "";
                    document.getElementById("email").focus();
                }
                else {
                    window.alert(errorCode + " | " + errorMessage);
                }

          });
          
    }
   

} 



observador()
function observador() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;
            // User is signed in.
            console.log("adentro");
            console.log(emailVerified);
            location.href='../html/mi-cuenta.html'
        } else {
            // User is signed out.
            console.log("afuera");
        }
    });

}

function verificarEmail() {

    var user = firebase.auth().currentUser;

    user.sendEmailVerification().then(function () {
        // Email sent.
        console.log('enviando correo...');
    }).catch(function (error) {
        // An error happened.
        console.log("error al enviar email");
    });
}




