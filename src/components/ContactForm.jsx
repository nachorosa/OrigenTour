import '../css/contact.css'

const ContactForm = () => {
    return (
        <div className='contact-form-main flex flex-col justify-between'>
            <div className="inputs-fields flex justify-between">
                <div id='nombre' className="input-contact flex flex-col">
                    <label className='mb-4'>Nombre</label>
                    <input type="text" />
                </div>
                <div id='apellido' className="input-contact flex flex-col">
                    <label className='mb-4'>Apellido</label>
                    <input type="text" />
                </div>
            </div>
            <div className="inputs-fields">
                <div className="input-contact flex flex-col">
                    <label className='mb-4'>Mail</label>
                    <input type="text" />
                </div>
            </div>
            <div className="inputs-fields">
                <div className="input-contact flex flex-col">
                    <label className='mb-4'>¿Con que te podemos ayudar?</label>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
            </div>
            <div className="inputs-fields flex w-full justify-end">
                <button className='submit-button'>Enviar</button>
            </div>
        </div>
    )
}

export default ContactForm