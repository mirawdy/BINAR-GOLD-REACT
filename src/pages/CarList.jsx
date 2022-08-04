import CarDisplay from '../components/CarDisplay'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import NavBurger from '../components/NavBurger'

function CarList(){
    return(
        <>
        <Nav/>
        <NavBurger/>
        <CarDisplay/>
        <Footer/>
        </>
    )
}
export default CarList;