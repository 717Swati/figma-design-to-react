import React from "react";
import "./Product.css";
import Title from "./Title";
import Description from "./Description";
import myImage from './assets/logo.jpg';

function Product({ page, title, body, children }) {
    const tagline = "Welcher Ansatz könnte hilfreich sein?";

    return (
        <div className="main">
            <div className="head">AGILE vs. CLASSIC {page}</div>
            <div className="product">
                <Title link={myImage} tag={tagline} />

                <hr className="custom-line" />

                <div className="description">
                    <Description title={title} body={body} />
                    {/* Render additional content, like tabs */}
                    {children}
                </div>

            </div>
        </div>
    );
}

export default Product;
