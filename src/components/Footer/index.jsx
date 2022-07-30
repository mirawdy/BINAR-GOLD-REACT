import './Footer.css'
import Logo from '../../assets/logo.png'
import iconFacebook from '../../assets/icon_facebook.png'
import iconInstagram from '../../assets/icon_instagram.png'
import iconMail from '../../assets/icon_mail.png'
import iconTwitter from '../../assets/icon_twitter.png'
import iconTwitch from '../../assets/icon_twitch.png'



function Footer(){
    return(
        <>
        <footer>
            <div className="footer-alamat">
                <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                <p>binarcarrental@gmail.com</p>
                <p>081-233-334-808</p>
            </div>
            <div className="footer-nav">
                <p>Our services</p>
                <p>Why Us</p>
                <p>Testimonials</p>
                <p>FAQ</p>
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
                <div><img src={Logo}/></div>
            </div>
        </footer>
        </>
    )
}

export default Footer