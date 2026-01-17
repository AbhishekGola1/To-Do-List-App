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
}


// adding click function for checked and removing