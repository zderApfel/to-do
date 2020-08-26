import { toDos } from "./makeProjectForm.js";

import { format } from "date-fns";

const TEST_PROJECTS = [
    new Project("Make cookies for baking party", null),
    new Project("Read more Javascript documentation", null),
    new Project("Kick gum, chew ass", null)
];

function Project(name, todos){
    this.name = name; //String
    this.todos = todos; //Array of ToDos
}

function ToDo(name, description, dueMonth, dueDay, dueYear, priority){
    this.name = name;
    this.description = description;
    this.dueDate = format(new Date(dueYear, dueMonth, dueDay), "MM/dd/yyyy");
    this.priority = priority;
}

Project.prototype.checkProject = function(){
    if (this.name == "" || this.todos.length == 0){
        return false;
    }
    else{
        return true;
    }
}

Project.prototype.renderProject = function(){
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
            else if(x == 3){
                let toDoItem = document.createElement('ol');
                toDoItem.textContent = "<More>";
                todoList.appendChild(toDoItem);
            }
        }
    }
    return card;
}

ToDo.prototype.checkToDo = function(){
    if (this.name == "" || this.description == "" || this.dueDate == "12/31/1899"){
        return false;
    }
    else{
        return true;
    }
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
    
    let thisTodo = this;
    function deleteToDo(){
        body.remove();
        let x = toDos.indexOf(thisTodo);
        if (x > -1){
            toDos.splice(x, 1);
        }
    }
    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "todo-button");
    deleteButton.id = "delete-todo";
    deleteButton.textContent = "X";
    deleteButton.addEventListener("click", function(){deleteToDo()});
    section1.appendChild(deleteButton);
    
    const editButton = document.createElement("button");
    editButton.setAttribute("class", "todo-button");
    editButton.id = "edit-todo";
    editButton.textContent = "Edit";
    editButton.addEventListener("click", function(){
        document.getElementById("todo-name").value = thisTodo.name;
        document.getElementById("description").value = thisTodo.description;
        document.getElementById("due-month").value = thisTodo.dueDate.substring(0, 2);
        document.getElementById("due-day").value = thisTodo.dueDate.substring(3, 5);
        document.getElementById("due-year").value = thisTodo.dueDate.substring(6, 10);
        deleteToDo();
    });
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

export { TEST_PROJECTS, Project, ToDo };