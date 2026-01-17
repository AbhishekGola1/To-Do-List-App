const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// addTask function for adding any task 

function addTask() {

    if(inputBox.value.trim() === '') {
        alert("You must write something!");
    }
    else {
        const li = document.createElement("li");
        li.textContent = inputBox.value;
        listContainer.appendChild(li);

        const span = document.createElement("span");
        span.innerHTML = "\u00d7" 
        li.appendChild(span);
    }

    inputBox.value = "";
    saveData();
}


// adding click function for checked and removing task

listContainer.addEventListener("click", (e) => {

    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }

});


// creating save data function for saving data at local storage

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// creating show data function for showing data from local storage

function showData() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showData();