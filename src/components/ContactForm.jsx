import '../css/contact.css'

const ContactForm = ({isMobile}) => {
    return (

        <div className='w-full lg:w-1/2'>


            <div className='p-6 contact-form-container mx-auto'>
                <div className=''>
                    <div className='mb-4 flex lg:flex-row flex-col lg:justify-between'>
                        <div id='input-contact-name' className="input-contact contact-form-input flex flex-col mb-4">
                            <label className='mb-2'>Nombre</label>
                            <input type="text" />
                        </div>
                        <div id='input-contact-surname' className="input-contact contact-form-input flex flex-col">
                            <label className='mb-2'>Apellido</label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className='mb-4'>
                        <div className="input-contact contact-form-input flex flex-col">
                            <label className='mb-2'>Email</label>
                            <input type="email" />
                        </div>
                    </div>
                    <div className='input-contact mb-4'>
                        <label>¿Con que te podemos ayudar?</label>
                        <textarea rows={isMobile ? 5 : 8} className='w-full mt-2 text-2xl'></textarea>
                    </div>
                    <div className="submit-button w-full flex justify-end">
                        <button>Enviar</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ContactForm