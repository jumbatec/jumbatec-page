import { Link } from "react-router-dom";

const ProjectCard = ({img,title,btnname,url}) => {
    return (
        <div className="project-card style1">
        <div className="project-thumb">
            <img src={img} alt={title} />
        </div>
        <div className="project-content">
            <h3>
                <Link to={url || "/contact"}>{title}</Link>
            </h3>
            <p className="text">{btnname}</p>
        </div>
    </div>
    );
};

export default ProjectCard;
