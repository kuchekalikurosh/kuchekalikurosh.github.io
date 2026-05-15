function ProjectDetail({ project }) {
    return (
        <main className="container page-section">

            <div className="content-narrow">

                <h1 className="mb-3"> {project.title}</h1>

                <p className="text-secondary mb-5"> {project.summary}</p>

                <div className="tech-list mb-5">
                    {project.tech.map((item) => (
                        <span key={item}>
                            {item}
                        </span>
                    ))}
                </div>

                {project.blocks.map((block, index) => {

                    if (block.type === "text") {
                        return (
                            <section className="mb-5" key={index}>
                                <h2 className="mb-3">
                                    {block.heading}
                                </h2>

                                <p>
                                    {block.body}
                                </p>
                            </section>
                        )
                    }

                    if (block.type === "image") {
                        return (
                            <figure
                                className="project-figure my-5"
                                key={index}
                            >

                                <img
                                    src={block.src}
                                    alt={block.alt}
                                    className="project-image"
                                />
                                <figcaption className="text-secondary mt-2">
                                    {block.caption}
                                </figcaption>

                            </figure>
                        )
                    }

                    return null
                })}

            </div>

        </main>
    )
}

export default ProjectDetail