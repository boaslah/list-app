var list_table_body = document.getElementById('table_body');
var list = JSON.parse(localStorage.getItem('List-Name'));
var date = new Date();
console.log(list)

for(count = 0; count< list.length; count++){
    var listItems =  `
    
        <tr>
            <td>${list[count]}</td>
            <td>${date.toDateString()}</td>
        <tr>
    
    `
}
list_table_body.insertAdjacentHTML('beforeend', listItems);



