const overall = document.querySelector('.content');
const form = document.querySelector('#form');
const booktitle = document.querySelector('#title');
const author = document.querySelector('#author');
const isbn = document.querySelector('#standard');


form.addEventListener('submit', addbook)

function UI(){}
    UI.prototype.addingbook = function(list){
      const tablelist = document.getElementById('list')
      const row = document.createElement('tr');
      row.innerHTML = `
      <td>${list.title}</td>
      <td>${list.writer}</td>
      <td>${list.isnum}</td>
      <td><a href = "#" class= "delete">X</a></td>
      `;
      tablelist.appendChild(row);
    }


    UI.prototype.showalert = function(message, className){
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        overall.insertBefore(div, form)

        setTimeout(function(){
            document.querySelector('.alert').remove();
        },1000);
    }

    UI.prototype.deletebook = function(target){
        if(target.className === 'delete'){
            if (confirm("Are you sure you want to remove this?")){
                target.parentElement.parentElement.remove();

            }
                    }
    }

    UI.prototype.clearfield = function(){
        booktitle.value = "";
        author.value = "";
        isbn.value = "";
    }



function addbook(e){
    const title = booktitle.value,
        writer = author.value,
        isnum = isbn.value;


        const list = new book(title, writer, isnum);
const inter = new UI();
if (title === ''|| writer === '' || isnum === ''){
    inter.showalert("Fill out the empty fields", 'error');
}else{
    inter.addingbook(list);
    addbooks(list);

    inter.showalert('Book successfully added', 'success');
    inter.clearfield();
    
}


    

    e.preventDefault()
}

function book(title, writer, isnum){
    this.title = title;
    this.writer = writer;
    this.isnum = isnum;
}

document.getElementById('list').addEventListener('click', function(e){
const inter = new UI();
inter.deletebook(e.target);
inter.showalert('Book Remove','remove');
removebook(e.target.parentElement.previousElementSibling.textContent);

    e.preventDefault();
})

function getbook(){
    let books;
    if(localStorage.getItem('books') === null){
        books = [];
    }else{
        books = JSON.parse(localStorage.getItem('books'));
    }
    return books;

}

function addbooks(list){
    const books = getbook();
        books.push(list);
        localStorage.setItem('books', JSON.stringify(books));


}

function removebook(isnum){
    const books = getbook();
    books.forEach(function(list, index){
        if(list.isnum === isnum){
            books.splice(index, 1);
        }
    });
    localStorage.setItem('books', JSON.stringify(books));

}

function displaybook(){
    const books = getbook();
    books.forEach(function(list){
        const inter = new UI;

        inter.addingbook(list);
    })
}
document.addEventListener('DOMContentLoaded', displaybook);