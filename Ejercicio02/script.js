//Muestra info en seccion About
document.addEventListener("DOMContentLoaded", function() {
  fetch('datos.json')
    .then(response => response.json())
    .then(data => {
      document.getElementById('aboutInfo').textContent = data.datos.about.description;
    

    //creamos una funcion que genere un componente por cada elemento del array para cada seccion de la pagina.
    //ESTUDIOS
    const studiesContainer = document.getElementById('studiesContainer');
      data.datos.education.items.forEach(item => {
        const projectElement = document.createElement('article');
        projectElement.classList.add('project');
        projectElement.innerHTML = `
          <div class="studyContent">
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

    //EXPERIENCIA LABORAL
    const experienceContainer = document.getElementById('experienceContainer');
      data.datos.experience.items.forEach(item => {
        const projectElement = document.createElement('article');
        projectElement.classList.add('project');
        projectElement.innerHTML = `
          <div class="experienceContent">           
            <h2 class="projectTitle">${item.company}</h2>
            <h3>${item.position}</h3>
            <p>${item.date}</p>
            <p class="projectInfo">${item.description}</p>
            <p>${item.functions}</p>            
          </div>          
        `;
        experienceContainer.appendChild(projectElement);
      });
    
    //PROYECTOS
    const projectsContainer = document.getElementById('projectsContainer');
      data.datos.proyectos.forEach(item => {
        const projectElement = document.createElement('article');
        projectElement.classList.add('project');
        projectElement.innerHTML = `
          <div class="projectContent">
            <img class="fotoProyecto" src="${item.image}" alt="foto">
            <div class="projectTitleContainer">
              <h2 class="projectTitle">${item.title}</h2>
              <p>${item.date}</p>
              <p class="projectInfo">${item.description}</p>
            </div>
          </div>
          
        `;
        projectsContainer.appendChild(projectElement);
      });
    })
    .catch(error => console.error('Error al cargar el JSON:', error));
});


