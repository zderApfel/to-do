import { projectForm } from './newProject.js';

let testProject = new Project("Make cookies for baking party", null);

function Project(name, todos){
    this.name = name; //String
    this.todos = todos; //Array of ToDos
}

function ToDo(name, description, dueDate, priority, notes){
    this.name = name,
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
}

Project.prototype.makeCard = function(){
    const card = document.createElement('div');
    card.setAttribute('class', 'project-card');
    
    const title = document.createElement('h2');
    title.textContent = this.name;
    card.appendChild(title);

    const todoList = document.createElement('div');
    todoList.setAttribute('class', 'todos');
    card.appendChild(todoList);

    if (this.todos == null){
        let toDoItem = document.createElement("ol");
        toDoItem.textContent = "Empty :(";
        todoList.appendChild(toDoItem);
    }
    else{
        for (let x = 0; x < this.todos.length; x++){
            if (x < 2){
                let toDoItem = document.createElement('ol');
                toDoItem.textContent = this.todos[x].name;
                todoList.appendChild(toDoItem);
            }
            else if(x == 2){
                let toDoItem = document.createElement('ol');
                toDoItem.textContent = "...";
                todoList.appendChild(toDoItem);
            }
        }
    }
    return card;
}

function makeProjectList(){ //Adds projectCards to the DOM
    const container = document.getElementById("container");
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }
    const projectTable = document.createElement('div');
    projectTable.id = "project-table";

    const buttonContainer = document.createElement('div');
    buttonContainer.id = "button-container";
    container.appendChild(buttonContainer);

    const makeNew = document.createElement('button');
    makeNew.id = "make-new-button";
    makeNew.textContent = "New Project";
    makeNew.addEventListener("click", function(){projectForm()});
    buttonContainer.appendChild(makeNew);

    container.appendChild(projectTable);
    projectTable.appendChild(testProject.makeCard());
    projectTable.appendChild(testProject.makeCard());
    projectTable.appendChild(testProject.makeCard());
    projectTable.appendChild(testProject.makeCard());
}

export { makeProjectList, Project, ToDo };