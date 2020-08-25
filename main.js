document.onclick = e =>
{
    const clickedNode = e.target
    if(clickedNode.className === 'delete_button')
    {
        const id = clickedNode.parentNode.id
        document.getElementById(id).remove()
    }
}

let i = 1

const addTaskHandler = () => 
{
    const content = document.querySelector('#inputField')

    const ul = document.querySelector('.box-1 ul')

    let newLiItem = document.createElement('li')

    newLiItem.setAttribute('draggable', 'true')
    newLiItem.setAttribute('ondragstart', 'drag(event)')
    
    //setting unique id of each list item
    newLiItem.id = `item${i++}`

    let newSpanItem = document.createElement('span')
    let newDeleteButton = document.createElement('button')
    
    newSpanItem.textContent = content.value
    newDeleteButton.textContent = 'Delete Item'
    // clearing input field
    content.value=""

    newSpanItem.classList.add('content')
    newDeleteButton.classList.add('delete_button')

    newLiItem.appendChild(newSpanItem)
    newLiItem.appendChild(newDeleteButton)

    ul.appendChild(newLiItem)
}


const drag = e => 
{
    e.dataTransfer.setData("text", e.target.id);
}

const allowDrop = e =>
{
    e.preventDefault()
}

const drop = e =>
{
    e.preventDefault()
    let data = e.dataTransfer.getData("text")
    e.target.appendChild(document.getElementById(data))
}

