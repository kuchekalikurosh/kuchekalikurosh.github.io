import ProjectCard from '../components/ProjectCard'

function Projects() {
    return (
        <main className="container page-section">
            <h1 className="mb-4">Projects</h1>
            <p className="mb-5 text-secondary">Collection of projects I've built, experimented with, or contributed to</p>

            <div className="row g-4">
                <div className="col-12 col-md-6 col-lg-4">
                    <ProjectCard
                        title="Portfolio Website"

                        description={`A personal portfolio built to learn React, document my work, 
                            and create a home for future projects. (You're on it right now!)`}

                        tech={["React", "Vite", "Bootstrap"]}

                        link="/projects/portfolio"
                    />
                </div>

                <div className="col-12 col-md-6 col-lg-4">
                    <ProjectCard
                        title="Geometry Wars"

                        description={'A small browser-based arcade game, my first step in game development'}

                        tech={["Javascript", "HTML", "CSS"]}
                        
                        link="/projects/geowar"
                    />
                </div>
            </div>
        </main>
    )
}

export default Projects