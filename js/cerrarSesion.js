

function cerrarSesion() {

    firebase.auth().signOut()
        .then(function () {
            console.log('salimos')
            location.href = '../index.html'
        })
        .catch(function (error) {
            console.log(error)

        })

}