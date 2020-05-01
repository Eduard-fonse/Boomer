


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





function observador(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          console.log("estamos dentro de plataforma");
         
        } else {
          // User is signed out.
          console.log("estamos fuera 2");
        
        }
      });

}
observador()

