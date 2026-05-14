import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"
import "./navbar.css"

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg custom-navbar shadow-sm">

            <div className="container d-flex align-items-center gap-4">
                {/* Brand */}
                <Link className="navbar-brand custom-brand fw-bold" to="/">Kurops</Link>

                <ul className="navbar-nav d-flex flex-row gap-3 mb-0">
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => isActive ? "nav-link custom-link active-link" : "nav-link custom-link"} to="/" end>Home</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar