import React from 'react';
import Course from './course';

// Challenge
let coursesArray = num => {
    let courses = [];
  
    for (let i = 0; i < num; i++) {
      courses.push(<Course courseNum={i} />);
    }
    return courses;
};


const Student = props => {
    return  <p>Student <b>{props.name}</b> with student <b>{props.number}</b>
                <br/>
                Student is enrolled in the following courses: <b>{coursesArray(props.enrolled)}</b>
            </p>;
};
 
export default Student;