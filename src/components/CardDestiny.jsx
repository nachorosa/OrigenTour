import { useEffect, useState } from "react"
import "../css/cardDestiny.css"

const destinations = [
  {
    id: 1,
    destino: 'Salta',
    noches: "4",
    hotel: "Hotel Posada Del Sol Salta",
    precio: "40.000",
    href: '#',
    imageSrc: '/src/img/cataratas.jpg',
    imageAlt: "cataratas",
    mes: "enero",
    dias: "5"
  },
  {
    id: 1,
    destino: 'Salta',
    noches: "4",
    hotel: "Hotel Posada Del Sol Salta",
    precio: "40.000",
    href: '#',
    imageSrc: '/src/img/cataratas.jpg',
    imageAlt: "cataratas",
    mes: "enero",
    dias: "5"
  },
  {
    id: 1,
    destino: 'Salta',
    noches: "4",
    hotel: "Hotel Posada Del Sol Salta",
    precio: "40.000",
    href: '#',
    imageSrc: '/src/img/cataratas.jpg',
    imageAlt: "cataratas",
    mes: "enero",
    dias: "5"
  },
  {
    id: 1,
    destino: 'Salta',
    noches: "4",
    hotel: "Hotel Posada Del Sol Salta",
    precio: "40.000",
    href: '#',
    imageSrc: '/src/img/cataratas.jpg',
    imageAlt: "cataratas",
    mes: "enero",
    dias: "5"
  },
  {
    id: 1,
    destino: 'Salta',
    noches: "4",
    hotel: "Hotel Posada Del Sol Salta",
    precio: "40.000",
    href: '#',
    imageSrc: '/src/img/cataratas.jpg',
    imageAlt: "cataratas",
    mes: "enero",
    dias: "5"
  },
  {
    id: 1,
    destino: 'Salta',
    noches: "4",
    hotel: "Hotel Posada Del Sol Salta",
    precio: "40.000",
    href: '#',
    imageSrc: '/src/img/cataratas.jpg',
    imageAlt: "cataratas",
    mes: "enero",
    dias: "5"
  },
  {
    id: 1,
    destino: 'Salta',
    noches: "4 noches",
    hotel: "Hotel Posada Del Sol Salta",
    precio: "40.000",
    href: '#',
    imageSrc: '/src/img/cataratas.jpg',
    imageAlt: "cataratas",
    mes: "enero",
    dias: "5"
  },
  {
    id: 1,
    destino: 'Salta',
    noches: "4 noches",
    hotel: "Hotel Posada Del Sol Salta",
    precio: "40.000",
    href: '#',
    imageSrc: '/src/img/cataratas.jpg',
    imageAlt: "cataratas",
    mes: "enero",
    dias: "5"
  },

  // More destinations...
]

export const CardDestiny = () => {

  const [viajes, setViajes] = useState([])


  useEffect(() => {
    fetch("http://localhost:8080/api/viajes", {
      method: 'GET',
      headers: {
        "content-type": "application/json"
      }
    }).then(res => res.json())
      .then(data => setViajes(data))
  }, [])

  return (
    <>
    <div className="px-8 pb-8">
      <div className="flex flex-wrap justify-center gap-8">
        {destinations.map((destiny) => (
          <div key={destiny.id} className="relative containerCardDestiny">
            <p className="absolute top-1/2 text-center text-white cardDetailNight ">{destiny.dias} Dias - {destiny.noches} Noches</p>
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
                <p className="cardDestinyHotelText p-2" >{destiny.hotel}</p>
              </div>
              <div className="flex items-center justify-between px-2">
                <h3 className="cardDestinyPrice">${destiny.precio}</h3>
                <a className="cardDestinyDetail" href={`destinos/detalle/${destiny.id}`}>Mas Informacion</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
        <div className="px-8 pb-8">
        <div className="flex flex-wrap justify-center gap-8">
          {viajes.map((viaje, index) => (
            <div key={index} className="relative containerCardDestiny">
              <p className="absolute top-1/2 text-center text-white cardDetailNight ">{viaje.dias} Dias - {viaje.noches} Noches</p>
              <img className="rounded-t-lg w-full h-1/2 -z-1" src="./src/img/aboutUs.jpg" alt={""} />
              <div className="h-52 font-semibold tracking-normal cardDestinyData">
                <div className="flex flex-row justify-between cardDestinyText ">
                  <h2 className="py-2">{viaje.destinos[0].destino}</h2>
                  <div className="flex flex-col">
                    <p>{viaje.salidas[0]}</p>
                    <p>{viaje.salidas[1]}</p>
                  </div>
                </div>
                <div className="flex items-center	py-2">
                  <img className="iconHotel" src="/src/img/bed.svg" alt="" />
                  <p className="cardDestinyHotelText p-2" >{viaje.destinos[0].hotel}</p>
                </div>
                <div className="flex items-center justify-between px-2">
                  <h3 className="cardDestinyPrice">${viaje.precio}</h3>
                  <a className="cardDestinyDetail" href={`destinos/detalle/${viaje.id}`}>Mas Informacion</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </>
  )
}
