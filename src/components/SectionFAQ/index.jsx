import './SectionFAQ.css'
import React, { useState } from "react";

function FAQ(){
    const [show1, setShow1] = useState(false);
    const handleOpen1 = () => {
        setShow1(!show1);};    

    const [show2, setShow2] = useState(false);
    const handleOpen2 = () => {
        setShow2(!show2);};    

        const [show3, setShow3] = useState(false);
        const handleOpen3 = () => {
            setShow3(!show3);};    

            const [show4, setShow4] = useState(false);
            const handleOpen4 = () => {
                setShow4(!show4);};    


    return(
        <>
        <section className="section-lima">
            <div className="section-lima-FAQ">
                <h2>Frequently Asked Question</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className="section-lima-accordion">
                <div className="accordion-title" onClick={handleOpen1}>
                    <div><p>Apa saja syarat yang dibutuhkan?</p></div>
                    <div className="sign">{show1 ? '-' : '+'}</div>
                </div>
                {show1 && (
                <div className="accordion-content">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>)}
                
                <div className="accordion-title" onClick={handleOpen2}>
                    <div><p>Berapa hari minimal sewa mobil lepas kunci?</p></div>
                    <div className="sign">{show2 ? '-' : '+'}</div>
                    </div>
                {show2 && (
                <div className="accordion-content">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>)}
                
                <div className="accordion-title" onClick={handleOpen3}>
                    <div><p>Berapa hari sebelumnya sebaiknya sewa mobil?</p></div>
                    <div className="sign">{show3 ? '-' : '+'}</div>
                    </div>
                {show3 && (
                <div className="accordion-content">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>)}

                <div className="accordion-title" onClick={handleOpen4}>
                    <div><p>Apakah ada biaya antar-jemput?</p></div>
                    <div className="sign">{show4 ? '-' : '+'}</div>
                    </div>
                {show4 && (
                <div className="accordion-content">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>)}

            </div>
        </section>
        </>
    )
}

export default FAQ;