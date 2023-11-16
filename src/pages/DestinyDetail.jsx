import { Accordion, Carousel } from "@material-tailwind/react"
import "../css/detailDestiny.css"
import { useEffect, useState } from "react"
import { AccordionTab } from "primereact/accordion"
import DestinyIncludes from "../components/DestinyIncludes"
import DestinyItinerary from "../components/DestinyItinerary"

// const destinationDetail = [
//     {
//       id: 1,
//       destino: 'Salta',
//       tiempo: "4 noches",
//       hotel: "Hotel Posada Del Sol Salta",
//       descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum minus impedit aliquam soluta beatae quisquam voluptates totam corrupti rem at voluptate, harum, a magni eveniet, quia voluptatem quas optio eaque!",
//       precio: "40.000",
//       imageSrc: '/src/img/cataratas.jpg',
//       imageAlt: "cataratas",
//       mes1:"Enero: 1 - 4 - 6  - 7",
//       mes2:"Febrero: 4 - 6 - 9 - 12",
//       comida:"texto",
//       transporte:"texto",
//       actividades:"texto",
//       alojamiento:"texto",
//       dia1:"texto",
//       dia2:"texto",
//       dia3:"texto",
//       dia4:"texto"
//     },

//     // More destinationsdetail...
//   ]

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

    useEffect(() => {
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

        <div className="detailDestiny w-full">
            <i className="fas fa-arrow-left flex w-full">Retroceder</i>
            <div className="detailDestiny9 flex flex-col md:flex-row-reverse md:justify-around">
                <div className="detailDestiny2 px-8">
                    <div className="destiny-title flex items-center justify-between py-8 md:flex-col md:items-start">
                        <h1 className="font-bold md:mb-4">Salta</h1>
                        <h3>3 Noches</h3>
                    </div>
                    <div className="detailDestiny4">
                        <h3>Salidas:</h3>
                        <h4>Enero: 1 - 2 - 4 - 5 </h4>
                        <h4>Febrero: 7 - 12 - 22 - 29 </h4>
                    </div>
                    <div className="detailDestiny5">
                        <img src="/src/img/bed.svg" alt="" />
                        <p>Hotel Posada Del Sol Salta, Alvarado 646, A4400 Salta</p>
                    </div>
                    {isMobile ? null :
                        <p className="detailDescription md:p-0">Descubre la belleza sin igual de Salta, conocida como 'La Linda'. Esta encantadora ciudad en el noroeste de Argentina te espera con sus paisajes impresionantes, su rica cultura y su deliciosa gastronomía.</p>
                    }
                    {isMobile ? null :
                        <div className="itinerario_incluye w-full flex flex-col mt-12">
                            <div className="itinerario-incluye-headers flex justify-around text-2xl md:justify-around md:w-full md:gap-6 md:p-4 2xl:w-1/2 2xl:justify-start 2xl:gap-16 2xl:ml-4">
                                <h2 className={content ? "destiny-item-active" : null} onClick={toggleContent}>¿Qué incluye?</h2>
                                <h2 className={content ? null : "destiny-item-active"}  onClick={toggleContent}>Itinerario</h2>
                            </div>
                            <div className="text-center">
                                {content ?
                                    <DestinyIncludes collapsablesServicios={collapsablesServicios} collapsableList={collapsableList} handleCollapsable={handleCollapsable} />
                                    :
                                    <DestinyItinerary collapsablesItirenario={collapsablesItirenario} collapsableItinerarioList={collapsableItinerarioList} handleCollapsableItinerario={handleCollapsableItinerario} />}
                            </div>
                        </div>
                    }
                </div>

                <div className="detailDestiny6">
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
                    {isMobile ? null : <div className="detailDestiny10 md:w-full md:mt-12">
                        <div className="detailDestiny7">
                            <p>Precio por persona</p>
                            <h3>$40.000</h3>
                        </div>
                        <div className="detailDestiny8">
                            <p>Consultas y reservas</p>
                            <h3>11 2880 - 8745</h3>
                        </div>
                    </div>}
                </div>
                {isMobile ?
                    <p className="detailDescription">Descubre la belleza sin igual de Salta, conocida como 'La Linda'. Esta encantadora ciudad en el noroeste de Argentina te espera con sus paisajes impresionantes, su rica cultura y su deliciosa gastronomía.</p>
                    : null
                }
            </div>
            <div>
                {isMobile ?
                    <div>
                        <div className="detailDestiny10">
                            <div className="detailDestiny7">
                                <p>Precio por persona</p>
                                <h3>$40.000</h3>
                            </div>
                            <div className="detailDestiny8">
                                <p>Consultas y reservas</p>
                                <h3>11 2880 - 8745</h3>
                            </div>
                        </div>
                        <div className="itinerario_incluye w-full flex flex-col">
                            <div className="flex justify-around text-2xl">
                                <h2 className={`${content ? "destiny-item-active" : null}`} onClick={toggleContent}>¿Qué incluye?</h2>
                                <h2 className={`${content ? null : "destiny-item-active"}`} onClick={toggleContent}>Itinerario</h2>
                            </div>
                            <div className="text-center">
                                {content ?
                                    <DestinyIncludes collapsablesServicios={collapsablesServicios} collapsableList={collapsableList} handleCollapsable={handleCollapsable} />
                                    :
                                    <DestinyItinerary collapsablesItirenario={collapsablesItirenario} collapsableItinerarioList={collapsableItinerarioList} handleCollapsableItinerario={handleCollapsableItinerario} />}
                            </div>
                        </div>
                    </div>
                    : null}
            </div>
        </div>
    )
}
