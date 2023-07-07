fetch('https://ipwhois.app/json/')
  .then(response => response.json())
  .then(data => {
    const country = data.country;
    const city = data.city;
    const region = data.region;

    console.log('País: ' + country);
    console.log('Ciudad: ' + city);
    console.log('Región: ' + region);

	if (region == "Buenos Aires") {
		alert("Bienvenido, cuenta con Delivery disponible en su zona");
	  } else {
		alert("Bienvenido, lamentablemente por el momento nuestro servicio de delivery no está disponible en su zona");
	}


    // Puedes hacer lo que necesites con los datos de ubicación aquí
  })
  .catch(error => {
    console.log('Error al obtener la ubicación:', error);
  });
