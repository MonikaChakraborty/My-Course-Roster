/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Cart.css';


const Cart = ({selectedCourses, totalCredit, remaining}) => {
    console.log(selectedCourses)
    return (
        <div className='cart'>
            <h4 className='credit-remaining-text'>Credit Hour Remaining {remaining} hr</h4>
            <hr />
            <h4 className='cart-title'>Course Name:</h4>
            <ol className='names'>
                {
                    selectedCourses.map((course, index) => (
                        <li  className='ol-list' key={index}>{course.course_name}</li>
                    ))
                }
            </ol>

            <hr />
            <h4 className='total-credit-text'>Total Credit Hour: {totalCredit}</h4>
            <hr />
        </div>
    );
};

export default Cart;