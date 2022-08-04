import './NavBurger.css'
import Logo from '../../assets/logo.png'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function NavBurger(){
    let navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const handleOpenHamburg = () => {
      setOpen(!open);};    

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
        <nav className="navmobile">
        <div className="upper-bar">
        <div className="logoimg">
            <img src={Logo} alt="page logo"/>
        </div>
        <div className="burger-container">    
        <div className="burger-menu" onClick={handleOpenHamburg}>
            {open ? 'x' : '='} 
        </div></div>
        </div>
        {open && (
            <div className="lower-barcontainer">
                <div className='transparan-bg'>
                    <div></div>
                </div>
                <div className="lower-bar">
                <li className="menus" onClick={backHome}>Home</li>
                <li className="menus" onClick={scrollService}>Our Service</li>
                <li className="menus" onClick={scrollWhyus}>Why Us</li>
                <li className="menus" onClick={scrollTestimonial}>Testimonial</li>
                <li className="menus" onClick={scrollFaq}>FAQ</li>
        </div></div>)}
        </nav>
       </>
    )
}


export default NavBurger;