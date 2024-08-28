import Title from "./Title";
import "./TabTitle.css";


function TabTitle() {
    const tabs = [
        {
            logoLink: "https://previews.123rf.com/images/fokaspokas/fokaspokas1901/fokaspokas190100444/115138182-%C3%A9quipe-et-leader-travail-d-%C3%A9quipe-ic%C3%B4ne-de-l-entreprise-symbole-noir-sur-fond-transparent.jpg",
            tagline: "LEADERSHIP",
        },

        {
            logoLink: "https://img.lovepik.com/free-png/20211211/lovepik-customer-service-post-icon-free-vector-png-image_401496162_wh1200.png",
            tagline: "CUSTOMER",
        },
        {
            logoLink: "https://w7.pngwing.com/pngs/871/820/png-transparent-project-management-business-process-computer-icons-portfolio-management-process-cycle-plan-business-business-process-thumbnail.png",
            tagline: "PROCESS",
        },
        {
            logoLink: "https://i.pngimg.me/thumb/f/720/comdlpng6946857.jpg",
            tagline: "MARKET",
        },
        {
            logoLink: "https://www.pngfind.com/pngs/m/273-2731133_png-file-product-and-service-icon-transparent-png.png",
            tagline: "PRODUCT",
        },
        {
            logoLink: "https://www.pngitem.com/pimgs/m/76-762127_psychology-clipart-cognitive-multiple-intelligences-icon-png-transparent.png",
            tagline: "KNOWHOM",
        },
    ];

    return (
        <div className="tabtitle">
            {tabs.map((tab, index) => (
                <div key={index}>
                    <Title link={tab.logoLink} tag={tab.tagline} className="title" />
                </div>
            ))}
        </div>
    );
}

export default TabTitle;