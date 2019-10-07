var create_list = document.getElementById('create_list');
var array_of_list = [];

document.getElementById('submit').addEventListener('click', function(){
    getListName();
})

function getListName(){
    array_of_list.push(create_list.value)
    localStorage.setItem('List-Name', JSON.stringify(array_of_list));
}