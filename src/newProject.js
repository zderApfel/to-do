import { makeProjectList, Project, Todo } from "./projectList.js";
import { compareAsc, format } from "date-fns";

format(new Date(2020, 8, 22), "MM/dd/yyyy");

function makeNewProject(){
    let x = new Project(document.getElementById("pname").textContent, []);
    if (x.name == "" || x.todos == []){
        alert("Error! You must have a name and at least one to-do item!");
    }
}

function addToDo(){
    let name = document.getElementById("todo-name").textContent;
    let description = document.getElementById("description").textContent;
    let month = document.getElementById("due-month").textContent;
    let day = document.getElementById("due-day").textContent;
    let year = document.getElementById("due-year").textContent;

    if (name == "" || description== "" || month == "" || day == "" || year == ""){
        alert("Error! Make sure all fields are filled!");
    }
    else{
        return new Todo(name, description, month, day, year)
    }
}

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

    const pNameLabel = document.createElement("label");
    pNameLabel.setAttribute("for", "pname");
    pNameLabel.textContent = "Project Name";
    form.appendChild(pNameLabel);

    const projectNameField = document.createElement("input");
    projectNameField.setAttribute("name", "pname");
    projectNameField.setAttribute("type", "text");
    projectNameField.id = "pname";
    projectNameField.setAttribute("maxlength", "50");
    form.appendChild(projectNameField);

    const toDoFormTitle = document.createElement("h2");
    toDoFormTitle.textContent = "Add To-Do";
    toDoFormTitle.id = "todo-title";
    form.appendChild(toDoFormTitle);

    const toDoForm = document.createElement("form");
    toDoForm.id = "add-todos";
    form.appendChild(toDoForm);

    makeToDoForm(toDoForm);

    const todoContainer = document.createElement("div");
    todoContainer.id = "todo-container";
    form.appendChild(todoContainer);

    const cancelButton = document.createElement("button");
    cancelButton.id = "cancel-button";
    cancelButton.setAttribute("class", "todo-button");
    cancelButton.textContent = "Cancel";
    cancelButton.addEventListener("click", function(){makeProjectList()});
    form.appendChild(cancelButton);

    const submitButton = document.createElement("button");
    submitButton.id = "submit-new-button";
    submitButton.setAttribute("class", "todo-button");
    submitButton.textContent = "Submit";
    submitButton.addEventListener("click", function(){makeNewProject()});
    form.appendChild(submitButton);
}

function makeToDoForm(parent){

    const list1 = document.createElement("ul");
    parent.appendChild(list1);
    const list2 = document.createElement("ul");
    parent.appendChild(list2);
    const list3 = document.createElement("ul");
    parent.appendChild(list3);
    const list4 = document.createElement("ul");
    parent.appendChild(list4);

    const toDoButton = document.createElement("button");
    toDoButton.id = "add-todo";
    toDoButton.setAttribute("class", "todo-button");
    toDoButton.setAttribute("type", "button"); //Since I am using a form, this must be here or page reloads!
    toDoButton.textContent = "Add To-Do";
    toDoButton.addEventListener("click", function(){addToDo()});
    parent.appendChild(toDoButton);

    const nameLabel = document.createElement("label");
    nameLabel.setAttribute("for", "todo-name");
    nameLabel.textContent = "Name";
    list1.appendChild(nameLabel);

    const name = document.createElement("input");
    name.setAttribute("type", "text");
    name.setAttribute("name", "todo-name");
    name.id = "todo-name";
    name.setAttribute("maxlength", "30");
    list1.appendChild(name);

    const descLabel = document.createElement("label");
    descLabel.setAttribute("for", "description");
    descLabel.textContent = "Description";
    list2.appendChild(descLabel);

    const description = document.createElement("textarea");
    description.setAttribute("name", "description");
    description.id = "description";
    description.setAttribute("maxlength", "500");
    list2.appendChild(description);
    
    const monthLabel = document.createElement("label");
    monthLabel.setAttribute("for", "due-month");
    monthLabel.textContent = "Due Month (MM)";
    list3.appendChild(monthLabel);

    const month = document.createElement("input");
    month.setAttribute("type", "text");
    month.setAttribute("name", "due-month");
    month.setAttribute("id", "due-month");
    month.setAttribute("class", "date-field");
    month.setAttribute("maxlength", "2");
    list3.appendChild(month);
    
    const dayLabel = document.createElement("label");
    dayLabel.setAttribute("for", "due-day");
    dayLabel.textContent = "Due Day (dd)";
    list3.appendChild(dayLabel);

    const day = document.createElement("input");
    day.setAttribute("type", "text");
    day.setAttribute("name", "due-day");
    day.setAttribute("id", "due-day");
    day.setAttribute("class", "date-field");
    day.setAttribute("maxlength", "2");
    list3.appendChild(day);

    const yearLabel = document.createElement("label");
    yearLabel.setAttribute("for", "due-year");
    yearLabel.textContent = "Due Year (yyyy)";
    list3.appendChild(yearLabel);

    const year = document.createElement("input");
    year.setAttribute("type", "text");
    year.setAttribute("name", "due-year");
    year.setAttribute("id", "due-year");
    year.setAttribute("class", "date-field");
    year.setAttribute("maxlength", "4");
    list3.appendChild(year);

    const priorityLabel = document.createElement("label");
    priorityLabel.setAttribute("for", "priority");
    priorityLabel.id = "priority-label";
    priorityLabel.textContent = "Priority";
    list4.appendChild(priorityLabel);

    const priority = document.createElement("select");
    priority.setAttribute("name", "priority");
    priority.id = "priority-selector";
    priority.setAttribute("size", "3");
    list4.appendChild(priority);

    for (let x = 1; x <= 3; x++){
        let option = document.createElement("option");
        option.setAttribute("value", x);
        option.textContent = x;
        priority.appendChild(option);
    }
}

export { projectForm }