// declearations of variables 
var list_table_body = document.getElementById('table_body');
var list = JSON.parse(localStorage.getItem('List-Name'));
var date = new Date();
var button_id;

// get input element by id
var input_elements = document.getElementById('input_elements');
var list_name = document.getElementById('list_name');

// add event listener to the DOM
document.addEventListener('click', function(event){
    button_id = event.target.id;
    console.log(button_id);
})

document.getElementById('list_name').removeEventListener('click', function(event){
    button_id = event.target.id;
    console.log('hello');
})

// function top show the edit input element
function shoeInputElement(){
    input_elements.style.display = 'block'
}

// function to edit list
function editList(){
    console.log()
    console.log('this', list[button_id], 'that', button_id)
    if(button_id !== undefined){
        list[button_id] = list_name.value;
    }
    list_table_body.innerHTML = "";
    display();
    input_elements.style.display = 'none';
}

// function that delete list name
function deleteList(){
    list.splice(button_id, 1);
    list_table_body.innerHTML = "";
    display();
}

// function that display the list table
function display(){
    // loop through the array and display the list 
    for(count = 0; count< list.length; count++){
        var listItems =  `
        
            <tr>
                <td>${list[count]}</td>
                <td>${date.toDateString()}</td>
                <td><button id = "${count}" onclick = "shoeInputElement()" >Edit</button></td>
                <td><button id = "${count}" onclick = "deleteList()">Delete</button></td>
            <tr>
        
        `
        list_table_body.insertAdjacentHTML('beforeend', listItems);
    }
}

display();