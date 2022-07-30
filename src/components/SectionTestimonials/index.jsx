import fotoTesti1 from '../../assets/photo-testi-1.png'
import fotoTesti2 from '../../assets/photo-testi-2.png'
import fotoTesti3 from '../../assets/photo-testi-3.jpg'
import './SectionTestimonials.css'
import Button from '../Button'

function TestiSlider(){
    return(
        <>
        <section className="section-tiga">
        <div className="section-tiga-title">
            <h3>Testimonial</h3>
            <p>Berbagai review positif dari para pelanggan kami</p>
        </div>

        <div className="section-tiga-cards">
            <div className="cardz">
                <div className="cards-left">
                    <img src={fotoTesti1} alt="the photo of user who give testimonial"/>
                </div>

                <div className="cards-right">
                   <p>&#x2B50; &#x2B50; &#x2B50; &#x2B50; &#x2B50;</p>
                   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas veniam distinctio ex facere nobis itaque, ea, ducimus alias deserunt numquam eveniet. </p>
                    <div className="testiName"><p>John Dee, 32, Bromo</p></div>
                </div>
            </div>

            <div className="cardz">
                <div className="cards-left">
                    <img src={fotoTesti2} alt="the photo of user who give testimonial"/>
                </div>

                <div className="cards-right">
                   <p>&#x2B50; &#x2B50; &#x2B50; &#x2B50;</p>
                   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas veniam distinctio ex facere nobis itaque, ea, ducimus alias deserunt numquam eveniet. </p>
                    <div className="testiName"><p>Nadia, 27, Jakarta</p></div>
                </div>
            </div>

            <div className="cardz">
                <div className="cards-left">
                    <img src={fotoTesti3} alt="the photo of user who give testimonial"/>
                </div>

                <div className="cards-right">
                   <p>&#x2B50; &#x2B50; &#x2B50; &#x2B50; &#x2B50;</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas veniam distinctio ex facere nobis itaque, ea, ducimus alias deserunt numquam eveniet. </p>
                    <div className="testiName"><p>Rio, 45, Bandung</p></div>
                </div>
            </div>
        </div>


        <div className="section-tiga-button">
            <Button text = "<" id ="prev"/><Button text = ">" id ="next"/>
        </div>
        </section>
        </>)}
              
export default TestiSlider;