import { Link } from 'react-router-dom'
import "./ProjectDetail.css"

function ProjectDetail({ project }) {
    return (
        <main className="container project-detail">

            <Link to="/projects" className="back-link">
                Back to Projects
            </Link>

            <div className="content-narrow">

                <h1> {project.title}</h1>

                <p className="project-summary text-secondary fw-bold"> {project.summary}</p>
                
                <div className="project-meta">
                    {project.tech.map((item) => (
                        <span key={item}>
                            {item}
                        </span>
                    ))}

                    {project.github && (
                        <a href={project.github} target="_blank" rel="norefferer">GitHub</a>
                    )}

                    {project.live && (
                        <a href={project.live} target="_blank" rel="noreferrer">Live Demo</a>
                    )}
                </div>

                {project.blocks.map((block, index) => {

                    if (block.type === "text") {
                        return (
                            <section key={index}>
                                <h3>
                                    {block.heading}
                                </h3>

                                <p>
                                    {block.body}
                                </p>
                            </section>
                        )
                    }

                    if (block.type === "image") {
                        return (
                            <figure
                                className="project-figure"
                                key={index}
                            >

                                <img
                                    src={block.src}
                                    alt={block.alt}
                                    className="project-image"
                                />
                                <figcaption className="text-secondary">
                                    {block.caption}
                                </figcaption>

                            </figure>
                        )
                    }

                    if (block.type === "iframe") {
                        return (
                            <iframe
                                src={block.src}
                                title={block.caption}
                                className="project-demo"
                            />
                        )
                    }

                    return null
                })}

            </div>

        </main>
    )
}

export default ProjectDetail