import { Project } from "./projectList.js";

function projectForm(){
    const container = document.getElementById("container");
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }

    const form = document.createElement('div');
    form.id = "project-form";
    container.appendChild(form);
}

export { projectForm }