// declearations of variables 
var list_table_body = document.getElementById('table_body');
var list = JSON.parse(localStorage.getItem('List-Name'));
var date = new Date();
var button_id;
var textContent;
var delete_buttons_id;
var edit_buttons_id;

// get input element by id
var input_elements = document.getElementById('input_elements');
var list_name = document.getElementById('list_name');

// function to show the edit input element
function shoeInputElement(){
    input_elements.style.display = 'block'
}

// add event listener to the DOM
document.addEventListener('click', function(event){
    textContent = event.target;
    console.log(textContent.firstChild.data)
    localStorage.setItem('List-Title', JSON.stringify(textContent.firstChild.data));
    localStorage.setItem(textContent.firstChild.data, JSON.stringify([]));
})

// function that display the list table
function display(){
    // loop through the array and display the list 
    for(count = 0; count< list.length; count++){
        var listItems =  `
        
            <tr>
                <td><a href="././list-items.html">${list[count]}</a></td>
                <td>${date.toDateString()}</td>
                <td><button type="button" id = "${count}"  onclick = "shoeInputElement()" class = "edit_button">Edit</button></td>
                <td><button type="button" id = "${count}"  class = "delete_button">Delete</button></td>
            <tr>
        
        `
        list_table_body.insertAdjacentHTML('beforeend', listItems);
    }
}

display();

// function to edit list
var edit_buttons = document.querySelectorAll('button.edit_button')

edit_buttons.forEach(button =>{
    button.addEventListener('click', function(event){
        edit_buttons_id = event.target.id;
        console.log(edit_buttons_id);
    })
})

function editList(){
   list[edit_buttons_id] = list_name.value;
   console.log(list);
   localStorage.setItem('List-Name', JSON.stringify(list))
   location.reload(true);
}

// function that delete list 
var delete_buttons = document.querySelectorAll('button.delete_button');
delete_buttons.forEach(button => {
    button.addEventListener('click', function(event){
        delete_buttons_id = event.target.id;
        console.log(list[delete_buttons_id])
        list.splice(delete_buttons_id, 1);

        localStorage.setItem('List-Name', JSON.stringify(list));
        location.reload(true);
    })
});