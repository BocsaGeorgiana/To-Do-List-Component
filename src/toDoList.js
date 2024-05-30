const template = document.createElement('template');
template.innerHTML = `

  <div class="to-do-list">
  <div class="header"> TO-DO LIST</div>
    <form class="input-field">
      <input type="text" placeholder="Enter a new task">
        <button type="submit">
            <i class="fas fa-plus"></i>
      </button>    
      </form>
<!--      <div class="tasks">ALL MY TASKS</div>-->
    <ul class="task-list"></ul>
  </div>

  <style>
    body,
    html {
        height: 100%;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #727b81;
    }

    .container {
        display: flex;
    }

    .to-do-list {
        background-color: #eaeaee;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 30px;
        margin: 0 auto;
        width: 450px;
        
    }
    
    .header{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 29px;
        font-weight: 550;
        font-size: 20px;
        color: #738AB0;
    }
    
      .tasks{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        font-weight: 550;
        font-size: 20px;
        color: #738AB0;
    }

    .input-field {
        display: flex;
        margin-bottom: 10px;
        padding-right: 10px;
    }

    .input-field input {
        width: calc(100% - 100px);
        padding: 5px;
        font-size: 18px;
        border-radius: 5px;
        height: 30px;
        border-width: thin;
    }

    .input-field button {
        width: 100px;
        margin-left: 10px;
        font-size: 18px;
        border: none;
        border-radius: 5px;
        background-color: #6035e1;
        color: white;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .input-field button:hover {
        background-color: #9d82ed;
    }

    ul {
        list-style-type: none;
        padding: 0 10px 0 0; 
        margin: 10px 0 0 0;
        overflow-y: auto;
        max-height: 502px;
    }

    li {
        height: 22px;
        background-color: #fff;
        padding: 16px;
        margin-bottom: 10px;
        border-radius: 5px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .task-info {
        display: flex;
        align-items: center;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    .task-info input[type="checkbox"] {
        margin-right: 10px;
    }

    .delete {
        background-color: #5a5a5c;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
        padding: 6px;
    }

    .delete:hover {
        background-color: #1f2124;
    }
    
    .edit-input{
        width: 350px;
        height: 30px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    
    .taskName{
       white-space: nowrap;
       text-overflow: ellipsis;
       overflow: hidden;
       font-weight: 500;
    }
    
    .greyed-out {
    background-color: #d3d3d3; /* Light grey background */
    color: #a9a9a9; /* Grey text color */
}
  </style>
`;

class ToDoList extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.appendChild(template.content.cloneNode(true));
        this.form = this.querySelector('.input-field');
        this.input = this.querySelector('input');
        this.taskList = this.querySelector('.task-list');
        this.attachEvents();
    }

    attachEvents() {
        this.form.addEventListener('submit', (event) => this.addTask(event));
        this.taskList.addEventListener('click', (event) => this.modifyTask(event));
    }

    addTask(event) {
        event.preventDefault();

        const inputValue = this.input.value.trim();
        if (inputValue !== '') {
            const listItem = document.createElement('li');
            const taskDiv = document.createElement('div');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            const taskName = document.createElement('span');
            taskName.innerText = inputValue;
            const deleteButton = document.createElement('button');

            checkbox.addEventListener('change', () => {
                listItem.classList.toggle('greyed-out', checkbox.checked);
            });

            taskDiv.classList.add('task-info');
            deleteButton.classList.add('delete');
            taskName.classList.add('taskName');
            deleteButton.innerHTML = `<i class="fas fa-trash"></i>`;

            this.taskList.appendChild(listItem);
            listItem.appendChild(taskDiv);
            listItem.appendChild(deleteButton);
            taskDiv.appendChild(checkbox);
            taskDiv.appendChild(taskName);

            this.input.value = '';
        }
    }

    modifyTask(event) {
        const target = event.target;

        if (target.classList.contains('fa-trash')) {
            const task = target.closest('li');
            task.remove();
        }

        if (target.tagName.toLowerCase() === 'span') {
            const task = target.innerText;
            target.innerHTML = `<input class="edit-input" type="text" value="${task}"/>`;
            const editInput = target.querySelector('input');
            editInput.focus();

            editInput.addEventListener('blur', () => {
                const newValue = editInput.value.trim();
                if (newValue) {
                    target.innerHTML = newValue;
                } else {
                    target.closest('li').remove();
                }
            });
        }
    }
}

customElements.define('my-to-do-list', ToDoList);
