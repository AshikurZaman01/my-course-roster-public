import { useEffect, useState } from "react";
import Course from "../Course/Course";

const Courses = ({handleSelectCourse}) => {

    // state for courses
    const [courses , setCourses] = useState([]);

    // Data load from data.json with useEffect
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])

   
   

    return (
       
       <div className="md:w-4/5  grid lg:grid-cols-3 mx-auto md:grid-cols-2 gap-y-20 gap-x-6">
        {
            courses.map(course => <Course 
                                            key={course.id} 
                                            course={course}
                                            handleSelectCourse={handleSelectCourse}
                                            ></Course>)
        }        
            </div>
            
    );
};

export default Courses;