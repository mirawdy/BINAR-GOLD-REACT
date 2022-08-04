import fotoTesti1 from '../../assets/photo-testi-1.png'
import fotoTesti2 from '../../assets/photo-testi-2.png'
import fotoTesti3 from '../../assets/photo-testi-3.jpg'
import './SectionTestimonials.css'
import Button from '../Button'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {useRef} from 'react'


function TestiSlider(){
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    return(
        <>
        <section className="section-tiga">
        <div className="section-tiga-title">
            <h2>Testimonial</h2>
            <p>Berbagai review positif dari para pelanggan kami</p>
        </div>
        <div className="section-tiga-cards">
        <div className="section-tiga-cardscontainer">
        <Swiper
        slidesPerView={2.5}
        spaceBetween={30}
        slidesPerGroup={2}
        breakpoints={{
            1024: {
                slidesPerView: 2.75,
               },
            800: {
             slidesPerView: 2,
            },
            270: {
              slidesPerView: 1,
            },
          }}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
        }}
        className="mySwiper"
      >
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
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

        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>        <div className="cardz">
                <div className="cards-left">
                    <img src={fotoTesti3} alt="the photo of user who give testimonial"/>
                </div>

                <div className="cards-right">
                   <p>&#x2B50; &#x2B50; &#x2B50; &#x2B50; &#x2B50;</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas veniam distinctio ex facere nobis itaque, ea, ducimus alias deserunt numquam eveniet. </p>
                    <div className="testiName"><p>Rio, 45, Bandung</p></div>
                </div>
            </div></SwiperSlide>
      </Swiper>
        </div>

        <div className="section-tiga-button">
            <button ref={prevRef}>&#10094;</button>            <button ref={nextRef}>&#10095;</button>
        </div></div>
        </section>
        </>)}
              
export default TestiSlider;


