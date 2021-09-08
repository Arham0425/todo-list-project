// selection
const feedback = document.querySelector('.feedback');
const itemForm = document.getElementById('itemForm');
const itemInput = document.getElementById('itemInput');
const itemList = document.querySelector('.item-list');
const clearList = document.getElementById('clear-list');
let todosItem = []

// get item from local storage
window.addEventListener('DOMContentLoaded', () => {
    todosItem = JSON.parse(localStorage.getItem('todos'))
})

// loaded item 
window.addEventListener('DOMContentLoaded', loadedItem)

function loadedItem() {
    todosItem.forEach(todo => {
        // creating parent div
        let itemDiv = document.createElement('div')
        itemDiv.classList.add('item', 'my-3')
        let itemName = document.createElement('h5')
        itemName.classList.add('item-name', 'text-capitalize')
        itemName.innerText = todo;

        // item icons 
        let itemIcons = document.createElement('div')
        itemIcons.classList.add('item-icons')
        // complete item
        let completeItem = document.createElement('a')
        completeItem.classList.add('complete-item', 'mx-2', 'item-icon')
        completeItem.href = '#'
        completeItem.innerHTML = `<i class="far fa-check-circle"></i>`
        completeItem.addEventListener('click', complete)
        // edit item
        let editItem = document.createElement('a')
        editItem.classList.add('edit-item', 'mx-2', 'item-icon')
        editItem.href = '#'
        editItem.innerHTML = `<i class="far fa-edit"></>`
        editItem.addEventListener('click', edit)
        // delete item
        let deleteItem = document.createElement('a')
        deleteItem.classList.add('delete-item', 'item-icon')
        deleteItem.href = '#'
        deleteItem.innerHTML = `<i class="far fa-times-circle"></>`
        deleteItem.addEventListener('click', delete_)

        itemIcons.append(completeItem, editItem, deleteItem)

        itemDiv.append(itemName, itemIcons)

        // parent element appendChild
        itemList.appendChild(itemDiv)
    })
}

itemForm.addEventListener('submit', event => {
    // prevent the default function
    event.preventDefault();

    if (itemInput.value === '') {
        feedback.innerText = 'please enter valid value'
        feedback.classList.add('showItem', 'alert-danger')
        setTimeout(() => {
            feedback.classList.remove('showItem')
        }, 3000)
    } else {
        // set item to local storage
        if (todosItem === null) {
            todosItem = []
        }
        todosItem.push(itemInput.value)
        localStorage.setItem('todos', JSON.stringify(todosItem))
        
        // creating item 
        createItem(itemInput.value)
    }
})

// creating to-do item 
function createItem(inputValue) {
    // creating parent div
    let itemDiv = document.createElement('div')
    itemDiv.classList.add('item', 'my-3')
    let itemName = document.createElement('h5')
    itemName.classList.add('item-name', 'text-capitalize')
    itemName.innerText = inputValue;

    // item icons 
    let itemIcons = document.createElement('div')
    itemIcons.classList.add('item-icons')
    // complete item
    let completeItem = document.createElement('a')
    completeItem.classList.add('complete-item', 'mx-2', 'item-icon')
    completeItem.href = '#'
    completeItem.innerHTML = `<i class="far fa-check-circle"></i>`
    completeItem.addEventListener('click', complete)
    // edit item
    let editItem = document.createElement('a')
    editItem.classList.add('edit-item', 'mx-2', 'item-icon')
    editItem.href = '#'
    editItem.innerHTML = `<i class="far fa-edit"></>`
    editItem.addEventListener('click', edit)
    // delete item
    let deleteItem = document.createElement('a')
    deleteItem.classList.add('delete-item', 'item-icon')
    deleteItem.href = '#'
    deleteItem.innerHTML = `<i class="far fa-times-circle"></>`
    deleteItem.addEventListener('click', delete_)

    itemIcons.append(completeItem,editItem,deleteItem)

    itemDiv.append(itemName,itemIcons)

    // parent element appendChild
    itemList.appendChild(itemDiv)

    // clearing input field 
    itemInput.value = ''
}

// complete item event 
function complete(e) {
    e.currentTarget.classList.toggle('visibility')
    e.currentTarget.parentElement.previousSibling.classList.toggle('completed')
}

// edit item event 
function edit(e) {
    itemInput.value = e.currentTarget.parentElement.previousSibling.innerText
    delete_(e)
}

// delete item event 
function delete_(e) {
    const item = e.currentTarget.parentElement.previousSibling.innerText
    todosItem.splice(todosItem.indexOf(item), 1)
    localStorage.setItem('todos', JSON.stringify(todosItem))
    e.currentTarget.parentElement.parentElement.remove()
}

// clear the full list
clearList.addEventListener('click', () => {
    const items = document.querySelectorAll('.item')
    items.forEach(item => {
        item.remove()
    })
    todosItem = []
    localStorage.setItem('todos', JSON.stringify(todosItem))
})