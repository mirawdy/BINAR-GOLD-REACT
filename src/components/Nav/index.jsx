import './Navbar.css'
import Logo from '../../assets/logo.png'
//import { HashLink as Link } from 'react-router-hash-link';
import {useNavigate} from 'react-router-dom'


function Navigation(){
    let navigate = useNavigate();
    function scrollService(){
        const section = document.querySelector( '#ourservice' );
        section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
      }

    function scrollWhyus(){
        const section = document.querySelector( '#whyus' );
        section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
      }

      function scrollTestimonial(){
        const section = document.querySelector( '#testimonial' );
        section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
      }

      function scrollFaq(){
        const section = document.querySelector( '#faq' );
        section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
      }

      function backHome(){
        navigate(`/`)}


    return(
        <>
        <nav className="navdesktop">
        <div className="logo">
            <img src={Logo} alt="page logo" onClick={backHome}/>
        </div>    
        <div className="mainmenu">
                <li className="menu" onClick={scrollService}>Our Service</li>
                <li className="menu" onClick={scrollWhyus}>Why Us</li>
                <li className="menu" onClick={scrollTestimonial}>Testimonial</li>
                <li className="menu" onClick={scrollFaq}>FAQ</li>
        </div>
        </nav>
       </>
    )
}

export default Navigation;