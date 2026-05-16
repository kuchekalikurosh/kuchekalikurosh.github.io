import ProjectCard from '../components/ProjectCard'
import { projects } from "../data/projects";

function Projects() {
    return (
        <main className="container page-section">
            <h1 className="mb-4">Projects</h1>
            <p className="mb-5 text-secondary">Collection of projects I've built, experimented with, or contributed to</p>

            <div className="row g-4">
                <div className="col-12 col-md-6 col-lg-4">
                    <ProjectCard
                        title="Portfolio Website"

                        date="May 2026"

                        description={`A personal portfolio built to learn React, document my work, 
                            and create a home for future projects. (You're on it right now!)`}

                        tech={["React", "Vite", "Bootstrap"]}

                        link="/projects/portfolio"
                    />
                </div>

                <div className="col-12 col-md-6 col-lg-4">
                    <ProjectCard
                        title="Geometry Wars"

                        description={'A small browser-based arcade game, my first step in game development.'}

                        date="Sept 2024"

                        tech={["Javascript", "HTML", "CSS"]}
                        
                        link="/projects/geowar"
                    />
                </div>

                <div className="col-12 col-md-6 col-lg-4">
                    <ProjectCard
                        title="Student Discussion Application"

                        description={'A full-stack student discussion app featuring different user roles, admin panel, and replies.'}

                        date="April 2025"

                        tech={["Java", "JavaFX", "SQLite"]}
                        
                        link="/projects/discussionapp"
                    />
                </div>

                <div className="col-12 col-md-6 col-lg-4">
                    <ProjectCard
                        title="USB Bus Simulation"

                        description={'Linux kernel module that simulated block-level USB storage I/O operations using the Linux BIO and ioctl interfaces.'}

                        date="June 2025"

                        tech={["C", "Linux",]}
                        
                        link="/projects/usbsim"
                    />
                </div>
            </div>
        </main>
    )
}

export default Projects