import React from 'react';
import './Course.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHourglass, faStopwatch } from '@fortawesome/free-solid-svg-icons'


const Course = (props) => {
    // receiving data through props
    const {name, picture, instructor, skills, duration, hours, price} = props.course;

    // receiving button handler data
    const handleAddPrice = props.handleAddPrice;
    
    // course content displaying
    return (
        <div className='course-container d-flex align-items-center'>
            <div>
                <img className='img-fluid course-img' src={picture} alt="course item image"/>
            </div>
            <div className="course-outline">
                <h4>{name}</h4>
                <ul>
                    {
                        skills.map(skill => <li>{skill.get}</li>)
                    }
                </ul>
                <button onClick={() => handleAddPrice(props.course)} className='enroll-button'>Enroll now</button>
            </div>
            <div className='course-details'>
                <img src={instructor.img} alt=""/>
                <h6>Instructor : {instructor.name}</h6>
                <p><small><FontAwesomeIcon icon={faHourglass} /> Course Duration : {duration} weeks.<br/>
                <FontAwesomeIcon icon={faStopwatch} /> {hours} hours per week.</small></p>
                <p>Course Fee : <span className='course-fee'><strong>${price}</strong></span></p>
            </div>
        </div>
    );
        
};

export default Course;

 