// Obtener usuarios desde localStorage o usar los usuarios iniciales
const obtenerUsuarios = () => {
    const usuariosGuardados = localStorage.getItem('usuarios');
    if (usuariosGuardados) {
        return JSON.parse(usuariosGuardados);
    } else {
        // Agregar usuarios iniciales
        const usuariosIniciales = [
            {
                "nombre": "Juan Pérez",
                "cedula": "12345678",
                "email": "juan.perez@example.com",
                "telefono": "1234567890",
                "direccion": "Calle Falsa 123",
                "fechaNacimiento": "1990-01-01",
                "usuario": "juanp",
                "contrasena": "1234"
            },
            {
                "nombre": "Ana Gómez",
                "cedula": "87654321",
                "email": "ana.gomez@example.com",
                "telefono": "0987654321",
                "direccion": "Avenida Siempre Viva 742",
                "fechaNacimiento": "1992-02-02",
                "usuario": "anag",
                "contrasena": "abcd"
            },
            {
                "nombre": "Carlos Ruiz",
                "cedula": "13579246",
                "email": "carlos.ruiz@example.com",
                "telefono": "5555555555",
                "direccion": "Calle del Sol 456",
                "fechaNacimiento": "1994-03-03",
                "usuario": "carlosr",
                "contrasena": "efgh"
            }
        ];
        // Guardar usuarios iniciales en localStorage
        localStorage.setItem('usuarios', JSON.stringify(usuariosIniciales));
        return usuariosIniciales;
    }
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