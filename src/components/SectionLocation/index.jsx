import Button from '../Button';
import { useNavigate } from 'react-router-dom';
import './SectionLocation.css';

function Location(){
    let navigate = useNavigate()

    function handleClick(){
        navigate('/cars')
    }

    return(
        <>
        <section className="section-empat">
            <div className="containerLoc">
            <h2>Sewa Mobil di (Lokasimu) Sekarang</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p> 
            <p>Aliquid quasi voluptas eveniet.</p>
            <p></p>
            <Button text="Mulai Sewa Mobil" onClick={handleClick}/>
            </div>
        </section>
        </>
    )
}

export default Location;