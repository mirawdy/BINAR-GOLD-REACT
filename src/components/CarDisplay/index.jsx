import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Button from '../Button'
import './CarDisplay.css'
const URL = "https://bootcamp-rent-car.herokuapp.com/admin/car";

function CarDisplay(){
    const [cars, setCars] = useState([]);
    let navigate = useNavigate();

    async function getData(){
        try{
            const res = await window.fetch(URL);
            const carsData = await res.json();
            setCars(carsData)}
        catch(e){console.log(e)}}

    useEffect(() =>{getData()}, []);

    function klikDetail(id){navigate(`/cars/${id}`)}

    return(
        <>
        <section className='section-carDisplay'>
        <h1>Pilihan Mobil yang Tersedia</h1>
        <div className="cards-container">
        <ul className="looping-car">
            {cars.map(mobil=> (
                <li  className="carCard" key={mobil.id}>
                    <div className='image-container'>
                    <img src={mobil.image} alt={mobil.name}/></div>
                    <div className='text-container'>
                    <h2>{mobil.name}</h2>
                    <p className='carPrice'>{new Intl.NumberFormat('en-id', { style: 'currency', currency: 'IDR' }).format(mobil.price)} /hari</p>
                    <p className='carLorem'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p></div>
                    <div className='button-pilih-mobil'>
                    <Button text='Pilih Mobil' onClick ={() => klikDetail(mobil.id)} style={{width: '100%', borderRadius:'0%'}}/></div>
                </li>
            ))}
        </ul>
        </div>
        </section>
        </>
    )
}

export default CarDisplay;