const form = document.querySelector("form");
const tasks = document.querySelector(".tasks ul");
const searchTask = document.querySelector(".info input");
const addNewTask = document.querySelector(".addTasks #newItem")
// 1 When click the submit button create the li 
// 2 Add the li content
// 3 get the input value
// 4 give the value to the li
form.addEventListener("submit", addLi);
function addLi(e) {
    e.preventDefault();
    const li = document.createElement("li");
    // add text
    const text = document.createTextNode(newItem.value);
    li.appendChild(text)
    // add span
    const span = document.createElement("span");
    span.textContent = `${(new Date()).getFullYear()} - ${(new Date()).getMonth() + 1} - ${(new Date()).getDate()}`;
    li.appendChild(span);
    // add button
    const button = document.createElement("button");
    button.textContent = "Done";
    li.appendChild(button);
    tasks.appendChild(li);
    addNewTask.value = "";
    addNewTask.focus();
}
// Delete the tasks
tasks.addEventListener('click', deleteTasks);
function deleteTasks(e) {
    if (e.target.textContent === "Done") {
        e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    }
}

// Search the tasks
searchTask.addEventListener("keyup", searchTasks)
function searchTasks(e) {
    const lis = document.querySelectorAll(".tasks li");
    Array.from(lis).forEach(li => {
        if (li.firstChild.textContent.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1) {
            li.style.display = "flex";
        } else {
            li.style.display = "none";
        }

    })
}

