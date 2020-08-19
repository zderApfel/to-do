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

function makeProjectList(projects){
    const container = document.getElementById("container");

    const projectTable = document.createElement('table');
    
}
