

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




function iniciarSesion() {

  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  if (email && password != "") {

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;

      if (errorCode == "auth/invalid-email") {
        window.alert("Introduzca correo válido.");
        document.getElementById('email').value = "";
        document.getElementById("email").focus();

      } else if (errorCode == "auth/user-not-found") {
        window.alert("Usuario no encontrado.");
        document.getElementById('email').value = "";
        document.getElementById('password').value = "";
        document.getElementById("email").focus();

      } else if (errorCode == "auth/wrong-password") {
        window.alert("Contraseña incorrecta.");
        document.getElementById('password').value = "";
        document.getElementById("password").focus();

      } else if (errorCode == "auth/too-many-requests") {
        window.alert("Muchos intentos erróneos, intente mas tarde. La página se actualizará...");
        location.reload()

      } else if (errorCode == "auth/user-disabled") {
        window.alert("Cuenta desabilitada.");
        document.getElementById('email').value = "";
        document.getElementById('password').value = "";
        document.getElementById("email").focus();

      } else {
        window.alert(errorCode + " | " + errorMessage);
      }

    });

  } else if (email == "" && password == "") {
    window.alert("Introduzca correo electrónico y contraseña");
    document.getElementById("email").focus();

  } else if (email == "") {
    window.alert("Introduzca correo electrónico");
    document.getElementById("email").focus();

  } else if (password == "") {
    window.alert("Introduzca contraseña");
    document.getElementById("password").focus();

  } else {
    window.alert("Error Desconocido");
  }

}



function observador() {
  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    // User is signed in.
    console.log('adentro por index');
    location.href='html/mi-cuenta.html'
  } else {
    // User is signed out.
    console.log('fuera al index');
  }
});

}
observador()




