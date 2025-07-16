const addtodo = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input')
const generate = ( todo => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo} </span>
    <i class="fas fa-trash delete"></i>
    </li>`;
    list.innerHTML +=  html;
})

//add todo
addtodo.addEventListener('submit',e => {
    e.preventDefault();
    // console.log(addtodo.add.value.trim())

    const todo=addtodo.add.value.trim();
    if(todo.length){
        generate(todo);
        addtodo.reset() 
    }
    
});

//remove todo
list.addEventListener('click',e=>{
    if ( e.target.classList.contains('delete')){
        e.target.parentElement.remove(); 
    }
});


// search todo

const filtertodos = (term) => {
    Array.from(list.children)
    .filter((list) => {
        return !list.textContent.toLowerCase().includes(term);
    })
    .forEach(todo=>{todo.classList.add('filtered')})

    Array.from(list.children)
    .filter((list) => {
        return list.textContent.toLowerCase().includes(term);
    })
    .forEach(todo=>{todo.classList.remove('filtered')})
    
}
search.addEventListener('keyup',()=>{
    const term= search.value.trim().toLowerCase();
    
    filtertodos(term);
   
})
