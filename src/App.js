import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import courseData from '../src/courseData/courseData';
import Course from './Components/Courses/Course';
import Price from './Components/Price/Price';

function App() {
  const [courses, setCourses] = useState(courseData);

  const [price, setPrice] = useState([]);

  const handleAddPrice = (course) => {
    const newPrice = [...price, course]
    setPrice(newPrice);
    // console.log('clicked', course );
  }
  

  return (
    <div className="App-header">
        <Header></Header>
      <div className="course-body d-flex">
        <div>
          {
            courses.map(course => <Course key={course.id} course={course} handleAddPrice={handleAddPrice}></Course>)
          }
        </div>
        <div className="">
        <Price price={price}></Price>
        </div>
      </div>
    </div>
  );
}

export default App;
