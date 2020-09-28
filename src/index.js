function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then(resp => resp.json())
    .then(json => renderBooks(json))
}

function renderBooks(books) {
  const main = document.querySelector('main')
  books.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = book.name
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

function fetchDogs() {
  return fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderDogs(json))
}

function renderDogs(dogs) {
  const main = document.querySelector("")
  dogs.forEach(dog => {
    
  })
}





console.log('%c HI', 'color: firebrick')
