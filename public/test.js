test('adiciona e remove tarefas', () => {
    document.body.innerHTML = `
        <input type="text" id="taskInput">
        <button id="addTaskButton">Adicionar Tarefa</button>
        <ul id="taskList"></ul>
    `;
    
    require('./script.js'); // Importa o script

    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    
    taskInput.value = 'Tarefa 1';
    addTaskButton.click();
    
    expect(document.getElementById('taskList').children.length).toBe(1);

    const removeButton = document.querySelector('button');
    removeButton.click();
    
    expect(document.getElementById('taskList').children.length).toBe(0);
});