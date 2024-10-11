// Obtener usuarios desde localStorage o usar los usuarios iniciales
const obtenerUsuarios = () => {
    const usuariosGuardados = localStorage.getItem('usuarios');
    return usuariosGuardados ? JSON.parse(usuariosGuardados) : [
        {
            "nombre": "Juan Pérez",
            "cedula": "12345678",
            "email": "juan.perez@example.com",
            "telefono": "555-1234",
            "direccion": "Av. Siempre Viva 742",
            "fechaNacimiento": "1985-05-10",
            "usuario": "juanperez",
            "contrasena": "1234abcd"
        },
        {
            "nombre": "Ana Gómez",
            "cedula": "87654321",
            "email": "ana.gomez@example.com",
            "telefono": "555-4321",
            "direccion": "Calle Falsa 123",
            "fechaNacimiento": "1990-03-22",
            "usuario": "anagomez",
            "contrasena": "abcd1234"
        },
        {
            "nombre": "Carlos Ruiz",
            "cedula": "13579246",
            "email": "carlos.ruiz@example.com",
            "telefono": "555-5678",
            "direccion": "Plaza Mayor 456",
            "fechaNacimiento": "1978-11-05",
            "usuario": "carlosruiz",
            "contrasena": "5678abcd"
        }
    ];
};

// Cargar usuarios en la tabla de detalles
const cargarDetallesUsuarios = () => {
    const usuarios = obtenerUsuarios();
    const tablaDetallesUsuarios = document.getElementById('tablaDetallesUsuarios');
    tablaDetallesUsuarios.innerHTML = '';
    usuarios.forEach((usuario, index) => {
        const row = `<tr>
                        <th scope="row">${index + 1}</th>
                        <td>${usuario.nombre}</td>
                        <td>${usuario.cedula}</td>
                        <td>${usuario.email}</td>
                        <td>${usuario.telefono}</td>
                        <td>${usuario.direccion}</td>
                        <td>${usuario.fechaNacimiento}</td>
                        <td>${usuario.usuario}</td>
                        <td>${usuario.contrasena}</td>
                    </tr>`;
        tablaDetallesUsuarios.innerHTML += row;
    });
};

// Cargar los usuarios al cargar la página
window.onload = cargarDetallesUsuarios;