import Hero from '../components/SectionHero'
import Service from "../components/SectionService"
import Nav from "../components/Nav"
import WhyUs from "../components/SectionWhyUs"
import TestiSlider from "../components/SectionTestimonials"
import Location from "../components/SectionLocation"
import FAQ from "../components/SectionFAQ"
import Footer from "../components/Footer"
import NavBurger from "../components/NavBurger"

function Home(){
    return(
        <>
        <Nav/>
        <NavBurger/>
        <Hero/>
        <Service/>
        <WhyUs/>
        <TestiSlider/>
        <Location/>
        <FAQ/>
        <Footer/>
        </>
    )
}

export default Home