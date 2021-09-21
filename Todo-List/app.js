const form= document.querySelector('.add-form');
const list= document.querySelector('.todos');
const search = document.querySelector('.search input');

search.addEventListener('keyup', e=>{
    const searchVal = search.value.trim().toLowerCase();
    makeFilter(searchVal)
});

const makeFilter=(searchVal)=>{
    Array.from(list.children).filter((todo)=>{
        console.log(todo.textContent.includes(searchVal))
        return !todo.textContent.toLowerCase().includes(searchVal);
    }).forEach((todo)=>{
        todo.classList.add('filtered');
    });
   

    Array.from(list.children).filter((todo)=>{
        return todo.textContent.toLowerCase().includes(searchVal);
    }).forEach((todo)=>{
        todo.classList.remove('filtered');
    });
    
}


//CreateElement
function createTemplate(todo){
    let html = `
    <li class="list-group-item d-flex justify-content-between align-items-center" aria-current="true">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    ` ;
    list.innerHTML += html;
}
//addform = input name
form.addEventListener('submit', (e)=>{

    e.preventDefault();
    const todo = form.addform.value.trim().toLowerCase();
    
    if(todo.length){
        createTemplate(todo);
        form.reset();
    }
})

//Delete List 
//Find classList which is contains "delete" word coming from icons
//ParentElement access to 'li'
list.addEventListener('click', (e)=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove()
    }
})
