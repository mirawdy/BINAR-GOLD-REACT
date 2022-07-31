import './SectionCarExplanation.css'
import Button from '../Button'
import {useNavigate} from 'react-router-dom'
import peopleIcon from '../../assets/people-logo.png'

function CarExplanation(props){
    let navigate = useNavigate();
    function kembali(){
        navigate(-1)}

    return(
        <>
        <div className="additional-bg"></div>
        <section className="section-carExplanation">
            <div className="persyaratan">
                <h1>Tentang Paket</h1>
                <h2>Include</h2>
                <ul>
                    <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                    <li>Sudah termasuk bensin selama 12 jam</li>
                    <li>Sudah termasuk Tiket Wisata</li>
                    <li>Sudah termasuk pajak</li>
                </ul>
                <h2>Exclude</h2>
                <ul>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                </ul>
                <h2>Refund, Reschedule, Overtime</h2>
                <ul>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                </ul>
                <div className="back-button"><Button text='Kembali Pilih Mobil' onClick={kembali}/></div>
                </div>
            <div className="data-mobil">
                <div className="car-img"><img src={props.carImage}/></div>
                <div className="car-information">
                    <h2>{props.carName}</h2>
                    <div className="jumlah-penumpang">
                        <div className="jumlah-penumpang-icon">
                        <img src={peopleIcon}/></div>
                        <div className="jumlah-penumpang-txt"><p>{props.carCategory}</p></div>
                </div>
                    <div className="total-harga">
                        <p>Total</p><p>{props.carPrice}</p>
                </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default CarExplanation;