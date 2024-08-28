import "./Description.css";
function Description({ title, body }) {
    return (
        <div className="body" >
            <h2>{title}</h2>
            <p>{body}</p>
            {/* <div className="button">
                weiter
            </div> */}
        </div>
    );
}

export default Description;