// declearation of variables
var list_table_body = document.getElementById('table_body');
var members = JSON.parse(localStorage.getItem('Members'));
var input_elements = document.getElementById('input_elements');
var date = new Date();
var edit_button_id;
var delete_button_id;

// getting input elements
var full_name = document.getElementById('full_name');
var contact = document.getElementById('contact');
var address = document.getElementById('address');
var date_of_birth = document.getElementById('date_of_birth');


// clear input elemens
function clearInputElements(){
    full_name.value = "";
    contact.value = "";
    address.value = "";
    date_of_birth.value = "";
}

// function to edit member
// function editMember(){
//     // console.log(button_id);
//     if(  full_name.value == "", contact.value == "", address.value == "", date_of_birth.value == ""){
//         alert('please enter a details');
//     }else{
//         members[button_id].full_name = full_name.value;
//         members[button_id].contact = contact.value;
//         members[button_id].address = address.value;
//         members[button_id].date_of_birth = date_of_birth.value;
//         list_table_body.innerHTML = "";
//         display() 
//         input_elements.style.display = "none"
//         clearInputElements();
//     }
    
// }



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
                <td><button id = "${count}" class = "edit_button">Edit</button></td>
                <td><button id = "${count}" class = "delete_button">Delete</button></td>
            <tr>
        
        `
        // list_table_body.innerHTML = members_list;
        list_table_body.insertAdjacentHTML('beforeend', members_list);
    }
}
display()

var editbuttons = document.querySelectorAll('button.edit_button');
var deletebuttons = document.querySelectorAll('button.delete_button');

editbuttons.forEach(editbutton => {
    editbutton.addEventListener('click', event => {
        edit_button_id = event.target.id;
        input_elements.style.display = "block";
        full_name.value = members[edit_button_id].full_name;
        contact.value = members[edit_button_id].contact; 
        address.value = members[edit_button_id].address;
        date_of_birth.value = members[edit_button_id].date_of_birth;
    })
})

// function to edit member
function editMember(){
    console.log(edit_button_id);
    members[edit_button_id].full_name =  full_name.value;
    members[edit_button_id].contact = contact.value;  
    members[edit_button_id].address = address.value;
    members[edit_button_id].date_of_birth = date_of_birth.value;
    localStorage.setItem('Members', JSON.stringify(members))
    location.reload(true);
}

// function to delete member
deletebuttons.forEach(deletebutton => {
    deletebutton.addEventListener('click', event => {
        delete_button_id = event.target.id;
        members.splice(delete_button_id, 1);
        localStorage.setItem('Members', JSON.stringify(members));
        location.reload(true);
    })
})
