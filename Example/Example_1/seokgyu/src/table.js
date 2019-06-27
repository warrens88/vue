import data from './data'

console.log(data)
const title = Object.keys(data[0]);

const tableTitle = title.map(val => {
    return `
            <th>${val}</th>
    `
}).join('');

const contents = data.map(val => {
    return `
        <tr>
            <td>${val.id}</td>
            <td>${val.name}</td>
            <td>${val.username}</td>
            <td>${val.email}</td>
            <td>${Object.values(val.address)}</td>
            <td>${val.phone}</td>
            <td>${val.website}</td>
            <td>${val.company.name}</td>
        </tr>
    `
}).join('')

export { tableTitle, contents }