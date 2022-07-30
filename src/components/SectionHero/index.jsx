import './SectionHero.css'
import Button from '../../components/Button'
import HeroCar from '../../assets/img_car.png'
import {useNavigate} from "react-router-dom"

function Hero(){
    let navigate = useNavigate()

    function handleClick(){
        navigate('/cars')
    }

    return(
        <>
       <div className="banner">
        <div className="banner-text">
            <h1>Sewa & Rental Mobil Terbaik di Kawasan (Lokasimu)</h1>
            <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
            <Button text="Mulai Sewa Mobil" onClick={handleClick}/>
        </div>
        <div className="banner-img">
            <img src={HeroCar} alt="An image of black car"/>
        </div>
       </div>
    </>
    )
}

export default Hero;