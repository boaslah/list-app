// declearations of variables
var array_of_list = JSON.parse(localStorage.getItem("List-Name")); 
var create_list = document.getElementById('create_list');

function clearInput(){
    create_list.value = "";
}

// add eventListiner to the submit buttom 
document.getElementById('submit').addEventListener('click', function(){
    getListName();
    clearInput()
})

// function that sent the array to local storage
function getListName(){
    array_of_list.push(create_list.value)
    localStorage.setItem('List-Name', JSON.stringify(array_of_list));
}