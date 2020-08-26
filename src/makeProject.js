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
        let date = new Date(year, month, day);
        return new Todo(name, description, date, null);
    }
}

export { makeNewProject, addToDo };