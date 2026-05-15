import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import ProjectDetail from "../components/ProjectDetail";

function ProjectPage() {

    const { slug } = useParams()

    const project = projects.find(
        (p) => p.slug == slug
    )

    if (!project) {
        return (
            <main className="container page-section">
                <h1>Project not found.</h1>
            </main>
        )
    }

    return <ProjectDetail project={project} />
}

export default ProjectPage