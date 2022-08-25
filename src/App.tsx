import React from 'react'
import logo from './logo.svg'
import './App.css'

const variable: string = 'hello'

const data: any[] = [
  {
    company: 'Alfreds Futterkiste',
    contact: 'Maria Anders',
    country: 'Germany',
  },
  {
    company: 'Centro comercial Moctezuma',
    contact: 'Francisco Chang',
    country: 'Mexico',
  },
]

const App = () => {
  return (
    <div className="App container">
      <table>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
        {data.map(element => {
          return (
            <tr key={element.company}>
              <td>{element.company}</td>
              <td>{element.contact}</td>
              <td>{element.country}</td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export default App
