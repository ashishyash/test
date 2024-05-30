import logo from '../../assets/images/logo.png'
const Footer = ()=> {
    return(
        <footer className='footer_wrapper'>
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <nav className="navigation">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Products</li>
                    <li>Services</li>
                    <li>Contact Us</li>
                </ul>
            </nav>
        </footer>
    )
}
export default Footer;