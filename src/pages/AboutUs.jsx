import { Accordion, AccordionTab } from 'primereact/accordion';
import { MapContainer } from '../components/MapContainer';
import "../css/aboutUs.css"

export const AboutUs = () => {

  return (
    <div  className="block w-full">
        <div className="w-full flex md:flex-row-reverse md-minHeight65rem">
            <img className='w-full maxHeight39rem md-w-45 md:p-8' src="./src/img/aboutUs.jpg" alt="" />
            <div className='md-w-55'>
                <div className='p-8'>
                    <h2 className='font-medium leading-2-4rem text1-8rem pb-4 text-left tracking-normal'>Argentina es tu destino, <span className='text-left tracking-normal font-semibold fontsize2rem lineHeight2-8rem block'>NOSOTROS SOMOS TU GUIA</span></h2>
                    <p className='font-normal tracking-normal text-left fontsize1-6rem leading-2-4rem'>Agencia mayorista de viajes y turismo que va más allá de los límites convencionales para ofrecerte aventuras y experiencias verdaderamente únicas. Organizamos salidas grupales que te conectarán con personas que comparten tu espíritu aventurero. Con décadas de experiencia en la industria, hemos perfeccionado la planificación de viajes a medida para que cada uno de nuestros clientes pueda vivir la aventura de sus sueños. Trabajamos en estrecha colaboración con comunidades locales, asegurándonos de que tu visita sea beneficiosa tanto para ti como para las personas y lugares que visitas. Estamos aquí para llevar tus sueños al siguiente nivel y hacer que cada viaje sea una experiencia memorable.</p>
                </div>
                <div className="flex flex-col px-2">
                    <Accordion className='MisionVision' activeIndex={0}>
                        <AccordionTab className='rounded-2xl bg-btn' header="NUESTRA VISIÓN">
                            <p className="bg-white fontsize1-6rem font-normal lineHeight2-8rem tracking-normal text-left p-8">En Origen Viajes, nuestra visión es convertirnos en un referente a nivel nacional en la creación de experiencias de viaje únicas y enriquecedoras. Buscamos inspirar a las personas de todo el país a explorar, aprender y conectarse con el mundo a través de aventuras inolvidables. Al mismo tiempo, nos esforzamos por contribuir de manera significativa al desarrollo sostenible de las comunidades locales en toda nuestra nación.</p>
                        </AccordionTab>
                        <AccordionTab className='rounded-2xl bg-btn'  header="NUESTRA MISIÓN">
                            <p className="bg-white fontsize1-6rem font-normal lineHeight2-8rem tracking-normal text-left p-8">En Origen Viajes, nuestra misión es inspirar y facilitar aventuras inolvidables, y conectar a personas con espíritu aventurero a través de experiencias únicas y enriquecedoras. Nos esforzamos por planificar viajes a medida que cumplan los sueños de nuestros clientes, promoviendo al mismo tiempo un impacto positivo en las comunidades locales que visitamos.</p>
                        </AccordionTab>
                    </Accordion>
                </div>
            </div>
        </div>
        <div className="w-full flex flex-col-reverse md:flex-row md:pb-8">
            <div className='flex w-full p-8 justify-center flex-col md-w-55'>
                <h2 className='font-semibold tracking-normal text-left lineHeight2-8rem fontsize2rem'>Te esperamos en nuestras oficinas</h2>
                <h3 className='tracking-normal text-left font-normal py-4 height-2rem fontsize1-6rem'>Las visitas son únicamente con cita previa.</h3>
                <div className="flex items-center py-4 gap-6">
                    <img className='w-12' src="./src/img/whatsapp.svg" alt="" />
                    <span className='text-left tracking-normal leading-2-4rem font-normal fontsize1-4rem' >11 2880 - 8745</span>
                </div>
                <div className="flex items-center py-4 gap-6">
                    <img className='w-12' src="./src/img/location.svg" alt="" />
                        <span className='text-left tracking-normal leading-2-4rem font-normal fontsize1-4rem' >Bartolomé Mitre 3362, San Martín, Provincia de Buenos Aires / Piso 1 - Oficina 26</span>
                </div>
                <div className="flex items-center py-4 gap-6">
                    <img className='w-12' src="./src/img/clock.svg" alt="" />
                    <span className='text-left tracking-normal leading-2-4rem font-normal fontsize1-4rem' >Lunes a viernes 10:00 a 18:00hs</span>
                </div>
            </div>
            <div className='md:flex md:justify-center md-w-45'>
                <div className='flex w-full justify-center max-w-50rem md:rounded-2xl'>
                    <MapContainer/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs