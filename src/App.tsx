// import { useState } from 'react'
import './App.css'
import Formikform from './Components/Formikform'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='w-10/12 lg:w-[48rem] m-auto'>
      <h1 className='text-5xl m-8'>This Is Form</h1>
      <Formikform/>
    </div>
  )
}

export default App
