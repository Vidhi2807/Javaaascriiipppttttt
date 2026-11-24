//DOM Elements
var todoList = [];
var comdoList = [];
var remList = [];
var addButton = document.getElementById("add-button");
var todoInput = document.getElementById("todo-input");
var delelteAllButton = document.getElementById("delete-all");
var allTodos = document.getElementById("all-todos");
var deleteSButton = document.getElementById("delete-selected");

//event listeners for add and delete

function updateList(){
    comdoList = todoList.filter((data)=>{
        if(data.complete == true) return data;
    });

    remList = todoList.filter((data)=>{
        if(data.complete == false) return data;
    });

    console.log("The task is completed: " + comdoList);
    console.log("All task is remaining" + remList);
    
    document.querySelector('#r-count').textContent = todoList.length;
     
    
   
    
}

function appendTask(todoList) {
    allTodos.innerHTML = "";   // empty ----> task

    todoList.forEach((element) => {
        var x = `
        <li id=${element.id} class="todo-item">
            <p id="task">
                ${element.complete ? <strike>${element.content}</strike> : element.content}
            </p>

            <div class="todo-actions">
                <button class="complete btn btn-success">
                    <i class="ci bx bx-check bx-sm"></i>
                </button>

                <button class="delete btn btn-error">
                    <i class="di bx bx-trash bx-sm"></i>
                </button>
            </div>
        </li>`;

        allTodos.innerHTML += x;
    });
}

function add() {
    //take the content from the input box...
    var text = todoInput.value;
    if (text == "") {
        alert("No content is added, please add the content");
        return;
    }
    console.log(text);

    todoList.push({
        content: text,
        id: Date.now().toString(),
        complete: false
    });

    todoList.forEach((value)=>{
        console.log(value);
    });
    todoInput.value = "";
    updateList(); //entire 2 remaining array -> completion and remaining updats and reflect variables
     appendTask(todoList);
}
addButton.addEventListener('click', add);
todoInput.addEventListener('keypress',(event)=>{
    if(event.key === 'Enter'){
        add();
    }
});


function deleteAll() {
    todoList = [];
    updateList();
    appendTask(todoList);
}

delelteAllButton.addEventListener('click', deleteAll);

function deleteS() {
    todoList = todoList.filter((data) =>
    {
        if(data.complete === 'false') {
            return data;
        }
    });
     todoList = [];
    updateList();
    appendTask(todoList);
}
deleteSButton.addEventListener('click', deleteS);