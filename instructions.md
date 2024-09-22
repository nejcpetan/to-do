### **Project: Task Management App (To-Do List)**

---

**Objective:** Build a simple task management (to-do list) application that allows users to add, remove, and manage tasks. This app will help you practice DOM manipulation, event handling, and working with data structures like arrays—key skills for front-end development.

### **Features:**

1. **Add Task:**
   - A user should be able to input a task using a text input field and click an "Add Task" button to add it to the task list.
2. **Mark as Complete:**

   - Once a task is completed, the user should be able to mark the task as complete (either by clicking a checkbox or clicking on the task itself).
   - Completed tasks should be visually distinct (e.g., strike-through or change background color).

3. **Remove Task:**

   - The user should be able to delete individual tasks from the list.

4. **Filter Tasks (Optional but recommended):**

   - Add a filtering system that allows the user to see all tasks, only completed tasks, or only incomplete tasks.

5. **Persist Data (Optional):**
   - Store tasks in `localStorage` so that the tasks persist even after a page reload.

### **Requirements:**

- **HTML:** Create the structure (task input, task list, buttons).
- **CSS:** Style the app to make it look clean and user-friendly.
- **JavaScript:** Focus here. Use JS to:
  - Manage task addition, completion, and removal.
  - Update the DOM dynamically as the user interacts.
  - Use an array or a similar data structure to store task states (completed or not).

### **Steps to Complete:**

1. **HTML:**

   - Create a basic form with a text input and an "Add Task" button.
   - Create an empty `<ul>` or `<div>` where the tasks will be displayed.

2. **CSS:**

   - Style the form, task list, and buttons to look visually appealing.
   - Add styles for completed tasks (e.g., strike-through or a different background color).

3. **JavaScript:**
   - **Task Creation:** Write code to capture the input when the user submits a new task. Add this task to the DOM dynamically.
   - **Mark as Complete:** Add an event listener to each task so the user can mark it as complete (modify the DOM to show this visually).
   - **Remove Task:** Add functionality to delete a task from both the DOM and your internal data structure.
   - **Data Handling:** Keep the tasks in an array (or object) to manage their state (e.g., whether they are completed or not).
   - **Optional Filters:** Write JS to filter between "all tasks," "completed tasks," and "incomplete tasks."

### **Example Structure (Basic HTML Template):**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Task Manager</title>
    <style>
      /* Add your CSS styling here */
    </style>
  </head>
  <body>
    <div class="task-manager">
      <h1>Task Manager</h1>
      <input type="text" id="new-task" placeholder="Enter a new task" />
      <button id="add-task">Add Task</button>

      <ul id="task-list"></ul>
    </div>

    <script>
      // Add your JavaScript code here
    </script>
  </body>
</html>
```

### **Focus on These JavaScript Concepts:**

1. **DOM Manipulation:** How you dynamically update the DOM when the user interacts with the app (e.g., adding/removing tasks).
2. **Event Handling:** Listening for user actions (clicking buttons, typing, etc.).
3. **Array/State Management:** Storing tasks in arrays, handling task data (whether a task is completed or not), and rendering that to the UI.
4. **localStorage (Optional):** Persisting tasks even after page reload.

---

### **Next Steps After Completion:**

Once you complete this project, here are some ideas to make it more challenging or bring it closer to real-world applications:

1. **Form Validation:** Ensure that the user cannot add empty tasks.
2. **Task Editing:** Allow users to edit existing tasks.
3. **Animations:** Add animations (using CSS or JavaScript) to smoothly add or remove tasks.
4. **Frameworks:** Eventually, you could rebuild the same project using a framework like React to better understand component-based architecture.
