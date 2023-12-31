/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import {toast} from 'react-toastify';

import React, { useEffect, useState } from 'react';
import './Home.css';
import dollar from '../../assets/images/dollar-sign 1.svg';
import frame from '../../assets/images/Frame.png'
import Cart from '../Cart/Cart';

const Home = () => {
    const [allCourses, setAllCourses] = useState([]);
    const [selectedCourses, setSelectedCourses] = useState([]);
    const [totalCredit, setTotalCredit] = useState(0);
    const [remaining, setRemaining] = useState(20);


    useEffect(() => {
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setAllCourses(data));
    }, []);

    const handleSelectCourse = (course) => {
        // console.log(...selectedCourses)
        const isExist = selectedCourses.find(item => item.course_name == course.course_name);

        let count = course.credit;
       
        if(isExist){
            return toast.warning('This course is already in your selection', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 3000,
              });
        }else{
            
            selectedCourses.forEach(item => {
                count = count + item.credit;
            })
            // console.log(count);
            const creditRemaining = 20-count;

            if (count > 20) {
                return toast.error('Credit limit can not exceed 20 hours', {
                  position: toast.POSITION.TOP_CENTER,
                  autoClose: 2000,
                });
              }
            setTotalCredit(count);
            setRemaining(creditRemaining);
            setSelectedCourses([...selectedCourses, course]);
        }
        
    }

    console.log(allCourses);
    // console.log(selectedCourses);
    return (
        <div className='container'>
            <div className='home-container'>
                <div className='card-container'>
                   {
                    allCourses.map((course) => (
                        <div key={course.course_name} className='card'>
                        <img className='card-image' src={course.image} alt="" />

                        <h3 className='card-title'>{course.course_name}</h3>

                        <p className='card-detail'>{course.details}</p>
                        <div className='card-footer'>
                            <div className='card-price'>
                            <img src={dollar} alt="" />
                            <h5>Price: {course.price}</h5>
                            </div>
                            <div className='card-credit'>
                            <img src={frame} alt="" />
                            <h5>Credit: {course.credit}hr</h5>
                            </div>
                        </div>
                        <button onClick={() => handleSelectCourse(course)} className='card-btn'>Select</button>
                    </div>
                    ))
                   }
                    
                </div>

                <div className="cart-container">
                    <Cart selectedCourses={selectedCourses} totalCredit={totalCredit} remaining={remaining}></Cart>
                </div>

            </div>
        </div>
    );
};

export default Home;