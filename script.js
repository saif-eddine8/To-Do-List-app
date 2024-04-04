// Function to add a new task to the list
function addTask(event) {
    event.preventDefault();
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

    // Get the task input value
    var taskText = taskInput.value.trim();

    // If task text is not empty, add it to the list
    if (taskText !== '') {
        // Create a new list item
        var listItem = document.createElement('li');
        listItem.classList.add('task-item');
        listItem.innerHTML = '<span>' + taskText + '</span><button onclick="removeTask(this)">Remove</button>';

        // Append the new list item to the task list
        taskList.appendChild(listItem);

        // Clear the task input
        taskInput.value = '';
    }
}

// Function to remove a task from the list
function removeTask(button) {
    // Get the parent list item
    var listItem = button.parentElement;

    // Remove the parent list item from the task list
    listItem.remove();
}

// Event listener for form submission
document.getElementById('taskForm').addEventListener('submit', addTask);

