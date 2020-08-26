import { renderProjectForm } from './makeProjectForm.js';

const TEST_PROJECTS = [
    new Project("Make cookies for baking party", null),
    new Project("Read more Javascript documentation", null),
    new Project("Kick gum, chew ass", null)
];

function Project(name, todos){
    this.name = name; //String
    this.todos = todos; //Array of ToDos
}

function ToDo(name, description, dueDate, priority){
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
}

Project.prototype.renderCard = function(){
    const card = document.createElement('div');
    card.setAttribute('class', 'project-card');
    
    const title = document.createElement('h2');
    title.textContent = this.name;
    card.appendChild(title);

    const todoList = document.createElement('div');
    todoList.setAttribute('class', 'todo-previews');
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

ToDo.prototype.renderToDo = function(){
    const body = document.createElement("div");
    body.setAttribute("class", "new-todos");

    const section1 = document.createElement("ul");
    body.appendChild(section1);
    const section2 = document.createElement("ul");
    body.appendChild(section2);
    const section3 = document.createElement("ul");
    body.appendChild(section3);
    const section4 = document.createElement("ul");
    body.appendChild(section4);
    const section5 = document.createElement("ul");
    body.appendChild(section5);

    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "todo-button");
    deleteButton.id = "delete-todo";
    deleteButton.textContent = "X";
    deleteButton.addEventListener("click", function(){
        body.remove();
    });
    section1.appendChild(deleteButton);
    
    const editButton = document.createElement("button");
    editButton.setAttribute("class", "todo-button");
    editButton.id = "edit-todo";
    editButton.textContent = "Edit";
    section1.appendChild(editButton);

    const name = document.createElement("h3");
    name.setAttribute("class", "name");
    name.textContent = `${this.name}`;
    section2.appendChild(name);

    const description = document.createElement("p");
    description.setAttribute("class", "description");
    description.textContent = `Description: ${this.description}`;
    section3.appendChild(description);


    const date = document.createElement("p");
    date.setAttribute("class", "date");
    date.textContent = `Due Date: ${this.dueDate}`;
    section4.appendChild(date);

    const priority = document.createElement("p");
    priority.setAttribute("class", "priority");
    priority.textContent = `Priority: ${this.priority}`;
    section5.appendChild(priority);

    return body;
    
}

function renderList(){ //Adds projectCards to the DOM
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
    makeNew.addEventListener("click", function(){renderProjectForm()});
    buttonContainer.appendChild(makeNew);

    container.appendChild(projectTable);
    for (let x = 0; x < TEST_PROJECTS.length; x++){
        projectTable.appendChild(TEST_PROJECTS[x].renderCard());
    }
}

export { renderList, Project, ToDo, TEST_PROJECTS };