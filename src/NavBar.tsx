
import { Link, NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav className="Navigation navbar pixly">
            <div>
                <Link to="/">
                    Pixly    
                </Link>
                <NavLink to="/photos">
                    Browse Photos    
                </NavLink>
                <NavLink to="/photos/add">
                    Add Photos    
                </NavLink>
                <NavLink to="/photos/search">
                    Search Photos    
                </NavLink>
            </div>    
        </nav>
    );
}

export default NavBar;