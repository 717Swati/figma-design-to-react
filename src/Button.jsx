import React from 'react';
import "./Button.css";
import { useNavigate } from 'react-router-dom';

function Button({ navigateTo }) {  // Props should be destructured together
    const navigate = useNavigate();

    const handleClick = () => {
        if (navigateTo) {
            navigate(navigateTo);
        } else {
            console.error("No navigation path provided!");
        }
    };

    return (
        <button className="custom-button" onClick={handleClick}>
            Waiter
        </button>
    );
}

export default Button;
