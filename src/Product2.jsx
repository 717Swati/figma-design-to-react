import React from "react";
import { useState } from "react";
import Product from "./Product.jsx";
import Title from "./Title.jsx";
import Button from "./Button.jsx";
import "./Product.css";

function Product2() {
    const [checkedIndexes, setCheckedIndexes] = useState([]);

    const handleCheckboxChange = (index) => {
        setCheckedIndexes((prev) =>
            prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
        );
    };

    const newTitle = "Unsere KATEGORIEN";
    const body = "Auf dieser Seite möchten wir dir die Kategorien vorstellen, die wir nutzen, um zu überprüfen, welcher Ansatz in deinem spezifischen Kontext und unter den aktuellen Rahmenbedingungen am besten passt. Jede dieser Kategorien spielt eine wesentliche Rolle, um die Anforderungen und Herausforderungen deines Unternehmens präzise zu erfassen.";

    const tabs = [
        {
            logoLink: "https://previews.123rf.com/images/fokaspokas/fokaspokas1901/fokaspokas190100444/115138182-%C3%A9quipe-et-leader-travail-d-%C3%A9quipe-ic%C3%B4ne-de-l-entreprise-symbole-noir-sur-fond-transparent.jpg",
            tagline: "LEADERSHIP",
            content: "In der Kategorie „Leadership betrachten wir die Art und Weise, wie Führung in deinem Unternehmen gestaltet wird. Dabei geht es um die Struktur und Ausrichtung der Führung, die Arbeitsweisen, die Kommunikation im Team sowie die Entscheidungskompetenzen. Diese Kategorie hilft dir zu verstehen, welche Führungspraktiken in deinem Umfeld am besten wirken.",
        },
        {
            logoLink: "https://w7.pngwing.com/pngs/871/820/png-transparent-project-management-business-process-computer-icons-portfolio-management-process-cycle-plan-business-business-process-thumbnail.png",
            tagline: "PROCESS",
            content: "Die Kategorie Process befasst sich mit den internen Abläufen und Strukturen deines Unternehmens. Hier geht es darum, wie Prozesse gestaltet, koordiniert und optimiert werden. Es wird geprüft, ob die bestehenden Abläufe den Anforderungen deines Unternehmens gerecht werden und wie sie weiterentwickelt werden können.",
        },
        {
            logoLink: "https://img.lovepik.com/free-png/20211211/lovepik-customer-service-post-icon-free-vector-png-image_401496162_wh1200.png",
            tagline: "CUSTOMER",
            content: "In dieser Kategorie liegt der Fokus auf deinen Kunden und deren Bedürfnisse. Hier wird untersucht, wie gut dein Unternehmen auf die Wünsche und Erwartungen der Kunden eingeht und wie Kundenorientierung in der täglichen Arbeit verankert ist.",
        },
        {
            logoLink: "https://i.pngimg.me/thumb/f/720/comdlpng6946857.jpg",
            tagline: "MARKET",
            content: "Die Kategorie Market analysiert das Marktumfeld, in dem dein Unternehmen tätig ist. Es geht darum, die Marktbedingungen, die Wettbewerbssituation sowie die wirtschaftlichen Rahmenbedingungen zu verstehen. Diese Kategorie hilft dabei, die Anforderungen des Marktes richtig einzuordnen.",
        },
        {
            logoLink: "https://www.pngfind.com/pngs/m/273-2731133_png-file-product-and-service-icon-transparent-png.png",
            tagline: "PRODUCT",
            content: "In der Kategorie „Product steht die Produkt- oder Dienstleistungsentwicklung im Mittelpunkt. Hier betrachten wir, wie Produkte entworfen, entwickelt und auf den Markt gebracht werden. Es wird analysiert, wie gut deine Produkte den Bedürfnissen des Marktes entsprechen und welche Innovationskraft dein Unternehmen besitzt.",
        },
        {
            logoLink: "https://www.pngitem.com/pimgs/m/76-762127_psychology-clipart-cognitive-multiple-intelligences-icon-png-transparent.png",
            tagline: "COMPETITION",
            content: "Diese Kategorie beschäftigt sich mit dem Wissen und den Kompetenzen innerhalb deines Unternehmens. Es wird geprüft, wie Wissen generiert, genutzt und weitergegeben wird. Dabei wird auch die Fähigkeit deines Unternehmens betrachtet, neues Wissen aufzunehmen und bestehende Kompetenzen zu erweitern.",
        },
    ];

    return (
        <div className="ProductTab">
            <Product page=" - Page 2" title={newTitle} body={body}>

                <div className="tabs">
                    {tabs.map((tab, index) => (

                        <div key={index} className={`tab ${checkedIndexes.includes(index) ? 'checked' : ''}`}>

                            <Title link={tab.logoLink} tag={tab.tagline} />
                            <p>{tab.content}</p>

                            <div className="checkbox-container">
                                <input
                                    type="checkbox"
                                    id={`checkbox-${index}`}
                                    checked={checkedIndexes.includes(index)}
                                    onChange={() => handleCheckboxChange(index)}
                                />
                                <label htmlFor={`checkbox-${index}`}>auswählen</label>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="footer">
                    <div className="footer-text">Dir werden aktuell <b>46 Fragen</b> zu diesem Thema gestellt</div>
                    <Button navigateTo="/product3" />
                </div>

            </Product>
        </div>
    );
}

export default Product2;
