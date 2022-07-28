import './Navbar.css'
import Logo from '../../assets/logo.png'

function Navigation(){
    return(
        <>
        <nav>
        <div className="logo">
            <img src={Logo} alt="page logo"/>
        </div>    
        <div className="mainmenu">
                <li className="menu">Our Service</li>
                <li className="menu">Why Us</li>
                <li className="menu">Testimonial</li>
                <li className="menu">FAQ</li>
        </div>
        </nav>
       </>
    )
}

export default Navigation;