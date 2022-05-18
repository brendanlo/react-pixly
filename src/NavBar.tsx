
import { Link, NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav className="nav Navigation navbar pixly">
            <div>
                <Link className="nav-link navbar-brand" to="/">
                    Pixly
                </Link>
                <div className="navbar-right">
                    <NavLink  className="nav-link" to="/photos">
                        Browse Photos
                    </NavLink>
                    <NavLink  className="nav-link" to="/photos/add">
                        Add Photos
                    </NavLink>
                    <NavLink  className="nav-link" to="/photos/search">
                        Search Photos
                    </NavLink>
                </div>
                
            </div>
        </nav>
    );
}

export default NavBar;