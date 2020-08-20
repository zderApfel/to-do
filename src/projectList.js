/*
    --PROJECT LIST HTML FORMAT--
    <table id="project-table">
        <tr>
            <td class="project-card">
                <h2>_projectname_</h2>
                <div class="todos">
                    <ul>Test</ul>
                    <ul>Other Test</ul>
                    <ul>...</ul>
                </div>
            </td>
            <td class="project-card">
                <h2>_projectname_</h2>
                <div class="todos">
                    <ul>Test</ul>
                    <ul>Other Test</ul>
                    <ul>...</ul>
                </div>
            </td>
        </tr>
    </table>
*/

let testProject = new Project("Make cookies for baking party", null);
let testProject2 = new Project("Make cookies for baking party", null);
let testProject3 = new Project("Make cookies for baking party", null);

function ToDo(name, description, dueDate, priority, notes){
    this.name = name,
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
}

function Project(name, todos){
    this.name = name; //String
    this.todos = todos; //Array of Objects
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

    /*for (let x = 0; x < this.todos.length; x++){
        if (x < 2){
            let toDoItem = document.createElement('ul');
            toDoItem.textContent = this.todos[x].name;
            todoList.appendChild(toDoItem);
        }
        else if(x == 2){
            let toDoItem = document.createElement('ul');
            toDoItem.textContent = "..."
            todoList.appendChild(toDoItem);
        }
    }*/

    return card;
}

function makeProjectList(){ //Adds projectCards to the DOM
    const container = document.getElementById("container");
    const projectTable = document.createElement('div');
    projectTable.id = "project-table";
    container.appendChild(projectTable);
    projectTable.appendChild(testProject.makeCard());
    projectTable.appendChild(testProject2.makeCard());
    projectTable.appendChild(testProject3.makeCard());
    projectTable.appendChild(testProject3.makeCard());
}

export { makeProjectList };