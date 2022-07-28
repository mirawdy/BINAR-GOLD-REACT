import fotoTesti1 from '../../assets/photo-testi-1.png'
import fotoTesti2 from '../../assets/photo-testi-2.png'
import './SectionTestimonials.css'
import Button from '../Button'

function TestiSlider(){
    return(
        <>
        <section className="section-tiga">
            <div className="section-tiga-title">
                <h3>Testimonial</h3>
                <p>Berbagai review positif dari para pelanggan kami</p></div>
 
            <div className="section-tiga-cards">
                <div className="cardz">
                    <div className="cards-left">
                        <img src={fotoTesti2} alt="the photo of user who give testimonial"/></div>
                    <div className="cards-right">
                        <p>&#x2B50; &#x2B50; &#x2B50; &#x2B50; &#x2B50;</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <p className="testiName">Sekian, asal sekian xxx</p>
                    </div></div>
                <div className="cardz">
                <div className="cards-left">
                    <img src={fotoTesti2} alt="the photo of user who give testimonial"/>
                    </div>
                    <div className="cards-right">                        
                    <p>&#x2B50; &#x2B50; &#x2B50; &#x2B50; &#x2B50;</p>
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <p className="testiName">Sekian, asal sekian xxx</p>
                    </div>
                </div>
            </div>
            <div>
                    <Button id ="prev"/><Button id ="next"/>
                </div>
        </section>
        </>
    )
}

export default TestiSlider