 // select element

let input = document.querySelector("#new-task") 
let form = document.querySelector(".new-task-container");
let incomplete = document.querySelector("#items");
let complete = document.querySelector(".complete-list ul");

//functinon

let createTask = (task) =>{
    let li = document.createElement('li');
    let checkbox = document.createElement("input");
    let label = document.createElement('label');
    label.innerHTML= task;
    checkbox.type = 'checkbox';
    li.appendChild(checkbox);
    li.appendChild(label);
    return li ;
}

let incompleteO = (e)=>{
    e.preventDefault();
    let li = createTask(input.value);
    incomplete.appendChild(li);
    input.value = " ";
    bindIncomplete(li,completeTask);
}

let completeTask=function(){
    let li =this.parentNode;
    let deleteBtn = document.createElement("button");deleteBtn.innerText= "Delete";
    deleteBtn.className = "delete";
    li.appendChild(deleteBtn);
    let checkBox = li.querySelector('input[type="checkbox"]');
    checkBox.remove();
    complete.appendChild(li);
    bindcomplete(li,deleteItem);
}

let deleteItem= function(){
    let li =this.parentNode;
    let ul = li.parentNode;
    ul.removeChild(li);
}

let bindcomplete =(li,deleteItem)=>{
      let btn = li.querySelector("button");
      btn.onclick = deleteItem;
}

let bindIncomplete =(newItem , completeTask)=>{
     let inCheckbox = newItem.querySelector('input[type="checkbox"]');
     console.log(inCheckbox);
     inCheckbox.onchange = completeTask;
}

for(let i =0; i< incomplete.children.length; i++){
    bindIncomplete(incomplete.children[i],completeTask);
}
for(let i=0; i<complete.children.length;i++){
    bindcomplete(complete.children[i],deleteItem);
}
form.addEventListener("submit",incompleteO);