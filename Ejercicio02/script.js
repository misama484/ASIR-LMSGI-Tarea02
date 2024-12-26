// filepath: /I:/ASIR2024/LMSGI/t2/Tarea02/Ejercicio02/script.js
document.addEventListener("DOMContentLoaded", function() {
  fetch('datos.json')
    .then(response => response.json())
    .then(data => {
      document.getElementById('aboutInfo').textContent = data.datos.about.description;
    })
    .catch(error => console.error('Error al cargar el JSON:', error));
});