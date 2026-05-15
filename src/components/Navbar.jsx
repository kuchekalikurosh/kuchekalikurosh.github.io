import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"
import "./navbar.css"

function Navbar() {
    return (
        <nav className="custom-navbar">
            <div className="container navbar-content px-4">
                {/* Brand */}
                <Link className="navbar-brand custom-brand fw-bold" to="/">Kurops</Link>

                <div className="navbar-links">
                    <NavLink to="/" end className={({ isActive }) => isActive ? "navbar-link active-link" : "navbar-link"}>Home</NavLink>
                    <NavLink to="/projects" className={({ isActive }) => isActive ? "navbar-link active-link" : "navbar-link"}>Projects</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar