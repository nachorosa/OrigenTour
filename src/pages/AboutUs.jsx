import { Accordion, AccordionTab } from 'primereact/accordion';
import { MapContainer } from '../components/MapContainer';
import "../css/aboutUs.css"

export const AboutUs = () => {

  return (
    <div  className="contenedorAbout">
        <div className="sectionAbout">
            <img src="./src/img/aboutUs.jpg" alt="" />
            <div className='containerCollapse'>
                <div className='textAbout'>
                    <h2>Argentina es tu destino, <span>NOSOTROS SOMOS TU GUIA</span></h2>
                    <p>Agencia mayorista de viajes y turismo que va más allá de los límites convencionales para ofrecerte aventuras y experiencias verdaderamente únicas. Organizamos salidas grupales que te conectarán con personas que comparten tu espíritu aventurero. Con décadas de experiencia en la industria, hemos perfeccionado la planificación de viajes a medida para que cada uno de nuestros clientes pueda vivir la aventura de sus sueños. Trabajamos en estrecha colaboración con comunidades locales, asegurándonos de que tu visita sea beneficiosa tanto para ti como para las personas y lugares que visitas. Estamos aquí para llevar tus sueños al siguiente nivel y hacer que cada viaje sea una experiencia memorable.</p>
                </div>
                <div className="containerMisionVision">
                    <Accordion className='MisionVision' activeIndex={0}>
                        <AccordionTab className='containerMisionVisionAccordion' header="NUESTRA VISIÓN">
                            <p className="textContainerMisionVision">En Origen Viajes, nuestra visión es convertirnos en un referente a nivel nacional en la creación de experiencias de viaje únicas y enriquecedoras. Buscamos inspirar a las personas de todo el país a explorar, aprender y conectarse con el mundo a través de aventuras inolvidables. Al mismo tiempo, nos esforzamos por contribuir de manera significativa al desarrollo sostenible de las comunidades locales en toda nuestra nación.</p>
                        </AccordionTab>
                        <AccordionTab className='containerMisionVisionAccordion'  header="NUESTRA MISIÓN">
                            <p className="textContainerMisionVision">En Origen Viajes, nuestra misión es inspirar y facilitar aventuras inolvidables, y conectar a personas con espíritu aventurero a través de experiencias únicas y enriquecedoras. Nos esforzamos por planificar viajes a medida que cumplan los sueños de nuestros clientes, promoviendo al mismo tiempo un impacto positivo en las comunidades locales que visitamos.</p>
                        </AccordionTab>
                    </Accordion>
                </div>
            </div>
        </div>
        <div className="containerInfoAbout">
            <div className='titleAbout'>
                <h2>Te esperamos en nuestras oficinas</h2>
                <h3>Las visitas son únicamente con cita previa.</h3>
                <div className="itemAbout">
                    <img src="./src/img/whatsapp.svg" alt="" />
                    <span>11 2880 - 8745</span>
                </div>
                <div className="itemAbout">
                    <img src="./src/img/location.svg" alt="" />
                        <span>Bartolomé Mitre 3362, San Martín, Provincia de Buenos Aires / Piso 1 - Oficina 26</span>
                </div>
                <div className="itemAbout">
                    <img src="./src/img/clock.svg" alt="" />
                    <span>Lunes a viernes 10:00 a 18:00hs</span>
                </div>
            </div>
            <div className='containerMapAbout'>
                <div className='mapContainer'>
                    <MapContainer/>
                </div>
            </div>
        </div>
    </div>
  )
}