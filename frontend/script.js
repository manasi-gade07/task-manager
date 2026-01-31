const taskForm = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');
const API_URL = 'http://localhost:5000/api/tasks'; // replace with deployed backend URL

// Modal elements
const updateModal = document.getElementById('updateModal');
const closeModal = document.getElementById('closeModal');
const updateForm = document.getElementById('updateForm');
let currentTaskId = null;

// Open modal and populate fields
function openUpdateModal(task) {
  currentTaskId = task._id;
  document.getElementById('updateTitle').value = task.title;
  document.getElementById('updateDescription').value = task.description;
  document.getElementById('updateStatus').value = task.status;
  updateModal.style.display = 'flex';
}

// Close modal
closeModal.onclick = () => updateModal.style.display = 'none';
window.onclick = (e) => { if (e.target == updateModal) updateModal.style.display = 'none'; };

// Handle update form submission
updateForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const updatedTask = {
    title: document.getElementById('updateTitle').value,
    description: document.getElementById('updateDescription').value,
    status: document.getElementById('updateStatus').value
  };
  await fetch(`${API_URL}/${currentTaskId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedTask)
  });
  updateModal.style.display = 'none';
  fetchTasks();
});

// Fetch and render tasks
const fetchTasks = async () => {
  const res = await fetch(API_URL);
  const tasks = await res.json();
  taskList.innerHTML = '';
  tasks.forEach(task => {
    const taskEl = document.createElement('div');
    taskEl.className = 'task-card';
    taskEl.innerHTML = `
      <h2>${task.title}</h2>
      <p>${task.description}</p>
      <span class="status-badge ${
        task.status === 'Pending' ? 'status-pending' :
        task.status === 'In Progress' ? 'status-in-progress' :
        'status-completed'
      }">${task.status}</span>
      <div class="task-buttons">
        <button class="update-btn" onclick='openUpdateModal(${JSON.stringify(task)})'>Update</button>
        <button class="delete-btn" onclick="deleteTask('${task._id}')">Delete</button>
      </div>
    `;
    taskList.appendChild(taskEl);
  });
};

// Add task
taskForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const newTask = {
    title: document.getElementById('title').value,
    description: document.getElementById('description').value,
    status: document.getElementById('status').value
  };
  await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newTask)
  });
  taskForm.reset();
  fetchTasks();
});

// Delete task
const deleteTask = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  fetchTasks();
};

// Initial fetch
fetchTasks();
