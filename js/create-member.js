// declearatiopns of variables 
var members = JSON.parse(localStorage.getItem("Members"));
var full_name = document.getElementById('full_name');
var contact = document.getElementById('contact');
var date_of_birth = document.getElementById('data_of_birth');
var address = document.getElementById('address');

function clear(){
    full_name.value = "";
    contact.value = "";
    date_of_birth.value = "";
    address.value = "";
}

// Adding eventListener to the submit button
document.getElementById('submit').addEventListener('click', function(){
    getMemberDetils({
        full_name: full_name.value,
        contact: contact.value,
        date_of_birth:date_of_birth.value,
        address: address.value
    })
    clear();
})

// a function that get the user input as a pariameter put it in an array and sent it to local storage
/**
 * Stores user input in local storage when the submit button is clicked
 * @param {Object} member_details - Object containing staff details
 */
function getMemberDetils(member_details){
    members.push(member_details);
    localStorage.setItem('Members', JSON.stringify(members));
}