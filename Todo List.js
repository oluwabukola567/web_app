const taskss = document.querySelector('#tasksli')
const cardeve = document.querySelector('.collection')
const input = document.querySelector('.clear-tasks') 
const listt = document.querySelector('#cards')
const lis = document.querySelector('#listy')
//const li = document.createElement('li') 
//li.className ='collection-item';




loadevent()

function loadevent(){
    taskss.addEventListener('submit', addtask);
    cardeve.addEventListener('click', removeTasks)
    input.addEventListener('click', clearTask)
   // lis.addEventListener('keyup', filterthrough)
    document.addEventListener('DOMContentLoaded', getTask);

}
function addtask(e){
    if (listt.value === ''){
       alert("you cannot enter an empty task");
       
    }

    const li = document.createElement('li') 
    li.className ='collection-item';
    li.appendChild(document.createTextNode(listt.value))
    /*
    var i;
    for(i = 0; i < li.length; i++){
        var span = document.createElement('span');
        var text = document.createTextNode("x");
        span.className = "close";
        span.appendChild(text);
        li[i].appendChild(span);

    }
   
    const del = document.createElement('a')
    del.className = "delete"
    del.innerHTML = '<i class=""></i>';
    li.appendChild(del);
*/
    cardeve.appendChild(li);

    storelocal(listt.value);
    listt.value = '';
    e.preventDefault()
}

function removeTasks(e){
if(e.target.className ==='collection-item'){
    if(confirm('Are you sure you want to truncate this')){
    
        e.target.remove();
//let taskit = e.target.parentElement.parentElement
       // removelocal(taskit)
    }
    
}
}

function removelocal(item){
   const items = getTask()
items.forEach(function(item, index){
    if(listt.textContent === item){
        items.splice(index, 1);
    }
});
localStorage.setItem('items',JSON.stringify(items))
}


function clearTask(e){
input.innerHTML = ""

clearlocal();
}

function clearlocal(){
    localStorage.clear();
}

/*
function filterthrough(e){
    const test = e.target.value.toUpperCase();
    console.log(test)
    document.querySelectorAll('.collection').forEach(function(cards){
       const tas = cards.firstchild.innerText();
        if(tas.indexOf(test) > -1){
            cards.style.display = 'block'
        }else{
            cards.style.display = 'none';
        }
    })
}
*/
/*
function filterthrough(e){
  const fill = e.value;
  console.log(fill)
  cardever = document.querySelectorAll('.collection')
  cardev = document.querySelectorAll('.collection-item')
       
    for(i = 0; i < cardev.length; i++){
       // a = li[i].getEementByTagName('a')[0];
       const tas = cardev[i].firstchild
         const textval = tas.textContent();
        if(textval.toUpperCase().indexOf(fill)> -1){
            cardever[i].style.display ='block';
        }else{
            cardever[i].style.display = 'none';
        }
    }
}
*/ 
function storelocal(item){
let items 
if(localStorage.getItem('items') === null){
    items = [];
} else{
    items = JSON.parse(localStorage.getItem('items'));
}
items.push(item);
localStorage.setItem('items',JSON.stringify(items));
}



function getTask(){
    let items 
if(localStorage.getItem('items') === null){
    items = [];
} else{
    items = JSON.parse(localStorage.getItem('items'));
}
items.forEach(function(item){
    const li = document.createElement('li') 
    li.className ='collection-item';
    li.appendChild(document.createTextNode(item))

    var i;
    for(i = 0; i< li.length; i++){
        const del = document.createElement('a')
    

    }
    /*
    del.className = "delete"
    del.innerHTML = '<i class="fa fa-remove">X</i>';
    li.appendChild(del);
*/
    cardeve.appendChild(li);
});
} 
