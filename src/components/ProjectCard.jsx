import { Link } from "react-router-dom"
import "./ProjectCard.css"

function ProjectCard({ title, description, tech, link, date }) {
    return (
        <Link to={link} className="project-card">
            <h2>{title}</h2>
            <p>{description}</p>
            <p className="project-date">{date}</p>
            <div className="tech-list">
                {tech.map((item) => (
                    <span key={item}>{item}</span>
                ))}
            </div>
        </Link>
    )
}

export default ProjectCard