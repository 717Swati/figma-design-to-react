import Product from './Product.jsx';
import "./Product.css";
import Button from './Button.jsx';

function Product1() {
    const newTitle = "Herzlich Willkommen zum Quick Check!";
    const option = (
        <>
            <p>Willkommen auf unserer Webseite! Als Führungskraft möchtest du sicherstellen, dass du den besten Ansatz für dein Team und dein Unternehmen wählst? Unser Führungsstil-Check unterstützt dich dabei, herauszufinden, welcher Führungsansatz für deine spezifische Situation am besten geeignet ist.</p>
            <p>In einer dynamischen und schnelllebigen Umgebung könnte ein agiler und flexibler Führungsstil der Schlüssel zum Erfolg sein. Dieser Ansatz betont Anpassungsfähigkeit und schnelle Reaktionen auf Veränderungen. Alternativ kann in einem stabilen und gut planbaren Umfeld ein traditioneller, auf Standardisierung und Optimierung ausgerichteter Führungsstil die besten Ergebnisse erzielen.</p>
            <p>Mit unserem Führungsstil-Check erhältst du eine klare Orientierung, welcher dieser Ansätze dir und deinem Team den größten Nutzen bringt. Wir stellen dir dazu verschiedene Aussagen vor, bei denen du intuitiv entscheiden kannst, welche dir mehr zusagen. Je nachdem, wie du die Schieberegler positionierst, wirst du herausfinden, ob ein agiler oder ein traditioneller Führungsstil für dich und dein Unternehmen besser geeignet ist.</p>
            <p>Und keine Sorge: Deine Antworten bleiben anonym und du allein entscheidest, wie du mit den Ergebnissen weiter verfährst. Es gibt kein „richtig“ oder „falsch“ – es geht darum, den Führungsstil zu finden, der am besten zu dir und deinem Umfeld passt. Schließlich sind wir davon überzeugt, dass der richtige Führungsansatz nicht nur dein Unternehmen voranbringt, sondern auch dazu beiträgt, dass du und dein Team euer volles Potenzial entfalten könnt.</p>
            <p>Starte jetzt und finde heraus, welcher Führungsstil der richtige für dich ist!</p>
        </>
    );

    return (
        <div className='ProductTab'>
            <Product title={newTitle} body={option}>

                <div className="button-container">
                    <Button navigateTo="/product2" />
                </div>
            </Product>
        </div>
    );
}

export default Product1;
