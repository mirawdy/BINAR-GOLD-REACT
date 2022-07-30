import Hero from '../components/SectionHero'
import Service from "../components/SectionService"
import Nav from "../components/Nav"
import WhyUs from "../components/SectionWhyUs"
import TestiSlider from "../components/SectionTestimonials"
import Location from "../components/SectionLocation"
import FAQ from "../components/SectionFAQ"
import Footer from "../components/Footer"

function Home(){
    return(
        <>
        <Nav/>
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