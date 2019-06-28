import 'bootstrap/dist/css/bootstrap.css'
import data from './data'


let thead = document.querySelector('.thead');
let tbody = document.querySelector('.tbody');
let titleHTML = ``;
let listHTML = ``;
let titles;

// front
if(data.length > 0) titles = Object.keys(data[0]);  

for(let j = 0; j < titles.length ; j++){
    titleHTML += `
    <th>${titles[j]}</th>
    `;
}

for(let i = 0, max = data.length; i < max ; i++){
    listHTML +=`
    <tr>
        <td>${data[i].id}</td>
        <td>${data[i].name}</td>
        <td>${data[i].username}</td>
        <td>${data[i].email}</td>
        <td>
            ${data[i].address.street}<br>
            ${data[i].address.suite}<br>
            ${data[i].address.city}<br>
            ${data[i].address.zipcode}
        </td>
        <td>${data[i].phone}</td>
        <td>${data[i].website}</td>
        <td>${data[i].company.name}</td>
    </tr>
    `;
}


thead.innerHTML = titleHTML;
tbody.innerHTML = listHTML;








  
// console.log(data)
