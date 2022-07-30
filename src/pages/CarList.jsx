import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Nav from '../components/Nav'
import Button from '../components/Button'
import Footer from '../components/Footer'
const URL = "https://bootcamp-rent-car.herokuapp.com/admin/car";

function CarList(){
    const [cars, setCars] = useState([]);
    let navigate = useNavigate();

    async function getData(){
        try{
            const res = await window.fetch(URL);
            const carsData = await res.json();
            setCars(carsData)}
        catch(e){console.log(e)}}

    useEffect(() =>{getData()}, []);

    function test(id){
        console.log(id)
    }
    //function formatRupiah(){
      //  return new Intl.NumberFormat('id-ID',
        //{style: 'currency', currency: 'IDR', minimumFractionDigits: 0}).format();}
        
    function handleViewDetail(id)
    {navigate(`/cars/${id}`)}

    function klikDetail(id){navigate(`/cars/${id}`)}



    return(
        <>
        <Nav/>
        <h2>Detail Mobil</h2>
        <div className="cards-container">
        <ul className="carCard">
            {cars.map(mobil=> (
                <li key={mobil.id}>
                    <img src={mobil.image} alt={mobil.name}/>
                    <p className='carName'>{mobil.name}</p>
                    <p className='carPrice'>{mobil.price}</p>
                    <p>{mobil.category}</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <Button text='Pilih Mobil' onClick ={() => klikDetail(mobil.id)}/>
                </li>
            ))}
        </ul>
        </div>
        <Footer/>
        </>
    )
}

export default CarList;