import { useState } from 'react'
import New from './New';
import SetOperations from './SetOperations';
// import Factorial from './factorial';
import CeliFloor from './CeliFloor';
import Last from './Last';
import Cross from './Cross';
// import reactLogo from './assets/react.svg'
// import './App.css'

// celiFloor = document.getElementsByClassName('cleliFLoor');
function App() {
  const scrollToTop = () =>{
    window.scrollTo({
        top: 0,
        behavior:"smooth"
    })
}
  

  return (
    <div className='bg-black h-screen'>
      <SetOperations/>
      {/* <Factorial/> */}
      {/* <div className='celiFloor'><CeliFloor/></div> */}
      {/* <div className='last'><Last/></div> */}
      {/* <div className='corss'><Cross/></div> */}

    </div>
  )
}

export default App;
