document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value;
    
    if (taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.addEventListener('click', function() {
            li.remove();
        });
        
        li.appendChild(removeButton);
        document.getElementById('taskList').appendChild(li);
        taskInput.value = '';
    }
});