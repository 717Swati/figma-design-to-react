import React, { useState } from 'react';
import Product from './Product.jsx';
import './Product.css';
import Button from './Button.jsx';
import Top from './Top.jsx';

function Product3() {
    const [checkedIndexes, setCheckedIndexes] = useState([]);

    const handleCheckboxChange = (index) => {
        setCheckedIndexes((prev) =>
            prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
        );
    };

    const newTitle = "Unsere FRAGEN";
    const option = "Welcher dieser Situationen beschreibt aktuell deine Anforderungen";

    // Define the text that will be used in each box

    // Number of boxes you want to render
    const numberOfBoxes = 3;

    return (
        <div className='ProductTab'>
            <Product page=" - Page 3 " title={newTitle} body={option}>

                <div className="box">
                    {Array.from({ length: numberOfBoxes }, (_, index) => (
                        <div key={index} className={`box-item ${checkedIndexes.includes(index) ? 'checked' : ''}`}>
                            <Top />
                            <pre>Here comes the text of the question Here comes the text of the question Here comes the text of the question<br />
                                Here comes the text of the question Here comes the text of the question Here comes the text of the question<br />
                                Here comes the text of the question Here comes the text of the question Here comes the text of the question<br />
                            </pre>
                            <div className="checkbox">
                                <input
                                    type="checkbox"
                                    id={`checkbox-${index}`}
                                    checked={checkedIndexes.includes(index)}
                                    onChange={() => handleCheckboxChange(index)}
                                />
                                <label htmlFor={`checkbox-${index}`}>aktuell nicht relevant - überspringen</label>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="footer4">
                    <Button customClass="blue-button" navigateTo="/product4" />
                </div>
            </Product>
        </div>
    );
}

export default Product3;
