import ContactForm from '../components/ContactForm'
import '../css/contact.css'

const Contact = () => {
    return (
        <>
            <div className="contact-container flex justify-center sm:flex-col 2xl:flex-row xl:flex-row">
                <div className="contact-main flex flex-col w-1/2 items-center justify-evenly">
                    <div className="contact-title">
                        <h1>Contactanos!</h1>
                    </div>
                    <div className="contatc-description text-center">
                        <p>
                            ¿Necesitas más información sobre nuestros emocionantes viajes en Argentina? Estamos a solo un mensaje de distancia. Pregunta sobre destinos, fechas o lo que necesites saber. Estamos aquí para asegurarnos de que tengas la mejor experiencia de viaje.
                        </p>
                    </div>
                    <div className="contact-socials flex w-full justify-center flex-col items-center">
                        <div className='flex w-full justify-evenly'>
                            <div className='contact-socials-item flex items-center gap-6'>
                                <img src="./src/img/instagram-logo.svg" alt="" />
                                <span>origen.viajes</span>
                            </div>
                            <div className="contact-socials-item flex items-center gap-6">
                                <img src="./src/img/whatsapp.svg" alt="" />
                                <span>11 2880 - 8745</span>
                            </div>
                            <div className="contact-socials-item flex items-center gap-6">
                                <img src="./src/img/gmail.svg" alt="" />
                                <span>origenviajes@gmail.com</span>
                            </div>
                        </div>
                        <div className='flex w-full justify-center mt-16 gap-4'>
                            <div className="contact-socials-item flex items-center gap-6">
                                <img src="./src/img/location.svg" alt="" />
                                <span>Bartolomé Mitre 3362, San Martín, Provincia de Buenos Aires / Piso 1 - Oficina 26</span>
                            </div>
                            <div className="contact-socials-item flex items-center gap-6">
                                <img src="./src/img/clock.svg" alt="" />
                                <span>Lunes a viernes 10:00 a 18:00hs</span>
                            </div>
                        </div>
                    </div>
                </div>
                <ContactForm />
            </div>

        </>
    )
}

export default Contact