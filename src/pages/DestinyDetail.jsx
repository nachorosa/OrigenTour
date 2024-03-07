import "../css/detailDestiny.css"
import { useEffect, useState } from "react"
import DestinyIncludes from "../components/DestinyIncludes"
import DestinyItinerary from "../components/DestinyItinerary"
import { useParams } from "react-router"
import { Carousel } from "@material-tailwind/react"
import { format, utcToZonedTime } from 'date-fns-tz';
import es from 'date-fns/esm/locale/es/index';
import LoadingOval from "../components/LoadingOval"

const collapsablesServicios = []

const collapsablesItirenario = []

export const DestinyDetail = () => {

    const [content, setContent] = useState(true)
    const [collapsableList, setCollapsableList] = useState({})
    const [collapsableItinerarioList, setCollapsableItinerarioList] = useState({})
    const [isMobile, setIsMobile] = useState(false)
    const [viaje, setViaje] = useState({})
    const { id } = useParams()
    const [loading, isLoading] = useState(true)
    const [whatsappLink, setWhatsappLink] = useState('');


    const getViaje = () => {
        fetch("https://api.origentourandtravel.tur.ar/api/viajes/" + id, {
            method: "GET",
            headers: {
                "content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                setViaje(data);

                const phoneNumber = '+541128808745';
                const message = encodeURIComponent(`Hola, me interesa el viaje a ${data.destinos[0].destino}, de ${data.noches} Noches, que sale $${data.precio}, me podrias brindar mas informacion!`);
                const link = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
                setWhatsappLink(link);

            })
            .then(() => isLoading(false));
    };

    useEffect(() => {
        getViaje()
        const handleResize = () => {
            if (window.innerWidth < 768) {
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

    }, [])

    const toggleContent = () => {
        setContent(!content)
    }

    useEffect(() => {
        const initialCollapsableState = {};
        const initialCollapsableItinerario = {};
        collapsablesServicios.forEach((c) => {
            initialCollapsableState[c.name] = false;
        });
        collapsablesItirenario.forEach((c) => {
            initialCollapsableItinerario[c.dia] = false;
        });
        setCollapsableList(initialCollapsableState);
        setCollapsableItinerarioList(initialCollapsableItinerario)
    }, [])

    const handleCollapsable = collapsable => {
        setCollapsableList({
            ...collapsableList,
            [collapsable]: !collapsableList[collapsable]
        })
    }

    const handleCollapsableItinerario = dia => {
        setCollapsableItinerarioList({
            ...collapsableItinerarioList,
            [dia]: !collapsableItinerarioList[dia]
        })
    }

    return (
        loading ? <LoadingOval /> :
            <div className="w-full md:min-h-screen">
                <a href={`../../destinos`}><img className="paddingImg cursor-pointer" src="/src/img/arrow_back.svg" alt="" /></a>
                <div className="flex flex-col md:flex-row-reverse pb-10">
                    <div className="md-w-55 px-8">
                        <div className="destiny-title flex justify-between py-8 flex-col items-start gap-5">
                            {viaje.destinos.length === 1 ? (
                                <h2 className="titlePage">{viaje.destinos[0].destino}</h2>
                            ) : (
                                <div className="flex flex-wrap items-start">
                                    {viaje.destinos.map((destino, index) => (
                                        <h2 className="titlePage" key={index}>
                                            {`${destino.destino}${index < viaje.destinos.length - 1 ? ' - ' : ''}`}
                                        </h2>
                                    ))}
                                </div>
                            )}
                            <h3 className="textNight">{viaje.noches} Noches</h3>
                        </div>
                        <div>
                            <h3 className="textNight">Salidas:</h3>
                            <div>
                                {(() => {
                                    const groupedDates = {};
                                    viaje.salidas.forEach((fecha) => {
                                        let date;

                                        if (Array.isArray(fecha)) {
                                            // Si es un array, construir una fecha a partir de sus elementos
                                            date = new Date(fecha[0], fecha[1] - 1, fecha[2]);
                                        } else {
                                            // Si no es un array, asumir que es una cadena de fecha ISO 8601
                                            date = new Date(fecha);
                                        }

                                        const zonedDate = utcToZonedTime(date, 'UTC');
                                        const monthYear = format(zonedDate, 'MMMM yyyy', { locale: es, timeZone: 'UTC' });

                                        if (!groupedDates[monthYear]) {
                                            groupedDates[monthYear] = [];
                                        }

                                        groupedDates[monthYear].push(format(zonedDate, 'dd', { locale: es, timeZone: 'UTC' }));
                                    });

                                    return Object.entries(groupedDates).map(([monthYear, days]) => (
                                        <h4 className="textMonth" key={monthYear}>
                                            {`${monthYear}: ${days.join(' - ')}`}
                                        </h4>
                                    ));
                                })()}

                            </div>
                        </div>
                        <div className="flex py-8">
                            <div className="flex flex-col flex-wrap gap-5">
                                {viaje.destinos.map((destino, index) => (
                                    <div className="flex flex-wrap" key={index}>
                                        <img src="/src/img/bed.svg" alt="" />
                                        <p className="textHotel">{destino.hotel}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {isMobile ? null :
                            <p className="detailDescription md:p-0">{viaje.descripcion}</p>
                        }
                    </div>
                    <div className="flex justify-center md-w-45">
                        <div className="containerCarrousel">
                            <Carousel className=" rounded-xl" transition={{ duration: 2 }} autoplay={true} autoplayDelay={10000} loop={true}
                                navigation={({ setActiveIndex, activeIndex, length }) => (
                                    <div className="absolute bottom-5 left-2/4 z-50 flex -translate-x-2/4 gap-5 ">
                                        {new Array(length).fill("").map((_, i) => (
                                            <span key={i} className={`block h-4 cursor-pointer  rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-stone-300" : "w-4 bg-stone-300/75  "
                                                }`} onClick={() => setActiveIndex(i)} />))}
                                    </div>)}
                            >
                                {viaje.fotos.map((f, index) => (
                                    <img key={index} src={f} className="h-full w-full object-cover" alt={`Photo ${index + 1}`} />
                                ))}
                            </Carousel>
                        </div>
                    </div>
                    {isMobile ?
                        <p className="detailDescription md:p-0">{viaje.descripcion}</p> : null
                    }
                </div>
                <div className="flex flex-col md:flex-row">
                    <div className="md-w-45 md:mt-12">
                        <div className="containerDetailPrice">
                            <p className="textPriceTitle">Precio por persona</p>
                            <h3 className="textPrice">{viaje.precio.toLocaleString('es-AR', {
                                style: 'currency',
                                currency: 'ARS',
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 0,
                            })}</h3>
                            {viaje.destinos[0].provincia === 'Internacional' && (
                            <p className="textPriceTitle">*Precio en Dolares*</p>
                        )}
                        </div>
                        <div className="flex">
                            <div className="containerBooking">
                                <p className="bookingTitle">Consultas y reservas</p>
                                <h3 className="bookingNumber">11 2880 - 8745</h3>
                            </div>
                            <div className="containerBooking">
                                <a className="reserve-button" href={whatsappLink} target="_blank" rel="noopener noreferrer">Reservar</a>
                            </div>
                        </div>
                    </div>
                    <div className=" itinerario_incluye w-full flex flex-col md-w-55 pr-4">
                        <div className="flex justify-around text-2xl">
                            <h2 className={`${content ? "destiny-item-active cursor-pointer" : null}`} onClick={toggleContent}>¿Qué incluye?</h2>
                            <h2 className={`${content ? null : "destiny-item-active cursor-pointer"}`} onClick={toggleContent}>Itinerario</h2>
                        </div>
                        <div className="text-center">
                            {content ?
                                <DestinyIncludes collapsableList={collapsableList} servicios={viaje.servicios} handleCollapsable={handleCollapsable} />
                                :
                                <DestinyItinerary collapsablesItirenario={viaje.itinerario} collapsableItinerarioList={collapsableItinerarioList} handleCollapsableItinerario={handleCollapsableItinerario} />}
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default DestinyDetail