// filepath: /I:/ASIR2024/LMSGI/t2/Tarea02/Ejercicio02/script.js
//Muestra info en seccion About
document.addEventListener("DOMContentLoaded", function() {
  fetch('datos.json')
    .then(response => response.json())
    .then(data => {
      document.getElementById('aboutInfo').textContent = data.datos.about.description;
    

    //Muestra info en seccion Estudios, creamos una funcion que genere un componente por cada elemento del array
    const studiesContainer = document.getElementById('studiesContainer');
      data.datos.education.items.forEach(item => {
        const projectElement = document.createElement('article');
        projectElement.classList.add('project');
        projectElement.innerHTML = `
          <div class="projectContent">
            <img class="fotoProyecto" src="${item.img}" alt="foto">
            <div class="projectTitleContainer">
              <h2 class="projectTitle">${item.grade}</h2>
              <p>${item.date}</p>
            </div>
          </div>
          <p class="projectInfo">${item.desc}</p>
        `;
        studiesContainer.appendChild(projectElement);
      });
    

    const projectsContainer = document.getElementById('projectsContainer');
      data.datos.proyectos.forEach(item => {
        const projectElement = document.createElement('article');
        projectElement.classList.add('project');
        projectElement.innerHTML = `
          <div class="projectContent">
            <img class="fotoProyecto" src="${item.image}" alt="foto">
            <div class="projectTitleContainer">
              <h2 class="projectTitle">${item.title}</h2>
              <p>${item.description}</p>
            </div>
          </div>
          <p class="projectInfo">${item.desc}</p>
        `;
        projectsContainer.appendChild(projectElement);
      });
    })
    .catch(error => console.error('Error al cargar el JSON:', error));
});


