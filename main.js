const inputTask = document.querySelector('.task-input')
const inputButton = document.querySelector('.task-button')
const form = document.querySelector('.task-form')
const fullList = document.querySelector('.list-body')

let toDoList = []

form.addEventListener('submit' , function(e){
    e.preventDefault();

})

function adcionarTarefas(){
    if(inputTask.value.trim()=== ''){
        alert("Por favor, insira uma tarefa antes de adicionar!")
        return;
    }
    toDoList.push({
        valor: inputTask.value ,
        concluida: false
    })

    inputTask.value = '';

    mostrarTarefas();
}

function recarregarTarefas(){

    const tarefasLocalStorage = localStorage.getItem('List')
    
    if (tarefasLocalStorage){
    toDoList = JSON.parse(tarefasLocalStorage);}

    mostrarTarefas();

}

    recarregarTarefas()

inputButton.addEventListener('click' , adcionarTarefas)

function mostrarTarefas(){

    let task = ''

    toDoList.forEach((item , index) => {

        task = task +  `
            <div class="list-item ${item.concluida && "done"}">
                <img class = 'check-img' src="./task-img/checked.png" alt="check-task" onclick = "completeTask(${index})">
                <li class='list-task'>${item.valor}</li>
                <img class="delete-img" src="./task-img/trash.png" alt="delete-task" onclick="deleteTask(${index})">
            </div> 
        `
    })

    fullList.innerHTML = task

    localStorage.setItem('List' , JSON.stringify(toDoList))

}

function deleteTask(index){
    toDoList.splice(index , 1)

    mostrarTarefas();
}

function completeTask(index) {
    toDoList[index].concluida = !toDoList[index].concluida

    mostrarTarefas();

}