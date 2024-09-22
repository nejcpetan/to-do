// Global tasks array to manage tasks
let tasks = [];

// Load tasks from local storage on page load
window.onload = function () {
  tasks = loadTasksFromLocalStorage();
  renderTasks(tasks);
};

// Function to handle creating a task
function createTask() {
  const title = document.getElementById("new-task-title").value.trim();
  const description = document
    .getElementById("new-task-description")
    .value.trim();

  if (!title || !description) {
    showToast("Please enter both a title and a description.");
    return;
  }

  const newTask = {
    id: tasks.length,
    title,
    description,
    completed: false,
  };

  tasks.push(newTask);
  saveTasksToLocalStorage(tasks);
  renderTasks(tasks);
  clearInputFields();
}

// Function to show the toast message
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.remove("hidden"); // Show the toast
  toast.classList.add("show");

  // Hide the toast after 3 seconds
  setTimeout(() => {
    toast.classList.remove("show");
    toast.classList.add("hidden");
  }, 3000);
}

// Function to render tasks to the DOM
function renderTasks(tasks) {
  const ulElement = document.getElementById("task-list");
  ulElement.innerHTML = ""; // Clear the existing list

  tasks.forEach((task) => {
    ulElement.insertAdjacentHTML(
      "beforeend",
      `
      <li>
        <div class="card">
          <div class="container">
            <h4 class="${task.completed ? "line-through" : ""}"><b>${
        task.title
      }</b></h4>
            <p >${task.description}</p>
            <button class="complete-button" data-id="${
              task.id
            }">Complete</button>
          </div>
        </div>
      </li>
    `
    );
  });

  // Attach event listeners
  document.querySelectorAll(".complete-button").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.getAttribute("data-id");
      console.log(`Complete button clicked for task with id: ${id}`); // Debug log
      completeTask(id);
    });
  });
}

// Function to complete the task
function completeTask(id) {
  const taskIndex = tasks.findIndex((task) => task.id == id); // Find the task by id
  console.log(`Task index found: ${taskIndex}`); // Debug log
  if (taskIndex !== -1) {
    tasks[taskIndex].completed = !tasks[taskIndex].completed; // Toggle completed status
    console.log(`Task completed status changed:`, tasks[taskIndex]); // Log the object directly
    // Debug log
    saveTasksToLocalStorage(tasks); // Save the updated tasks
    renderTasks(tasks); // Re-render the tasks
  } else {
    console.log(`No task found with id: ${id}`); // Debug log
  }
}

// Save tasks array to local storage
function saveTasksToLocalStorage(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load tasks from local storage
function loadTasksFromLocalStorage() {
  return JSON.parse(localStorage.getItem("tasks")) || [];
}

// Clear input fields after a task is added
function clearInputFields() {
  document.getElementById("new-task-title").value = "";
  document.getElementById("new-task-description").value = "";
}

// Event listener for the "Add Task" button
document.getElementById("add-task").addEventListener("click", createTask);

// Optional: Event listener for the Enter key
document
  .getElementById("new-task-description")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      createTask();
    }
  });
