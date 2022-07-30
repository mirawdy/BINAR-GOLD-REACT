import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from '../components/Button'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import CarExplanation from "../components/SectionCarExplanation";

const URL = "https://bootcamp-rent-car.herokuapp.com/admin/car";

function CarDetail(){
    let navigate = useNavigate();
    const [car, setCar] = useState(' ');

    const { id } = useParams();

    async function getCarData (){
        try{
            const res = await window.fetch(`${URL}/${id}`);
            const carsData = await res.json();
            setCar(carsData)}
        catch(e){console.log(e)}
    };

    useEffect (() => {getCarData()}, []);

    function kembali(){
        navigate(-1)}

    return(
        <>
        <Nav/>
        <CarExplanation carImage={car.image} carName={car.name} carCategory={car.category} carPrice={car.price}/>
        <Button text='Kembali' onClick={() => kembali}/>
        <Footer/>
        </>
    )
}

export default CarDetail;