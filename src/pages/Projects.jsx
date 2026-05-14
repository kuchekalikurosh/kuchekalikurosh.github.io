import ProjectCard from '../components/ProjectCard'

function Projects() {
    return (
        <main className="container page-section">
            <h1 className="mb-4">Projects</h1>
            <p className="mb-5 text-secondary">Collection of projects I've built, experimented with, or contributed to</p>

            <div className="row g-4">
                <div className="col md-6">
                    <ProjectCard
                        title="Portfolio Website"

                        description={`A personal portfolio website built with React, Vite, Bootstrap, and GitHub pages.
                        Originally created as an opportunity to learn React and modern frontend workflows,
                        this site gradually evolved into a personal space for showcasing projects,
                        ideas, and technical growth. This site is an ongoing project that I plan to continue refining as I grow
                        as a developer and learn new technologies.`}

                        tech={["React", "Vite", "Bootstrap"]}

                        link="/projects/portfolio"
                    />
                </div>
            </div>
        </main>
    )
}

export default Projects