import React, { useState, useRef, useEffect } from 'react';
import ig from './assets/ig.jpg';
import './Top.css';

function Top() {
    const [rating, setRating] = useState(5); // Initial rating
    const sliderRef = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;
        const handleInput = () => {
            setRating(slider.value);
        };

        slider.addEventListener('input', handleInput);

        // Cleanup event listener on component unmount
        return () => {
            slider.removeEventListener('input', handleInput);
        };
    }, []);

    return (
        <div className='top'>
            <img src={ig} alt="img" />

            <div className="slider-container">
                <input
                    type="range"
                    min="1"
                    max="10"
                    defaultValue="5"
                    className="slider"
                    ref={sliderRef}
                />
                <div className="slider-marks">
                    {[...Array(10)].map((_, i) => (
                        <span key={i}></span>
                    ))}
                </div>
            </div>
            <img src={ig} alt="img" />
        </div>
    );
}

export default Top;
