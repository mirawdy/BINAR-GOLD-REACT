import Hero from '../components/SectionHero'
import Service from "../components/SectionService"
import Nav from "../components/Nav"
import WhyUs from "../components/SectionWhyUs"
import TestiSlider from "../components/SectionTestimonials"

function Home(){
    return(
        <>
        <Nav/>
        <Hero/>
        <Service/>
        <WhyUs/>
        <TestiSlider/>
        </>
    )
}

export default Home