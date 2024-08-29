import Product from './Product.jsx';
import "./Product.css";
import Button from './Button.jsx';
import TabTitle from './TabTitle.jsx';
import AllSlider from './AllSlider.jsx';


function Product5() {
    const newTitle = "Dein ERGEBNIS";
    const option = "Asierend auf den Ergebnissen aus der vorherigen Seite möchten wir dir nun eine Interpretation der Positionierung deiner Kategorien auf der Matrix geben. Diese Interpretation hillt dir, die gewonnenen Erkenntnisse in konkrete Handlungsempfehlungen umzusetzen. Jede Kategorie wird dabei individuell betrachtet, um dir maßgeschneiderte Empfehlungen für deine nächste strategische Entscheidung zu geben.";

    return (
        <div className='ProductTab'>
            <Product page=" - Page 5" title={newTitle} body={option}>
                <div className='flex'>
                    <TabTitle />
                    <AllSlider />
                </div>

                <div className="footer4">
                    <Button customClass="blue-button" />
                </div>
            </Product>


        </div>
    );
}

export default Product5;
