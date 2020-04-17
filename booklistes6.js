const overall = document.querySelector('.content');
const form = document.querySelector('#form');
const booktitle = document.querySelector('#title');
const author = document.querySelector('#author');
const isbn = document.querySelector('#standard');


form.addEventListener('submit', addbook)

class book{
    constructor(title, writer, isnum){
        this.title = title;
        this.writer = writer;
        this.isnum = isnum;
    }
}


class UI{
    addingbook(list){
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
    showalert(message, className){
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        overall.insertBefore(div, form)

        setTimeout(function(){
            document.querySelector('.alert').remove();
        },2000);


    }

    deletebook(target){
        if(target.className === 'delete'){
            if (confirm("Are you sure you want to remove this?")){
                target.parentElement.parentElement.remove();

            }
                    }

    }
    clearfield(){
        booktitle.value = "";
        author.value = "";
        isbn.value = "";

    }
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

    Store.addbooks(list)

    inter.showalert('Book successfully added', 'success');
    inter.clearfield();
    
}

    e.preventDefault();
}
document.getElementById('list').addEventListener('click', function(e){
    const inter = new UI();
    inter.deletebook(e.target);

Store.removebook(e.target.parentElement.previousElementSibling.textContent);

    inter.showalert('Book Removed!!!!!','remove');
    
        e.preventDefault();
    })


class Store {
    static getbook(){
        let books;
        if(localStorage.getItem('books') === null){
            books = [];
        }else{
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }
    static displaybook(){
        const books = Store.getbook();
        books.forEach(function(list){
            const inter = new UI;

            inter.addingbook(list);
        })
  
    }
    static addbooks(list){
        const books = Store.getbook();
        books.push(list);
        localStorage.setItem('books', JSON.stringify(books));

    }
    static removebook(isnum){
        const books = Store.getbook();
        books.forEach(function(list, index){
            if(list.isnum === isnum){
                books.splice(index, 1);
            }
        });
        localStorage.setItem('books', JSON.stringify(books));

    }
}
document.addEventListener('DOMContentLoaded', Store.displaybook);