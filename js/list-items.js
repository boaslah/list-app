// declearations of variables 
var list_table_body = document.getElementById('table_body');
var list_name = JSON.parse(localStorage.getItem('List-title'));
var team_members =  JSON.parse(localStorage.getItem('Members'));
var ul = document.getElementById('ul');
var table = document.getElementById('table');
var date = new Date();
var button_id;
var list_items = [];
var li_textnode;
var listItems;


function showTeamMembers(){
    ul.innerHTML = "";
    ul.style.display = 'block';
    for(count = 0; count<team_members.length; count++){
        console.log(team_members.length)
        var full_names = team_members[count].full_name;
        ul.innerHTML += `<li onclick="display(full_names)">${full_names}</li>`;
    }
}

ul.addEventListener('click', function(event){
    li_textnode = event.target.innerHTML;
    localStorage.setItem('Names', li_textnode);
    var names = localStorage.getItem('Names');
    display(names)
})


var h1 = document.getElementsByTagName('h1');
h1[0].innerHTML = list_name;
var list_object = {
    fullname: '',
    data:'',
    status: ''
}
list_items.push(list_object)
localStorage.setItem(list_name, JSON.stringify(list_items))



// function that display the list table
function display(n){
    ul.style.display = "none";
        listItems =  `
            <tr>
                <td><a href="./List-APP/">${n}</a></td>
                <td><button onclick = "present()">Present</button></td>
                <td><button onclick="absencent()">Absencet</button></td>
            </tr>
        
        `
        // list_table_body.innerHTML = listItems;
        list_table_body.insertAdjacentHTML('beforeend', listItems);
}

function present(){
    alert('hello')
}
function absencent(){
    alert('hello')
}