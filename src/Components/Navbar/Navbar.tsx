import logo from '../../assets/black-bird-64.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <img src={logo} alt="Logo" />
            <ul className="nav-menu">
                <li>Home</li>
                <li>About Me</li>
                <li>Service</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
            <div className="nav-connect">Connect with me</div>
        </div>
    );
};

export default Navbar;