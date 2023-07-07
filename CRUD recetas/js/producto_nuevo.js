function guardar() {
    let n = document.getElementById("nombrereceta").value
    let l = document.getElementById("linkreceta").value
    let c = document.getElementById("comentarios").value
    
    // {
    //     "imagen": "https://picsum.photos/200/300?grayscale",
    //     "nombre": "MICROONDAS",
    //     "grupo": 50000,
    //     "edad": 10
    //   }

    let producto = {
        nombrereceta: n,
        linkreceta: l,
        comentarios: c,
    }
    let url = "http://ig23033.pythonanywhere.com/recetas"
    var options = {
        body: JSON.stringify(producto),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    }
    fetch(url, options)
        .then(function () {
            console.log("creado")
            alert("Grabado")
            // Devuelve el href (URL) de la página actual
            window.location.href = "./recetas.html";  
            // Handle response we get from the API
        })
        .catch(err => {
            //this.errored = true
            alert("Error al grabar" )
            console.error(err);
        })
}

