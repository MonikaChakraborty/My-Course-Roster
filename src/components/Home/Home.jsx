/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Home.css';
import dollar from '../../assets/images/dollar-sign 1.svg';
import frame from '../../assets/images/Frame.png'

const Home = () => {
    const [allCourses, setAllCourses] = useState([]);


    useEffect(() => {
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setAllCourses(data));
    }, []);

    console.log(allCourses);
    return (
        <div className='container'>
            <div className='home-container'>
                <div className='card-container'>
                   {
                    allCourses.map((course) => (
                        <div key={course.course_name} className='card'>
                        <img className='photo' src={course.image} alt="" />

                        <h3 className='card-title'>{course.course_name}</h3>

                        <p className='card-detail'>{course.details}</p>
                        <div className='card-footer'>
                            <div className='card-price'>
                            <img src={dollar} alt="" />
                            <h5>Price: {course.price}</h5>
                            </div>
                            <div className='card-credit'>
                            <img className='frame-photo' src={frame} alt="" />
                            <h5>Credit: {course.credit}hr</h5>
                            </div>
                        </div>
                        <button className='card-btn'>Select</button>
                    </div>
                    ))
                   }
                    
                </div>

                <div className="cart-container">
                    <h1>This is cart</h1>
                </div>

            </div>
        </div>
    );
};

export default Home;