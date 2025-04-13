// app.js

document.addEventListener('DOMContentLoaded', () => {
    const addForm = document.getElementById('addForm');
    const recordsTable = document.getElementById('recordsTable').getElementsByTagName('tbody')[0];

    // Event listener para el formulario de agregar
    addForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        // Lógica para agregar el registro en la base de datos
        // Puedes usar fetch() o axios para enviar la solicitud al backend
        // y guardar el registro en la base de datos

        // Después de agregar el registro, puedes actualizar la tabla llamando a una función de actualización
        updateTable();
    });

    // Función para actualizar la tabla de registros
    async function updateTable() {
        // Lógica para obtener todos los registros de la base de datos
        // y actualizar la tabla con los datos
        // Puedes usar fetch() o axios para obtener los registros del backend

        // Ejemplo de cómo actualizar la tabla (debes ajustar según tu lógica real)
        recordsTable.innerHTML = '<tr><td>1</td><td>Ejemplo</td><td>ejemplo@example.com</td><td><button onclick="editRecord(1)">Editar</button><button onclick="deleteRecord(1)">Eliminar</button></td></tr>';
    }
});

// Función para editar un registro (puedes implementarla según tu lógica real)
function editRecord(recordId) {
    // Lógica para editar el registro con el ID dado
}

// Función para eliminar un registro (puedes implementarla según tu lógica real)
function deleteRecord(recordId) {
    // Lógica para eliminar el registro con el ID dado
};
