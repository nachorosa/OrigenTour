import { useEffect, useState } from 'react';
import ContactForm from '../components/ContactForm'
import '../css/contact.css'

const Contact = () => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1024) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        }

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, []);

    return (
        <>
            <div className='contact-container flex justify-around mb-16'>
                <div>
                    <div className='contact-title w-full p-8'>
                        <h1 className='font-bold text-3xl text-center lg:mb-16'>Contactanos!</h1>
                        <p className='text-center text-lg mt-8'>¿Necesitas más información sobre nuestros emocionantes viajes en Argentina? Estamos a solo un mensaje de distancia. Pregunta sobre destinos, fechas o lo que necesites saber. Estamos aquí para asegurarnos de que tengas la mejor experiencia de viaje.
                        </p>
                    </div>
                    {isMobile ? <ContactForm isMobile={isMobile} /> : null}
                    <div className='mt-16 mb-16'>
                        <div className="contact-socials">
                            <div className="socials-container flex flex-col justify-center mx-auto">
                                <div className="socials-item flex justify-start items-center gap-4 flex-wrap mb-4 lg:justify-evenly">
                                    <div className='flex items-center gap-4'>
                                        <img src="./src/img/instagram-logo.svg" alt="" />
                                        <span>origen.viajes</span>
                                    </div>
                                    <div className='flex items-center gap-4'>
                                        <img src="./src/img/whatsapp.svg" alt="" />
                                        <span>11 2880 - 8745</span>
                                    </div>
                                    <div className='flex items-center gap-4'>
                                        <img src="./src/img/gmail.svg" alt="" />
                                        <span>origenviajes@gmail.com</span>
                                    </div>
                                </div>
                                <div id='socials-item-second-block' className='flex flex-wrap lg:flex-nowrap lg:justify-evenly lg:items-center'>
                                    <div id='socials-item-location' className="socials-item flex justify-start lg:w-3/4 lg:justify-center items-center gap-6 mb-4">
                                        <img src="./src/img/location.svg" alt="" />
                                        <span>Bartolomé Mitre 3362, San Martín, Provincia de Buenos Aires
                                            Piso 1 - Oficina 26</span>
                                    </div>
                                    <div className="socials-item flex justify-start lg:w-1/4 lg:justify-center items-center gap-6 mb-4 w-1/2">
                                        <img src="./src/img/clock.svg" alt="" />
                                        <span>Lunes a viernes
                                            10:00 a 18:00hs</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                {isMobile ? null : <ContactForm isMobile={isMobile}/>}
            </div>
        </>
    )
}

export default Contact