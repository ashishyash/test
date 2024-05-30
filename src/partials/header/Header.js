import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom';
const Header = ()=> {
    return(
        <header className='header_wrapper'>
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <nav className="navigation">
                <ul>
                    <li> <Link to="/">Home</Link> </li>
                    <li> <Link to="about" >About Us</Link> </li>
                    <li>Products</li>
                    <li>Services</li>
                    <li>Contact Us</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;