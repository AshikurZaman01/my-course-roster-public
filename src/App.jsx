import { useState } from 'react'
import './App.css'
import Header from './Component/Header/Header'
import Courses from './Component/Courses/Courses'
import Carts from './Component/Carts/Carts'

function App() {

  const [selectedCourses , setSelectedCourses] = useState([]);
  const [remaining , setRemaining] = useState(0);
  const [totalPrice , setTotalPrice] = useState(0);
  const [totalHour , setTotalHour] = useState(0);


  const handleSelectCourse = (course)=>
  {
    let price = course.price;
    let totalHour = course.credit;

    const isExists = selectedCourses.find((item) => item.id == course.id);
    if(isExists)
    {
      alert('Already Added');
    }
    else{
        selectedCourses.forEach(item=>{
          totalHour = totalHour + item.credit;
        })
        
        // remaining hour
        const remainHour = 20 -totalHour;
        if(totalHour > 20)
        {
          alert('Remaining Hour is Finished');
        }
        else{
          setRemaining(remainHour);setTotalHour(totalHour);
          const newCourse = [...selectedCourses , course];
          setSelectedCourses(newCourse);
        }
        // remaining hour
        
        // price 
        selectedCourses.forEach(item =>
          {
            price = (price + item.price);
          })
            setTotalPrice(price);
        // price 
    }
  }

  return (
    <>
    <div className='w-11/12 mx-auto'>
     
     {/* header section */} 
      <Header></Header>
     {/* header section end*/}

     {/* main section */}
      <div className='md:flex w-full mx-auto gap-4 rounded'>
     
     {/* Course section */}
          <Courses handleSelectCourse={handleSelectCourse}></Courses>
     {/* Course section end*/}

     {/* Cart section */}
       <Carts selectedCourses={selectedCourses} remaining={remaining} totalPrice={totalPrice} totalHour = {totalHour}></Carts>
     {/* Cart section end*/}
      </div>
     {/* main section end*/}

    </div>
      
    </>
  )
}
export default App
