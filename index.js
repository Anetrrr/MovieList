const addList = document.getElementById('list')
const inputEl = document.getElementById('input')
const delEl = document.querySelector('#list')
const Form = document.forms
const Btn = document.getElementById('#btn')

document.addEventListener('DOMContentLoaded', function(){



delEl.addEventListener('click', (e) => {
   
    if(e.target.className == 'delete'){
        const parent = e.target.parentElement;
        parent.parentNode.removeChild(parent)

    } 
})
//add movie
    const Form = document.forms
    const addForm = Form['add-movie']
    addForm.addEventListener('submit', (e) => {       
        
        e.preventDefault();
        const value = inputEl.value;
       
        //create elements
        const newList = document.createElement('li')
        const movieName = document.createElement('span')
        const deleteBtn = document.createElement('span')

        //assign classNames

        movieName.classList.add('name')
        deleteBtn.classList.add('delete')

    
        //append
        newList.appendChild(movieName)
        newList.appendChild(deleteBtn)
        delEl.appendChild(newList)

        movieName.textContent = value;
        deleteBtn.textContent = 'delete'
        inputEl.value = '';




    })

})
// const AddMovie = () => {
//     const newList = document.createElement('li')
//     addList.appendChild(newList)
//     newList.innerHTML = inputEl.text
    
// }

//delete button
