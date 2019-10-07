var full_name = document.getElementById('full_name');
var contact = document.getElementById('contact');
var date_of_birth = document.getElementById('data_of_birth');
var address = document.getElementById('address');

var members = [];

document.getElementById('submit').addEventListener('click', function(){
    getMemberDetils(full_name.value, contact.value, date_of_birth.value, address.value);
})

function getMemberDetils(input_full_name, input_contact, input_data_of_birth, input_address){
    var member_details ={
        full_name: input_full_name,
        contact: input_contact,
        date_of_birth:input_data_of_birth,
        address: input_address,
    }

    members.push(member_details);
    localStorage.setItem('Members', JSON.stringify(members));
}