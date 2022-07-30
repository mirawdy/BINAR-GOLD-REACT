import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from '../components/Button'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import CarExplanation from "../components/SectionCarExplanation";

const URL = "https://bootcamp-rent-car.herokuapp.com/admin/car";

function CarDetail(){
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

    return(
        <>
        <Nav/>
        <CarExplanation carImage={car.image} carName={car.name} carCategory={car.category} carPrice={car.price}/>
        <Footer/>
        </>
    )
}

export default CarDetail;