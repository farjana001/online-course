import React from 'react';
import { useState } from 'react';
import courseData from '../../courseData/courseData';
import Course from '../Courses/Course';
import Price from '../Price/Price';
import './Main.css'

const Main = () => {
    // importing data
    const [courses, setCourses] = useState(courseData);
    const [price, setPrice] = useState([]);

    // button handler function
    const handleAddPrice = (course) => {
      const newPrice = [...price, course]
      setPrice(newPrice);
    }
    
    return (
        <div className='d-flex'>
            <div className='course-body'>
                {
                    courses.map(course => <Course key={course.id} course={course} handleAddPrice={handleAddPrice}></Course>)
                }
            </div>
            <div>
                <Price price={price}></Price>
            </div>
        </div>
    );
};

export default Main;