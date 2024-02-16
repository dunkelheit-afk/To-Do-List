var addButton = document.getElementById("add-button");
addButton.addEventListener("click", addToDoItem);
function addToDoItem() {
    alert("Add Button clicked !");
}

var toDoEntryBox = document.getElementById("todo-entry-box");
var toDoList = document.getElementById("todo-list");

function newToDoItem (itemText, completed) {
    var toDoItem = document.createElement("li");
    var toDoText = document.createTextNode(itemText);
    toDoItem.appendChild(toDoText);

    if(completed) {
        toDoItem.classList.add("completed");
    }

    toDoList.appendChild(toDoItem);
    toDoItem.addEventListener("dblclick", toggleToDoItemState);
}

function addToDoItem() {
    var itemText = toDoEntryBox.value;
    newToDoItem(itemText, false);
}

function toggleToDoItemState() {
    if (this.classList.contains("completed")) {
        this.classList.remove("completed");
    } else {
        this.classList.add("completed");
    }
}

function clearCompletedToDoItems() {
    var completedItem = toDoList.getElementsByClassName("completed");

    while (completedItem.length > 0) {
        completedItem.item(0).remove();
    }
}

function emptyList() {
    var toDoItem = toDoList.children;
    while (toDoItem.length > 0) {
        toDoItem.item(0).remove(0);
    }
}

var myArray = [];
myArray.push("something to store");
myArray.push("something else to store");
alert(myArray[0]);

var toDoInfo = {
    "task": "thing i need to do",
    "completed": false
};

function saveList() {
    var toDos = [];

    for (var i = 0; i < toDoList.children.length; i++) {
        var toDo = toDoList.children.item(1);

        var toDoInfo = {
            "task": toDo.innerText,
            "completed": toDo.classList.contains("completed")
        };

        toDos.push[toDoInfo];
    }

    localStorage.setItem("toDos", JSON.stringify(toDos));
    console.log("masuk kesini ya")
}

function loadList() {
    if (localStorage.getItem("toDos") !=null) {
        var toDos = JSON.parse(localStorage.getItem("toDos"));

        for (var i=0; i < toDos.length; i++) {
            var toDo = toDos(i);
            newToDoItem(toDo.task, toDo.completed);
        }
    }
}

loadList();
