
const Carts = ({selectedCourses, remaining , totalPrice , totalHour}) => {
    
    return (
        
        
        <div className="md:w-1/3 mx-4 px-6 py-3 bg-slate-100 rounded md:mt-0  mt-[30px]" >
            <div>
                <div className="text-primary text-[18px] font-bold py-2">
                    
                    <h3>Credit Hour Remaining : {remaining}</h3><br />
                    <hr/>
                </div>
                
                <div><br />
                    <h3 className="font-bold">Course Name :</h3>
                </div><br /> 
                
                {/* course name */}
                <div>
                    <ul style={{ listStyleType: 'number', paddingLeft: '20px'}}>
                        {
                    selectedCourses.map(course=>(
                    <li key={course.id}>{course.course_title}</li>
                        ))
                        }
                    </ul>
                </div><br /><hr />
                {/* course name */}
                
                <br />
                <div>
                    <h3>Total Credit Hour : {totalHour}</h3><br /><hr />
                </div>
                <div><br />
                    <h3>Total Price :{totalPrice.toFixed(0)} USD</h3>
                    
                 </div>
                </div>
        </div>
    );
};

export default Carts;

