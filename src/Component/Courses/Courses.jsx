import { useEffect, useState } from "react";

const Courses = () => {

    // state for courses
    const [courses , setCourses] = useState([]);

    // Data load from data.json with useEffect
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])

    return (
       
       <div className="md:w-4/5 bg-red-400">
            <h3>Courses : {courses.length}</h3>
        
     
        </div>
    );
};

export default Courses;