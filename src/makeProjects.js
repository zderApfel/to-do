import { Project, ToDo } from "./makeProjectList.js";
import { format } from "date-fns";

function makeNewProject(){
    let x = new Project(document.getElementById("pname").textContent, []);
    if (x.name == "" || x.todos == []){
        alert("Error! You must have a name and at least one to-do item!");
    }
}

function addToDo(){
    let name = document.getElementById("todo-name");
    let description = document.getElementById("description");
    let month = document.getElementById("due-month");
    let day = document.getElementById("due-day");
    let year = document.getElementById("due-year");

    if (name.value == "" || description.value == "" || month.value == "" || day.value == "" || year.value == ""){
        alert("Error! Make sure all fields are filled!");
    }
    else{
        let date = format(new Date(year.value, month.value, day.value), "MM/dd/yyyy");
        let newToDo = new ToDo(name.value, description.value, date, null)
        name.value = "";
        description.value = "";
        month.value = "";
        day.value = "";
        year.value = "";
        return newToDo;
    }
}

export { makeNewProject, addToDo };