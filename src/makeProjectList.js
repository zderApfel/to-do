import { renderProjectForm } from './makeProjectForm.js';
import { TEST_PROJECTS, Project } from "./makeProjects.js";

function renderList(){ //Adds projectCards to the DOM
    const container = document.getElementById("container");
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }
    const projectTable = document.createElement('div');
    projectTable.id = "project-table";
    if (TEST_PROJECTS.length == 2){
        projectTable.style.cssText = `grid-template-columns: 50% 50%;`;
    }

    const buttonContainer = document.createElement('div');
    buttonContainer.id = "button-container";
    container.appendChild(buttonContainer);

    const makeNew = document.createElement('button');
    makeNew.id = "make-new-button";
    makeNew.textContent = "New Project";
    makeNew.addEventListener("click", function(){renderProjectForm(false, new Project(null, []))});
    buttonContainer.appendChild(makeNew);

    container.appendChild(projectTable);
    for (let x = 0; x < TEST_PROJECTS.length; x++){
        projectTable.appendChild(TEST_PROJECTS[x].renderProject());
    }
}

export { renderList };