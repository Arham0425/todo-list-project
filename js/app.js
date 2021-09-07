// selection
const feedback = document.querySelector('.feedback');
const itemForm = document.getElementById('itemForm');
const itemInput = document.getElementById('itemInput');
const itemList = document.querySelector('.item-list');
const clearList = document.getElementById('clear-list');

itemForm.addEventListener('submit', event => {
    // stoped the default function
    event.preventDefault();

    if (itemInput.value === '') {
        console.log('enter some value...')
    } else {
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
    // delete item
    let deleteItem = document.createElement('a')
    deleteItem.classList.add('delete-item', 'item-icon')
    deleteItem.href = '#'
    deleteItem.innerHTML = `<i class="far fa-times-circle"></>`

    itemIcons.append(completeItem,editItem,deleteItem)

    itemDiv.append(itemName,itemIcons)

    // parent element appendChild
    itemList.appendChild(itemDiv)

    // clearing input field 
    itemInput.value = ''
}

// complete item event 
function complete(e) {
    console.log(e.target)
}