class UI {
    constructor(){
        this.bookName = document.querySelector("#bookName");
        this.author = document.querySelector("#author");
        this.date = document.querySelector("#date");
        this.imgUrl = document.querySelector("#imgUrl");
        this.category = document.querySelector("#category");
        this.bookForm = document.querySelector("#bookForm");
        this.listBooks = document.querySelector("#listBooks .row");
        this.bookForm = document.querySelector("#bookForm");
        this.bookAdd = document.querySelector("#bookAdd");
        this.bookAddBtn = document.querySelector("#bookAddBtn");
        this.sort = document.querySelector("#sort");
        this.searchName = document.querySelector("#searchName");
        this.searchAuthor = document.querySelector("#searchAuthor");
        this.searchCategory = document.querySelector("#searchCategory");
    }

    displayBooks(books){
        this.listBooks.textContent = "";
        books.forEach((book) => {
            book = `
                <div id=${book.id} class="col-3 my-2">
                    <div class="card">
                        <div class="position-relative text-center">
                            <img src="${book.imgUrl}">
                            <div class="position-absolute top-0 end-0">
                                <button onclick="selectedBook(new Book('${book.id}','${book.name}','${book.author}','${book.category}','${book.date}','${book.imgUrl}'))" class="btn btn-warning"><i class="fa-solid fa-pen-to-square"></i></button>
                                <button onclick="deleteBook('${book.id}')" class="btn btn-danger"><i class="fa-solid fa-trash-can"></i></button>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="d-flex text-truncate">
                                <span class="me-2">Book Name : </span><h5 class="text-truncate">${book.name}</h5>
                            </div>
                            <div class="d-flex">
                                <span class="me-2">Author : </span><p class="text-truncate mb-0">${book.author}</p>
                            </div>
                            <div class="d-flex">
                                <span class="me-2">Category : </span><p class="text-truncate mb-0">${book.category}</p>
                            </div>
                            <div class="d-flex">
                                <span class="me-2">Date : </span><p class="text-truncate mb-0">${book.date}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            this.listBooks.insertAdjacentHTML("beforeend",book)
        });
    }
}