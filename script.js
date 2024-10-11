// Obtener usuarios desde localStorage o usar los usuarios iniciales
const obtenerUsuarios = () => {
    const usuariosGuardados = localStorage.getItem('usuarios');
    return usuariosGuardados ? JSON.parse(usuariosGuardados) : [];
};

// Guardar usuarios en localStorage
const guardarUsuarios = (usuarios) => {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
};

// Cargar usuarios en la tabla de registro
const cargarUsuarios = () => {
    const usuarios = obtenerUsuarios();
    const tablaUsuarios = document.getElementById('tablaUsuarios');
    tablaUsuarios.innerHTML = '';
    usuarios.forEach((usuario, index) => {
        const row = `<tr>
                        <th scope="row">${index + 1}</th>
                        <td>${usuario.nombre}</td>
                        <td>${usuario.cedula}</td>
                        <td>${usuario.email}</td>
                    </tr>`;
        tablaUsuarios.innerHTML += row;
    });
};

// Registrar nuevo usuario
document.getElementById('registroForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Capturar valores del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const cedula = document.getElementById('cedula').value;
    const telefono = document.getElementById('telefono').value;
    const direccion = document.getElementById('direccion').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const usuario = document.getElementById('usuario').value;
    const contrasena = document.getElementById('contrasena').value;

    // Obtener los usuarios almacenados
    const usuarios = obtenerUsuarios();

    // Validar si la cédula ya está registrada
    const existe = usuarios.some(usuario => usuario.cedula === cedula);
    if (existe) {
        alert('La cédula ya está registrada.');
        return;
    }

    // Crear nuevo usuario con todos los datos
    const nuevoUsuario = {
        nombre,
        email,
        cedula,
        telefono,
        direccion,
        fechaNacimiento,
        usuario,
        contrasena
    };

    // Agregar nuevo usuario al array de usuarios
    usuarios.push(nuevoUsuario);

    // Guardar usuarios actualizados en localStorage
    guardarUsuarios(usuarios);

    // Notificar al usuario y recargar tabla
    alert('Usuario registrado exitosamente.');
    cargarUsuarios(); // Recargar la tabla con los nuevos datos
    document.getElementById('registroForm').reset(); // Reiniciar el formulario
});

// Cargar usuarios al cargar la página
window.onload = cargarUsuarios;