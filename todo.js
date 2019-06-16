const newTask = document.getElementById("newTask");
const addTask = document.getElementById("addTask");
const container = document.getElementById("container");
const listItem = document.getElementById("list-item-template");
const template = listItem.innerHTML;


addTask.addEventListener('click', () => {
    var task = newTask.value;
    newTask.value = '';
    container.insertAdjacentHTML("beforeend", task);

    var li = document.createElement("li");
    var input = document.querySelector("input");
    var c = document.createTextNode("input");
    
    li.appendChild(c);
    container.insertAdjacentHTML("afterend", li);
})

// function newList() {
//     var li = document.createElement("li");
//     var input = document.querySelector("input");
//     var c = document.createTextNode("input");

//     li.appendChild(c);

//     document.getElementById("container").appendChild(li);

// }