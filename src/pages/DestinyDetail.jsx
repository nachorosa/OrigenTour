import "../css/detailDestiny.css"
import { useEffect, useState } from "react"
import DestinyIncludes from "../components/DestinyIncludes"
import DestinyItinerary from "../components/DestinyItinerary"
import { useParams } from "react-router"
import { Carousel } from "@material-tailwind/react"

const collapsablesServicios = [
    {
        id: 1,
        name: "comida",
        content: ["Desayunos bufe diarios en el hotel.", "Almuerzos durante las excursiones."]
    },
    {
        id: 2,
        name: "transporte",
        content: ["Traslados desde y hacia el aeropuerto.", "Transporte privado para las excursiones."]
    },
    {
        id: 3,
        name: "actividades",
        content: ["Degustacion de vinos en bodegas locales.", "Excursion a la Quebrada de Rio de las Conchas."]
    },
    {
        id: 4,
        name: "alojamineto",
        content: ["Alojamiento en el Hotel Posada Del Sol Salta, un encantador hotel boutique con comodidades modernas y un ambiente acogedor."]
    }
]

const collapsablesItirenario = [
    {
        id: 1,
        dia: 1,
        descripcion: "Llegada a Salta, traslado al hotel y tarde libre para explorar."
    },
    {
        id: 2,
        dia: 2,
        descripcion: "Llegada a Salta, traslado al hotel y tarde libre para explorar."
    },
]


export const DestinyDetail = () => {

    const [content, setContent] = useState(true)
    const [collapsableList, setCollapsableList] = useState({})
    const [collapsableItinerarioList, setCollapsableItinerarioList] = useState({})
    const [isMobile, setIsMobile] = useState(false)
    const [viaje, setViaje] = useState({})
    const { id } = useParams()
    const [loading, isLoading] = useState(true)

    const getViaje = () => {
        fetch("http://localhost:8080/api/viajes/" + id, {
            method: "GET",
            headers: {
                "content-type": "application/json"
            }
        }).then(res => res.json())
            .then(data => setViaje(data))
            .then(() => isLoading(false))
    }

    useEffect(() => {
        getViaje()
        // const handleResize = () => {
        //     if (window.innerWidth < 768) {
        //         setIsMobile(true);
        //     } else {
        //         setIsMobile(false);
        //     }
        // }

        // window.addEventListener('resize', handleResize);

        // handleResize();

        // return () => {
        //     window.removeEventListener('resize', handleResize);

        // };

    }, []);

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
        loading ? <div>cargando</div> :
            <div className="w-full">
                <a href={`../../destinos`}><img className="paddingImg cursor-pointer" src="/src/img/arrow_back.svg" alt="" /></a>
                <div className="flex flex-col md:flex-row-reverse md:justify-around">
                    <div className="md-w-55 px-8">
                        <div className="destiny-title flex items-center justify-between py-8 md:flex-col md:items-start">
                            {viaje.destinos.length === 1 ? (
                                <h2 className="titlePage">{viaje.destinos[0].destino}</h2>
                            ) : (
                                <div className="flex flex-col items-start">
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
                            <h4 className="textMonth">{
                                viaje.salidas.length > 0 && (
                                    <p>
                                        {new Date(viaje.salidas[0]).toLocaleString('default', { month: 'long' })}: {new Date(viaje.salidas[0]).getDate()}
                                        {viaje.salidas.slice(1).reduce((accumulator, fecha, index) => {
                                            const currentMonth = new Date(fecha).getMonth();
                                            const previousMonth = new Date(viaje.salidas[index]).getMonth();
                                            const separator = currentMonth !== previousMonth ? <br /> : ' - ';

                                            return (
                                                <>
                                                    {accumulator}
                                                    {separator}
                                                    {index > 0 && currentMonth !== previousMonth && (
                                                        new Date(fecha).toLocaleString('default', { month: 'long' }) + ': '
                                                    )}
                                                    {new Date(fecha).getDate()}
                                                </>
                                            );
                                        }, '')}
                                    </p>
                                )
                            }

                            </h4>
                        </div>
                        <div className="flex py-8">
                            <img src="/src/img/bed.svg" alt="" />
                            <div className="flex flex-col">
                                {viaje.destinos.map((destino, index) => (
                                    <p key={index} className="textHotel">
                                        {destino.hotel}
                                    </p>
                                ))}
                            </div>
                        </div>
                        {isMobile ? null :
                            <p className="detailDescription md:p-0">{viaje.descripcion}</p>
                        }
                        {isMobile ? null :
                            <div className="itinerario_incluye w-full flex flex-col mt-12">
                                <div className="itinerario-incluye-headers flex justify-around text-2xl md:justify-around md:w-full md:gap-6 md:p-4 2xl:w-1/2 2xl:justify-start 2xl:gap-16 2xl:ml-4">
                                    <h2 className={content ? "destiny-item-active" : null} onClick={toggleContent}>¿Qué incluye?</h2>
                                    <h2 className={content ? null : "destiny-item-active"} onClick={toggleContent}>Itinerario</h2>
                                </div>
                                <div className="text-center">
                                    {content ?
                                        <DestinyIncludes collapsableList={collapsableList} servicios={viaje.servicios} handleCollapsable={handleCollapsable} />
                                        :
                                        <DestinyItinerary collapsablesItirenario={viaje.itinerario} collapsableItinerarioList={collapsableItinerarioList} handleCollapsableItinerario={handleCollapsableItinerario} />}
                                </div>
                            </div>
                        }
                    </div>

                    <div className="containerCarrousel">
                        <Carousel className="rounded-xl" transition={{ duration: 2 }} autoplay={true} autoplayDelay={10000} loop={true}
                            navigation={({ setActiveIndex, activeIndex, length }) => (
                                <div className="absolute bottom-5 left-2/4 z-50 flex -translate-x-2/4 gap-5">
                                    {new Array(length).fill("").map((_, i) => (
                                        <span key={i} className={`block h-4 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-stone-300" : "w-4 bg-stone-300/75"
                                            }`} onClick={() => setActiveIndex(i)} />))}
                                </div>)}
                        >
                            <img src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80" alt="image 2" className="h-full w-full object-cover" />
                            <img src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80" alt="image 2" className="h-full w-full object-cover" />
                            <img src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80" alt="image 2" className="h-full w-full object-cover" />
                        </Carousel>
                        {isMobile ? null : <div className="md:w-full md:mt-12">
                            <div className="containerDetailPrice">
                                <p className="textPriceTitle">Precio por persona</p>
                                <h3 className="textPrice">{viaje.precio.toLocaleString('es-AR', {
                                    style: 'currency',
                                    currency: 'ARS',
                                    minimumFractionDigits: 0,
                                    maximumFractionDigits: 0,
                                })}</h3>
                            </div>
                            <div className="containerBooking">
                                <p className="bookingTitle">Consultas y reservas</p>
                                <h3 className="bookingNumber">11 2880 - 8745</h3>
                            </div>
                        </div>}
                    </div>
                    {isMobile ?
                        <p className="detailDescription">{viaje.descripcion}</p>
                        : null
                    }
                </div>
                <div>
                    {isMobile ?
                        <div>
                            <div>
                                <div className="containerDetailPrice">
                                    <p>Precio por persona</p>
                                    <h3>{viaje.precio.toLocaleString('es-AR', {
                                    style: 'currency',
                                    currency: 'ARS',
                                    minimumFractionDigits: 0,
                                    maximumFractionDigits: 0,
                                })}</h3>
                                </div>
                                <div className="detailDestiny8">
                                    <p>Consultas y reservas</p>
                                    <h3>11 2880 - 8745</h3>
                                </div>
                            </div>
                            <div className="itinerario_incluye w-full flex flex-col">
                                <div className="flex justify-around text-2xl">
                                    <h2 className={`${content ? "destiny-item-active cursor-pointer" : null}`} onClick={toggleContent}>¿Qué incluye?</h2>
                                    <h2 className={`${content ? null : "destiny-item-active cursor-pointer"}`} onClick={toggleContent}>Itinerario</h2>
                                </div>
                                <div className="text-center">
                                    {content ?
                                        <DestinyIncludes collapsablesServicios={collapsablesServicios} collapsableList={collapsableList} handleCollapsable={handleCollapsable} />
                                        :
                                        <DestinyItinerary collapsablesItirenario={viaje.itinerario} collapsableItinerarioList={collapsableItinerarioList} handleCollapsableItinerario={handleCollapsableItinerario} />}
                                </div>
                            </div>
                        </div>
                        : null}
                </div>
            </div>
    )
}

export default DestinyDetail
