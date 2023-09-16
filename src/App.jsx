import { useState } from 'react'
import './App.css'
import Header from './Component/Header/Header'
import Courses from './Component/Courses/Courses'
import Cart from './Component/Cart/Cart'

function App() {

  return (
    <>
    <div className='w-4/5 mx-auto'>
     
     {/* header section */} 
      <Header></Header>
     {/* header section end*/}

     {/* main section */}
      <div className='md:flex w-full mx-auto gap-4 rounded'>
     
     {/* Course section */}
          <Courses></Courses>
     {/* Course section end*/}

     {/* Cart section */}
       <Cart></Cart>
     {/* Cart section end*/}
      </div>
     {/* main section end*/}

    </div>
      
    </>
  )
}

export default App
