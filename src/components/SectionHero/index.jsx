import './SectionHero.css'
import Button from '../../components/Button'
import HeroCar from '../../assets/img_car.png'

function Hero(){
    return(
        <>
       <div className="banner">
        <div className="banner-text">
            <h1>Sewa & Rental Mobil Terbaik di Kawasan (Lokasimu)</h1>
            <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
            <Button text="Mulai Cari Mobil"/>
        </div>
        <div className="banner-img">
            <img src={HeroCar} alt="An image of black car"/>
        </div>
       </div>
    </>
    )
}

export default Hero;