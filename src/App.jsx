import './App.css'

import { Outlet } from "react-router-dom"
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='App'>
      <aside>
        <Navbar />
      </aside>
      <div className='main-container'>
        <Outlet />
      </div>
    </div>
  )
}

export default App
