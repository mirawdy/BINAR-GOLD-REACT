import './SectionService.css'
import imgService from '../../assets/img_service.png'

function Service(){
    return(
        <>
    <section className="section-satu" id="ourservice">
        <div className="section-satu-img">
        <img src={imgService} alt="image of a woman smiling"/></div>

        <div className="section-satu-txt">
            <h2>Best Car Rental for any kind of trip in (Lokasimu)!</h2>
            <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
            <ul className="section-satu-txt-points">
                <li><span className="checklist">&#x2714;</span> <span>    Sewa Mobil Dengan Supir di Bali 12 Jam</span></li>
                <li><span className="checklist">&#x2714;</span> <span>   Sewa Mobil Lepas Kunci di Bali 24 Jam</span></li>
                <li><span className="checklist">&#x2714;</span> <span>   Sewa Mobil Jangka Panjang Bulanan</span></li>
                <li><span className="checklist">&#x2714;</span> <span>   Gratis Antar - Jemput Mobil di Bandara</span></li>
                <li><span className="checklist">&#x2714;</span> <span>   Layanan Airport Transfer / Drop In Out</span></li>
            </ul>
        </div>
    </section>
    </>
    )
}

export default Service;