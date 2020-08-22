/*
    <div id="project-form">
        <h1 id="form-title">Create new project</h1>
        <div id="enter-todos">
            <!--
                To-do fields are dynamic
            -->
        </div>
        <button id="submit-new-button">Submit</button>
    </div>
*/

import { Project } from "./projectList.js";

function projectForm(){
    const container = document.getElementById("container");
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }

    const form = document.createElement("div");
    form.id = "project-form";
    container.appendChild(form);

    const title = document.createElement("h1");
    title.textContent = "Create new project";
    form.appendChild(title);

    const todoContainer = document.createElement("div");
    todoContainer.id = "enter-todos";
    todoContainer.textContent = "Test";
    form.appendChild(todoContainer);

    //MakeTodos

    const submitButton = document.createElement("button");
    submitButton.id = "submit-new-button";
    submitButton.textContent = "Submit";
    form.appendChild(submitButton);

}

export { projectForm }