import { Link } from "react-router-dom"
import "./ProjectCard.css"

function ProjectCard({ title, description, tech, link }) {
    return (
        <Link to={link} className="project-card">
            <h2>{title}</h2>
            <p>{description}</p>

            <div className="tech-list">
                {tech.map((item) => (
                    <span key={item}>{item}</span>
                ))}
            </div>
        </Link>
    )
}

export default ProjectCard