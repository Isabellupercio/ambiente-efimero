document.getElementById('boton').addEventListener('click', function () {
  const mensaje = document.getElementById('mensaje');
  const hora = new Date().toLocaleTimeString();
  mensaje.textContent = `¡Botón presionado a las ${hora}!`;
});
