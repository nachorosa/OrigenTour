import { useParams } from "react-router-dom"
import "../css/cardDestiny.css"

const destinations = [
  {
    id: 1,
    destino: 'Salta',
    tiempo: "4",
    hotel: "Hotel Posada Del Sol Salta",
    precio: "40.000",
    href: '#',
    imageSrc: '/src/img/cataratas.jpg',
    imageAlt: "cataratas",
    mes: "enero",
    dias: "3"
  },
  {
    id: 1,
    destino: 'Salta',
    tiempo: "4",
    hotel: "Hotel Posada Del Sol Salta",
    precio: "40.000",
    href: '#',
    imageSrc: '/src/img/cataratas.jpg',
    imageAlt: "cataratas",
    mes: "enero",
    dias: "3"
  },
  {
    id: 1,
    destino: 'Salta',
    tiempo: "4",
    hotel: "Hotel Posada Del Sol Salta",
    precio: "40.000",
    href: '#',
    imageSrc: '/src/img/cataratas.jpg',
    imageAlt: "cataratas",
    mes: "enero",
    dias: "3"
  },
  {
    id: 1,
    destino: 'Salta',
    tiempo: "4",
    hotel: "Hotel Posada Del Sol Salta",
    precio: "40.000",
    href: '#',
    imageSrc: '/src/img/cataratas.jpg',
    imageAlt: "cataratas",
    mes: "enero",
    dias: "3"
  },
  {
    id: 1,
    destino: 'Salta',
    tiempo: "4",
    hotel: "Hotel Posada Del Sol Salta",
    precio: "40.000",
    href: '#',
    imageSrc: '/src/img/cataratas.jpg',
    imageAlt: "cataratas",
    mes: "enero",
    dias: "3"
  },
  {
    id: 1,
    destino: 'Salta',
    tiempo: "4",
    hotel: "Hotel Posada Del Sol Salta",
    precio: "40.000",
    href: '#',
    imageSrc: '/src/img/cataratas.jpg',
    imageAlt: "cataratas",
    mes: "enero",
    dias: "3"
  },
  {
    id: 1,
    destino: 'Salta',
    tiempo: "4 noches",
    hotel: "Hotel Posada Del Sol Salta",
    precio: "40.000",
    href: '#',
    imageSrc: '/src/img/cataratas.jpg',
    imageAlt: "cataratas",
    mes: "enero",
    dias: "3"
  },
  {
    id: 1,
    destino: 'Salta',
    tiempo: "4 noches",
    hotel: "Hotel Posada Del Sol Salta",
    precio: "40.000",
    href: '#',
    imageSrc: '/src/img/cataratas.jpg',
    imageAlt: "cataratas",
    mes: "enero",
    dias: "3"
  },

  // More destinations...
]

export const CardDestiny = () => {

  const {id} = useParams()

  console.log(id);

  fetch("http://localhost:8080/api/destinos/1" + id)

  return (
    <div className="px-8 pb-8">
      <div className="flex flex-wrap justify-center gap-8">
      {destinations.map((destiny) => (
                      <div key={destiny.id} className="relative containerCardDestiny">
                        <p className="absolute top-1/2 text-center text-white cardDetailNight ">{destiny.dias} Dias - {destiny.tiempo} Noches</p>
                        <img className="rounded-t-lg w-full h-1/2 -z-1" src={destiny.imageSrc} alt={destiny.imageAlt}/>
                        <div className="h-52 font-semibold tracking-normal cardDestinyData">
                          <div className="flex flex-row justify-between cardDestinyText ">
                            <h2 className="py-2">{destiny.destino}</h2>
                            <div className="flex flex-col">
                              <p>{destiny.mes}</p>
                              <p>{destiny.mes}</p>
                            </div>
                          </div>
                          <div className="flex items-center	py-2">
                            <img className="iconHotel" src="/src/img/bed.svg" alt="" />
                            <p className="cardDestinyHotelText py-2" >{destiny.hotel}</p>
                          </div>
                          <div className="flex items-center justify-between px-2">
                            <h3 className="cardDestinyPrice">${destiny.precio}</h3>
                            <a className="cardDestinyDetail" href={`destinos/detalle`}>Mas Informacion</a>   {/* href={`destinos/detalle/${destiny.id}`} */}
                          </div>
                        </div>
                      </div>
                  ))}
      </div>
    </div>
  )
}
