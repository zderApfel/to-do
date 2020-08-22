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

import { Project, Todo } from "./projectList.js";
import { compareAsc, format } from "date-fns";

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
    todoContainer.id = "todo-container";
    todoContainer.textContent = "Test";
    form.appendChild(todoContainer);


    const submitButton = document.createElement("button");
    submitButton.id = "submit-new-button";
    submitButton.textContent = "Submit";
    form.appendChild(submitButton);

}

function toDoBox(container){
    const newToDo = document.create
}

export { projectForm }