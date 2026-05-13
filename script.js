let todos = [];

// Get input value and add todo
function addTodoFromInput() {
  const input = document.getElementById("todoInput");
  const text = input.value.trim();

  if (!text) return;

  addTodo(text);
  input.value = "";
}

// Add new todo
function addTodo(text) {
  const todo = {
    id: Date.now(),
    text: text,
    completed: false
  };

  todos.push(todo);
  renderTodos();
}

// Delete todo
function deleteTodo(id) {
  todos = todos.filter(todo => todo.id !== id);
  renderTodos();
}

// Toggle completed state
function toggleTodo(id) {
  todos = todos.map(todo => {
    if (todo.id === id) {
      return { ...todo, completed: !todo.completed };
    }
    return todo;
  });

  renderTodos();
}

// Render UI
function renderTodos() {
  const container = document.getElementById("todoList");
  container.innerHTML = "";

  todos.forEach(todo => {
    const div = document.createElement("div");
    div.className = "todo-item";

    div.innerHTML = 
      <span 
        class="${todo.completed ? "completed" : ""}" 
        onclick="toggleTodo(${todo.id})"
        style="cursor:pointer"
      >
        ${todo.text}
      </span>

      <button onclick="deleteTodo(${todo.id})">Delete</button>
    ;

    container.appendChild(div);
  });
}
