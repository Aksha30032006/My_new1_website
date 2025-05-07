// Preload a default user if no one is registered yet
if (!localStorage.getItem('registeredUsername')) {
  localStorage.setItem('registeredUsername', 'test');
  localStorage.setItem('registeredPassword', 'test123');
}

function register() {
  const username = document.getElementById('newUsername').value.trim();
  const password = document.getElementById('newPassword').value.trim();

  if (username && password) {
    localStorage.setItem('registeredUsername', username);
    localStorage.setItem('registeredPassword', password);
    alert('Registration successful! Please log in.');
    window.location.href = 'login.html';
  } else {
    alert('Please enter both username and password.');
  }
}

function login() {
  const user = document.getElementById('username').value.trim();
  const pass = document.getElementById('password').value.trim();
  const savedUser = localStorage.getItem('registeredUsername');
  const savedPass = localStorage.getItem('registeredPassword');

  if (user === savedUser && pass === savedPass) {
    alert('Login successful!');
    window.location.href = 'index.html';
  } else {
    alert('Invalid credentials');
  }
}

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const dueDateInput = document.getElementById('dueDate');
  const moodSelect = document.getElementById('moodSelect');
  const taskList = document.getElementById('taskList');

  const text = taskInput.value.trim();
  const mood = moodSelect.value;
  const dueDate = dueDateInput.value;

  if (!text) return;

  const li = document.createElement('li');
  li.className = mood;
  li.textContent = `${text} (${mood}) - Due: ${dueDate}`;

  li.addEventListener('click', () => {
    li.classList.toggle('completed');
    li.textContent = li.classList.contains('completed')
      ? `✅ ${text} (${mood}) - Due: ${dueDate}`
      : `${text} (${mood}) - Due: ${dueDate}`;
  });

  taskList.appendChild(li);
  taskInput.value = '';
  dueDateInput.value = '';
}
