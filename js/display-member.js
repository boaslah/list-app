// declearation of variables
var list_table_body = document.getElementById('table_body');
var members = JSON.parse(localStorage.getItem('Members'));
var input_elements = document.getElementById('input_elements');
var date = new Date();
var button_id;
var buttons = document.querySelectorAll('button');


// getting input elements
var full_name = document.getElementById('full_name');
var contact = document.getElementById('contact');
var address = document.getElementById('address');
var date_of_birth = document.getElementById('date_of_birth');

// add event listener to the DOM
// document.addEventListener('click', event => {
//     button_id = event.target.id;
//     console.log(button_id)
// })

buttons.forEach(el => {
    console.log(el)
    el.addEventListener('click', event => {
        console.log(event.target)
        button_id = event.target.id;
        console.log(button_id)
    })
})

// function to show input elements
function showInputElements(){
    input_elements.style.display = "block";
}

// clear input elemens
function clearInputElements(){
    full_name.value = "";
    contact.value = "";
    address.value = "";
    date_of_birth.value = "";
}

// function to edit member
function editMember(){
    // console.log(button_id);
    if(  full_name.value == "", contact.value == "", address.value == "", date_of_birth.value == ""){
        alert('please enter a details');
    }else{
        members[button_id].full_name = full_name.value;
        members[button_id].contact = contact.value;
        members[button_id].address = address.value;
        members[button_id].date_of_birth = date_of_birth.value;
        list_table_body.innerHTML = "";
        display() 
        input_elements.style.display = "none"
        clearInputElements();
    }
    
}

// function to delete member
function deleteMember(){
    if(button_id !== undefined){
        members.splice(button_id, 1);
    }
    list_table_body.innerHTML = "";
    display()
}

// function to display the member table
function display(){
    // loop through the array and display the members  name
    for(count = 0; count < members.length; count++){
        var members_list =  `
    
            <tr>
                <td>${members[count].full_name}</td>
                <td>${members[count].contact}</td>
                <td>${members[count].address}</td>
                <td>${members[count].date_of_birth}</td>
                <td>${date.toDateString()}</td>
                <td><button id = "${count}" class = "edit_button" onclick = "showInputElements()">Edit</button></td>
                <td><button id = "${count}" class = "delete_button" onclick = "deleteMember()">Delete</button></td>
            <tr>
        
        `
        // list_table_body.innerHTML = members_list;
        list_table_body.insertAdjacentHTML('beforeend', members_list);
    }
}
display()
