import { Project, Todo } from "./projectList.js";
import { compareAsc, format } from "date-fns";

format(new Date(2020, 8, 22), "MM/dd/yyyy");

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

    const submitButton = document.createElement("button");
    submitButton.id = "submit-new-button";
    submitButton.textContent = "Submit";
    form.appendChild(submitButton);

}

function makeToDoForm(parent){

    const list1 = document.createElement("ul");
    parent.appendChild(list1);
    const list2 = document.createElement("ul");
    parent.appendChild(list2);
    const list3 = document.createElement("ul");
    parent.appendChild(list3);

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
}

export { projectForm }