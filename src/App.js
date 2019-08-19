import React from 'react'
import { HashRouter as Router, Link } from 'react-router-dom'
import Main from './components/Main'
function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li>
            {' '}
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
        </ul>
        <Main />
      </Router>
    </div>
  )
}

export default App
