import './Footer.css'
import Logo from '../../assets/logo.png'
import iconFacebook from '../../assets/icon_facebook.png'
import iconInstagram from '../../assets/icon_instagram.png'
import iconMail from '../../assets/icon_mail.png'
import iconTwitter from '../../assets/icon_twitter.png'
import iconTwitch from '../../assets/icon_twitch.png'
import {useNavigate} from 'react-router-dom'


function Footer(){
    let navigate = useNavigate()
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
        <footer className="footer-pg">
            <div className="footer-alamat">
                <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                <p>binarcarrental@gmail.com</p>
                <p>081-233-334-808</p>
            </div>
            <div className="footer-nav">
                <p onClick={scrollService}>Our services</p>
                <p onClick={scrollWhyus}>Why Us</p>
                <p onClick={scrollTestimonial}>Testimonials</p>
                <p onClick={scrollFaq}>FAQ</p>
            </div>
            <div className="footer-socmed">
                <p>Connect with us</p>
                <div className="logoSocmed">
                    <div><img src={iconFacebook}/></div>
                    <div><img src={iconInstagram}/></div>
                    <div><img src={iconMail}/></div>
                    <div><img src={iconTwitter}/></div>
                    <div><img src={iconTwitch}/></div>
                </div>
            </div>
            <div className="footer-copyright">
                <p>Copyright Binar 2022</p>
                <div className='logo-web'><img src={Logo} onClick={backHome}/></div>
            </div>
        </footer>
        </>
    )
}

export default Footer