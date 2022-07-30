import './SectionFAQ.css'

function FAQ(){
    return(
        <>
        <section className="section-lima">
            <div className="section-lima-FAQ">
                <h2>Frequently Asked Question</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className="section-lima-accordion">
                <div className="accordion-title">
                    <p>Apa saja syarat yang dibutuhkan?</p>
                    <span>&#129171;</span>
                </div>

                <div className="accordion-content">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                </div>

                <div className="accordion-title">
                    <p>Berapa hari minimal sewa mobil lepas kunci?</p>
                    <span>&#129171;</span>
                </div>

                <div className="accordion-content">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                </div>

                <div className="accordion-title">
                    <p>Berapa hari sebelumnya sabaiknya booking sewa mobil?</p>
                    <span>&#129171;</span>
                </div>

                <div className="accordion-content">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                </div>

                <div className="accordion-title">
                    <p>Apakah Ada biaya antar-jemput?</p>
                    <span>&#129171;</span>
                </div>

                <div className="accordion-content">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                 </div>
            </div>
        </section>
        </>
    )
}

export default FAQ;