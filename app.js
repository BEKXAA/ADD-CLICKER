let input = document.querySelector('#input');
let addBtn = document.getElementById('add_btn');
let todoMenu = document.getElementById('todo_menu');
let editForm = document.getElementById('edit_form');
let editSubmitBtn = document.getElementById('edit_submit__btn');
let editCancelBtn = document.getElementById('edit_cancel__btn');
let editInput = document.getElementById('edit_input');

let liParent = null;

addBtn.addEventListener('click', () => {
  // Create
  let valueIn = input.value;
  if (valueIn.length < 5) {
    alert("Kiritgan malumotlaringiz kam yana malumot qo'shing...");
  } else {
    todoMenu.innerHTML += `
     <li id="item">
        <span id="todo_value">${valueIn}</span>
        <div>
          <button id="todo_edit_btn"><i class="fa-solid fa-pen-to-square"></i></button>
           <button id="delete_btn"><i class="fa-solid fa-trash"></i></button>
        </div>
      </li>
`;

    input.value = null;

    // Delete
    let deleteBtns = document.querySelectorAll('#delete_btn');
    
    deleteBtns.forEach((deleteBtn) => {
      deleteBtn.addEventListener('click', () => {
        let divParent = deleteBtn.parentElement;
        divParent.parentElement.remove();
      });
    });

    // read
    let todoValues = document.querySelectorAll('#todo_value');

    todoValues.forEach((todoValue) => {
      todoValue.addEventListener('click', () => {
        todoValue.style.textDecoration = 'line-through';
        todoValue.parentElement.style.backgroundColor = 'grey';
      });
    });

    // Edit

    let todoEditBtns = document.querySelectorAll('#todo_edit_btn');

    todoEditBtns.forEach((todoEditBtn) => {
      todoEditBtn.addEventListener('click', () => {
        editForm.classList.remove('none');

        let divParent = todoEditBtn.parentElement;

        liParent = divParent.parentElement;

        editInput.value = liParent.children[0].textContent;
      });
    });
  }
});

editSubmitBtn.addEventListener('click', () => {
  liParent.children[0].textContent = editInput.value;
  editForm.classList.add('none');
});


editCancelBtn.addEventListener('click', () =>{
  editForm.classList.add('none');
})






