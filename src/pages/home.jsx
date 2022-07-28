import Hero from '../components/SectionHero'
import Service from "../components/SectionService"
import Nav from "../components/Nav"
import WhyUs from "../components/SectionWhyUs"

function Home(){
    return(
        <>
        <Nav/>
        <Hero/>
        <Service/>
        <WhyUs/>
        </>
    )
}

export default Home