/* eslint-disable no-unused-vars */
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'

import './App.css'
import Home from './components/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='inter-font'>
     <h1>Course Registration</h1>
     <Home></Home>
     <ToastContainer/>
     </div>
    
      
    </>
  )
}

export default App
