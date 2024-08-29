import "./Graph.css";

function Graph() {
    const data = [
        { x: 0.3, y: 0.3, icon: 'https://www.pngitem.com/pimgs/m/76-762127_psychology-clipart-cognitive-multiple-intelligences-icon-png-transparent.png' },
        { x: 0.3, y: 0.5, icon: 'https://www.pngfind.com/pngs/m/273-2731133_png-file-product-and-service-icon-transparent-png.png' },
        { x: 0.77, y: 0.6, icon: 'https://i.pngimg.me/thumb/f/720/comdlpng6946857.jpg' },
        { x: 0.5, y: 0.8, icon: 'https://w7.pngwing.com/pngs/871/820/png-transparent-project-management-business-process-computer-icons-portfolio-management-process-cycle-plan-business-business-process-thumbnail.png' },
        { x: 0.1, y: 0.7, icon: 'https://previews.123rf.com/images/fokaspokas/fokaspokas1901/fokaspokas190100444/115138182-%C3%A9quipe-et-leader-travail-d-%C3%A9quipe-ic%C3%B4ne-de-l-entreprise-symbole-noir-sur-fond-transparent.jpg' },
        { x: 0.2, y: 0.3, icon: 'https://img.lovepik.com/free-png/20211211/lovepik-customer-service-post-icon-free-vector-png-image_401496162_wh1200.png' }
    ];

    return (
        <div className="graph-container" id="graph">

            <div className="axis-label x-axis">deine Rahmenbedingungen</div>
            <div className="axis-label y-axis">deine Lösungswege</div>
            <div className="help-icon top-left"></div>
            <div className="help-icon bottom-right"></div>
            <div className="help-icon bottom-left"></div>

            {/* Horizontal base line */}
            <div className="base-line"></div>

            {/* Vertical y-axis line */}
            <div className="vertical-line"></div>

            {/* Render the icons */}
            {data.map((point, index) => {
                let iconSize = 'medium';
                if (point.x < 0.3) {
                    iconSize = 'small';
                } else if (point.x >= 0.6) {
                    iconSize = 'large';
                }

                return (
                    <div
                        key={index}
                        className={`icon ${iconSize}`}
                        style={{
                            backgroundImage: `url(${point.icon})`,
                            left: `${point.x * 100}%`,
                            top: `${100 - point.y * 100}%`
                        }}
                    ></div>
                );
            })}
        </div>
    );
}

export default Graph;
