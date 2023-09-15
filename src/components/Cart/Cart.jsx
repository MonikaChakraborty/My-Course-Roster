/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Cart.css';


const Cart = ({selectedCourses}) => {
    console.log(selectedCourses)
    return (
        <div className='cart'>
            <h4 className='cart-title'>Course Name:</h4>
            <ol>
                {
                    selectedCourses.map((course, index) => (
                        <li  className='ol-list' key={index}>{course.course_name}</li>
                    ))
                }
            </ol>

            <hr />
            <h4>Total Credit Hour: </h4>
        </div>
    );
};

export default Cart;