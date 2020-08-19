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

function Project(name, todos){
    this.name = name; //String
    this.todos = todos; //Array of Objects
}

function ToDo(name, description, dueDate, priority, notes){
    this.name = name,
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
}

function makeProjectList(){ //Adds projectCards to the DOM
    const container = document.getElementById("container");
    const projectTable = document.createElement('table');
    projectTable.id = "project-table";
    container.appendChild(projectTable);
}

function makeProjectCard(project){ //Creates projectCard DOM object
    const card = document.createElement('td');
    card.setAttribute('class', 'project-card');
    
    const title = document.createElement('h2');
    title.textContent = project.name;
    card.appendChild(title);

    const todoList = document.createElement('div');
    todoList.setAttribute('class', 'todos');
    card.appendChild(todoList);

    for (let x = 0; x < project.todos.length; x++){
        if (x < 2){
            let toDoItem = document.createElement('ul');
            toDoItem.textContent = project.todos[x].name;
            todoList.appendChild(toDoItem);
        }
        else if(x == 2){
            let toDoItem = document.createElement('ul');
            toDoItem.textContent = "..."
            todoList.appendChild(toDoItem);
        }
    }

    return card;
}

export { makeProjectList };