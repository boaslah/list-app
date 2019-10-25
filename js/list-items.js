// declearations of variables 
var list_table_body = document.getElementById('table_body');
var list_name = getItem('List-Title');
var team_members = getItem('Members');
var ul = document.getElementById('ul');
var table = document.getElementById('table');
var date = new Date();
var button_id;
var list_items = getItem('List-Items');
var li_textnode;
var listItems;
var list_data = []

// creat the text content for h1 element 
var h1 = document.getElementById('h1tag');
h1.innerHTML = list_name;

// function to get local storage item
function getItem(key){
    return JSON.parse(localStorage.getItem(key))
}

// function to set local storage item
function setItem(key, value){
    return JSON.stringify(localStorage.setItem(key, value))
}

display(team_members)

// funtion to add members status to a list item
function addDataToList(){
    for(count = 0; count<team_members.length; count ++){
        var list_object = {
            fullname: team_members[count].full_name ,
            date:[],
            status: []
        }
        list_data.push(list_object)
    }
    localStorage.setItem(list_name, JSON.stringify(list_data))
}

// function that display the data in each list 
function display(members){
    addDataToList()
    for(count = 0; count <members.length; count++){
        listItems =  `
        <tr>
            <td>${members[count].full_name}</td>
            <td><button id="${count}" class = "presentbutton">Present</button></td>
            <td><button id ="${count}" class = "absentbutton">Absent</button></td>
        </tr>
    
    `
        // list_table_body.innerHTML = listItems;
        list_table_body.insertAdjacentHTML('beforeend', listItems);
    }
}

// function to edit member status to present
var present_buttons = document.querySelectorAll('button.presentbutton')
present_buttons.forEach(button => {
    button.addEventListener('click', function(event){
        button_id = event.target.id;
        var list_data = getItem(list_name)
        list_data[button_id].status.push('Present');
        list_data[button_id].date.push(date.toDateString());
        localStorage.setItem(list_name, JSON.stringify(list_data))
    })
})

// function to edit member status to present
var absent_buttons = document.querySelectorAll('button.absentbutton')
absent_buttons.forEach(button => {
    button.addEventListener('click', function(event){
        button_id = event.target.id;
        var list_data = getItem(list_name)
        list_data[button_id].status.push('Absent');
        list_data[button_id].date.push(date.toDateString());
        localStorage.setItem(list_name, JSON.stringify(list_data))
    })
})