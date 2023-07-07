function registrar(event) {
    event.preventDefault();
  
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var dni = document.getElementById('dni').value;
    var telefono = document.getElementById('telefono').value;
    var usuario = document.getElementById('usuario').value;
    var contrasena = document.getElementById('contrasena').value;
  
    var usuarioData = {
      nombre: nombre,
      apellido: apellido,
      dni: dni,
      telefono: telefono,
      usuario: usuario,
      contrasena: contrasena
    };
  
    localStorage.setItem('usuarioData', JSON.stringify(usuarioData));
    document.getElementById('mensaje').innerHTML = 'Registro exitoso.';
  }
  
  function iniciarSesion(event) {
    event.preventDefault();
  
    var loginUsuario = document.getElementById('loginUsuario').value;
    var loginContrasena = document.getElementById('loginContrasena').value;
  
    var usuarioData = JSON.parse(localStorage.getItem('usuarioData'));
  
    if (loginUsuario === usuarioData.usuario && loginContrasena === usuarioData.contrasena) {
      document.getElementById('mensaje').innerHTML = 'Inicio de sesión exitoso.';
    } else {
      document.getElementById('mensaje').innerHTML = 'Usuario o contraseña incorrectos.';
    }
  }
  