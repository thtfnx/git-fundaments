window.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('#title'),
          author = document.querySelector('#author'),
          year = document.querySelector('#year'),
          btn = document.querySelector('.btn'),
          bookList = document.querySelector('#book-list');

    btn.addEventListener('click', (event) => {
       event.preventDefault()

    // Basic.validation
    if (title.value == '' && author.value == '' && year.value == '') {
        alert('Please input your information')
    }else {
        const newRow = document.createElement ('tr')


        // Creating new title
        const newAuthor = document.createElement('th')
        newAuthor.innerHTML = title.value
        newRow.appendChild(newTitle)
    }
    })
})