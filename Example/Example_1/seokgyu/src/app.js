import 'bootstrap/dist/css/bootstrap.css'
import { tableTitle, contents } from './table'

const App = `
    <div class="container"><div class="w-100 bg-white rounded shadow-sm">
    <table class="table">
        <thead>
            <tr>
            ${tableTitle}
            </tr>
        </thead>
        <tbody>
            ${contents}
        </tbody>
    </table>
    </div></div>
`

document.getElementById('app').innerHTML = App;