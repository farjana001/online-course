import React from 'react';
import './Course.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHourglass, faStopwatch } from '@fortawesome/free-solid-svg-icons'


const Course = (props) => {
    const {name, picture, instructor, skills, duration, hours, price} = props.course;
    const handleAddPrice = props.handleAddPrice;
    // console.log(handleAddPrice);
    return (
        <div className='course-container'>

            <div><img className='img-fluid course-img' src={picture} alt=""/></div>
                <div className="course-details">
                    <h4>{name}</h4>
                    <ul className='skills'>
                        {
                            skills.map(skill => <li>{skill.get}</li>)
                        }
                    </ul>
                    <button onClick={() => handleAddPrice(props.course)} className='enroll-button'>Enroll now</button>
                </div>
                <div className='course-outline'>
                    <img src={instructor.img} alt=""/>
                    <h6>Instructor: {instructor.name}</h6>
                    <p><small><FontAwesomeIcon icon={faHourglass} /> Course Duration: {duration} weeks.<br/>
                    <FontAwesomeIcon icon={faStopwatch} /> {hours} hours per week.</small></p>
                    <p>Course Fee: <strong>${price}</strong></p>
                </div>
            </div>
    );
        
};

export default Course;

 