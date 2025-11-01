import "../../Navbar.css";
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <nav id="top-navbar">
                <Link to='/'>Home</Link>

                <Link to='/my-projects'>My Projects</Link>

                <Link to='/contact'>Contact</Link>
        </nav>
    )
};

export default Navbar;