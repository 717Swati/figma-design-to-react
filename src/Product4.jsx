import Product from './Product.jsx';
import "./Product.css";
import Button from './Button.jsx';
import TabTitle from './TabTitle.jsx';
import Graph from './Graph.jsx';



function Product4() {
    const newTitle = "Dein aktuelles BEDARFSPROFIL";
    const option = (
        <>
            <p>Herzlichen Glückwunsch, du hast alle Fragen beantwortet! Auf dieser Seite präsentieren wir dir nun die Ergebnisse deiner Analyse.</p>
            <p>Anhand deiner Antworten haben wir die Positionierung der einzelnen Kategorien auf einer Matrix visualisiert, die auf dem Prinzip der Stacey Matrix basiert.Diese Matrix hilft dir zu erkennen, in welchem Bereich deiner Organisation eher eine flexible, anpassungsfähige Vorgehensweise erforderlich ist und wo stabile, planbare Strukturen von Vorteil sind.</p>
            <p>Jede Kategorie wird auf der Matrix entsprechend ihrer Komplexität und Unsicherheit eingeordnet, sodass du einen klaren Überblick darüber erhältst, welcher Ansatz in welchem Bereich für dich am besten geeignet ist.</p>
            <p>Nutze diese Visualisierung, um gezielte Entscheidungen für deine nächste Strategie zu treffen!</p>
        </>
    );

    return (
        <div className='ProductTab'>
            <Product page=" - Page 4" title={newTitle} body={option}>
                <div className='parallel'>
                    <Graph />
                    <TabTitle />

                </div>

                <div className="footer4">
                    <Button customClass="blue-button" navigateTo="/product5" />
                </div>
            </Product>


        </div>
    );
}

export default Product4;
