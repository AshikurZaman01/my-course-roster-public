import React from 'react';


const Course = ({ course , handleSelectCourse}) => {

  // get data from course data
  const { course_img, course_title, details, credit, price } = course;



  return (
    <div style={{ height: '400px' }}>
      <div className="card card-compact bg-base-100 shadow-xl p-4">
        <img className="w-full md:h-[150px] h-[200px] rounded" src={course_img} alt={course_title} />
        <div className="card-body">
          <div className="ml-[-15px] ">
            <h2 className="text-[16px] font-bold py-2  my-4">{course_title}</h2>
            <p className="text-justify">{details}</p> 
            <div className='ml-[-15px] flex justify-evenly  items-center' >
                <div><p>Price : {price} <strong>$</strong></p></div>
                <dir> <p>Credit : {credit}</p></dir>
               
            </div>
          </div>
          <div className="card-actions justify-end">
            <button onClick={()=> handleSelectCourse(course)}  className="btn w-full btn-primary">Select</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
