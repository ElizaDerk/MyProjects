const url = 'https://jsonplaceholder.typicode.com/todos';
let listBox = document.getElementById('todoTable')

const deleteTodo =async (idOfDeleted) =>{
    console.log(this)
    await fetch('https://jsonplaceholder.typicode.com/todos/${idOfDeleted}', {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        idOfDeleted
    })
    let deleteButton = document.querySelector('.delete-icon');
    deleteButton.parentElement.parentElement.remove()
}

function idOfDeleted() {
    let deleteButton = document.querySelector('.delete-icon');
    deleteButton.addEventListener("click", deleteTodo)
}


function newElement(el) {
    let li = document.createElement("li");
    li.setAttribute('class', `list`)
    let inputValue = document.getElementById("title").value;
    li.innerHTML = `
        <li class="list-li" id="el+1">
            <div class="list-first">
                  <input class="checkbox" onclick="checkItem()" id="checkbox-el+1" type="checkbox" ${completed = false}>
                  <p class="list-title">${inputValue}</p>
            </div>
           <div class="icon-list">
                
                     <button onclick="deleteTodo(idOfDeleted)" id="delete-todo-el+1" class="delete-icon" type="button"><img
                         src="IMG/delete.png" alt="delete">
                     </button>
                
           </div>
        </li>
        `
    if (inputValue === '') {
        console.log("You must write something!");
    } else {
        document.getElementById("todoTable").appendChild(li);
    }
    document.getElementById("title").value = "";
}

const createTodos = async () => {
    body = JSON.stringify( newElement())

    await fetch (url, {
        method : "POST",
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body
    })

    idOfDeleted()
}


const myFilter = document.getElementById('myFilter')
const filterTodos = (e) => {
    console.log(result)
   const newTodos = result.filter(el =>el.title.includes(e.target.value))
    listBox.innerHTML = ''
    newTodos.forEach((el)=>{
        listBox.innerHTML += `
        <li class="list-li" id="${el.id}">
            <div class="list-first">
                  <input class="checkbox" id="checkbox-${el.id}" type="checkbox" ${el.completed === true ? 'checked' : ''}>
                  <p class="list-title">${el.title}</p>
            </div>
           <div class="icon-list">
                 
                     <button onclick="deleteTodo(idOfDeleted)" id="delete-todo-${el.id}" class="delete-icon" type="button"><img
                         src="IMG/delete.png" alt="delite">
                     </button>     
           </div>
        </li>
        `
    })

}
myFilter.addEventListener('input', filterTodos)


const filterOptions  = document.getElementById('select');
filterOptions .addEventListener('change', filterTodoSelect)

    function filterTodoSelect(){
        switch (filterOptions .value) {
            case 'completed':
                document.querySelectorAll('.checkbox').forEach(element => {
                    if (!element.checked) {
                        document.querySelector('ul').appendChild(element.parentElement.parentElement)
                    }
                })
                break;

            case 'uncompleted':
                document.querySelectorAll('.checkbox').forEach(element => {
                    if (element.checked) {
                        document.querySelector('ul').appendChild(element.parentElement.parentElement)
                    }
                })
                break;

        }
    }





const getTodos = async () =>{
    const response = await (await fetch(url)).json()
    response.forEach((el)=>{
        listBox.innerHTML += `
        <li class="list-li" id="${el.id}" ${el.completed === true ? 'checked' : ''}>
            <div class="list-first">
                  <input class="checkbox"  id="checkbox-${el.id}" type="checkbox" ${el.completed === true ? 'checked' : ''} >
                   <p>${el.title}</p>
            </div>
           <div class="icon-list">
               
                     <button onclick="deleteTodo(idOfDeleted)" id="delete-todo-${el.id}" class="delete-icon" type="button"><img
                         src="IMG/delete.png" alt="delite">
                     </button>
                
           </div>
        </li>
        `

    })
    return response
}
let result = null;
getTodos().then(res => result = res)





