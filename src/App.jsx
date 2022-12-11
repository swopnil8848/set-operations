import { useState } from 'react'
import Factorial from './factorial';
import New from './New';
import SetOperations from './SetOperations';
// import reactLogo from './assets/react.svg'
// import './App.css'

function App() {
  

  return (
    <div className='bg-black h-screen'>
      <SetOperations/>
      <div className="factorial"><Factorial/></div>

    </div>
  )
}

export default App;
