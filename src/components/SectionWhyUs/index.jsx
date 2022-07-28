import iconComplete from '../../assets/icon_complete.png';
import iconPrice from '../../assets/icon_price.png';
import icon24Hours from '../../assets/icon_24hrs.png';
import iconProfessional from '../../assets/icon_professional.png';
import './SectionWhyUs.css';

function WhyUs(){
    return(
        <>
        <section className="section-dua">
        <div className="section-dua-title">
            <h2>
                Why Us?
            </h2>
            <p>
                Mengapa harus pilih Binar Car Rental?
            </p>
        </div>
        <div className="section-dua-card">
            <div className="cards">
                <div>
                    <img src={iconComplete}/></div>
                <h3>Mobil Lengkap</h3>
                <p>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
            </div>
            <div className="cards">
                <div><img src={iconPrice}/></div>
                <h3>Harga Murah</h3>
                <p>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
            </div>
            <div className="cards">
                <div><img src={icon24Hours}/></div>
                <h3>Layanan 24 Jam</h3>
                <p>Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
            </div>
            <div className="cards">
                <div><img src={iconProfessional}/></div>
                <h3>Sopir Profesional</h3>
                <p>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
            </div>
        </div>
    </section>
    </>
    )
}

export default WhyUs;