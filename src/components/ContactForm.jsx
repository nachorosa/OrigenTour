import { useState } from 'react';
import '../css/contact.css'

const ContactForm = ({ isMobile }) => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');

    const emailAddress = 'contacto@origentourandtravel.tur.ar'

    const handleEnviarClick = () => {
        const subject = 'Consulta desde formulario de contacto';
        const body = `Nombre: ${nombre}%0AApellido: ${apellido}%0ACorreo electrónico: ${email}%0AMensaje: ${mensaje}`

        window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`
    }

    return (
        <div className='w-full lg:w-1/2'>
            <div className='p-6 contact-form-container mx-auto'>
                <div className=''>
                    <div className='mb-4 flex lg:flex-row flex-col lg:justify-between'>
                        <div id='input-contact-name' className="input-contact contact-form-input flex flex-col mb-4">
                            <label className='mb-2'>Nombre</label>
                            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                        </div>
                        <div id='input-contact-surname' className="input-contact contact-form-input flex flex-col">
                            <label className='mb-2'>Apellido</label>
                            <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                        </div>
                    </div>
                    <div className='mb-4'>
                        <div className="input-contact contact-form-input flex flex-col">
                            <label className='mb-2'>Email</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>
                    <div className='input-contact mb-4'>
                        <label>¿Con que te podemos ayudar?</label>
                        <textarea rows={isMobile ? 5 : 8} value={mensaje} onChange={(e) => setMensaje(e.target.value)} className='w-full mt-2 text-2xl'></textarea>
                    </div>
                    <div className="submit-button w-full flex justify-end">
                        <button onClick={handleEnviarClick}>Enviar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm