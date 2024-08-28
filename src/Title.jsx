import "./Title.css";


function Title({ link, tag }) {
    return (
        <div className="title">
            <img src={link} alt="logo" height={60} width={60} className="img" />
            <p className="para">{tag}</p>
        </div>
    );
}

export default Title;
