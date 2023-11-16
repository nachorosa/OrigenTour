import { useParams } from "react-router-dom"
import "../css/cardDestiny.css"

const destinations = [
  {
    id: 1,
    destino: 'Salta',
    tiempo: "4 noches - Novimebre",
    hotel: "Hotel Posada Del Sol Salta",
    precio: "40.000",
    href: '#',
    imageSrc: '/src/img/cataratas.jpg',
    imageAlt: "cataratas",
  },
  {
    id: 1,
    destino: 'Salta',
    tiempo: "4 noches - Novimebre",
    hotel: "Hotel Posada Del Sol Salta",
    precio: "40.000",
    href: '#',
    imageSrc: '/src/img/cataratas.jpg',
    imageAlt: "cataratas",
  },
  {
    id: 1,
    destino: 'Salta',
    tiempo: "4 noches - Novimebre",
    hotel: "Hotel Posada Del Sol Salta",
    precio: "40.000",
    href: '#',
    imageSrc: '/src/img/cataratas.jpg',
    imageAlt: "cataratas",
  },
  {
    id: 1,
    destino: 'Salta',
    tiempo: "4 noches - Novimebre",
    hotel: "Hotel Posada Del Sol Salta",
    precio: "40.000",
    href: '#',
    imageSrc: '/src/img/cataratas.jpg',
    imageAlt: "cataratas",
  },
  {
    id: 1,
    destino: 'Salta',
    tiempo: "4 noches - Novimebre",
    hotel: "Hotel Posada Del Sol Salta",
    precio: "40.000",
    href: '#',
    imageSrc: '/src/img/cataratas.jpg',
    imageAlt: "cataratas",
  },
  {
    id: 1,
    destino: 'Salta',
    tiempo: "4 noches - Novimebre",
    hotel: "Hotel Posada Del Sol Salta",
    precio: "40.000",
    href: '#',
    imageSrc: '/src/img/cataratas.jpg',
    imageAlt: "cataratas",
  },
  {
    id: 1,
    destino: 'Salta',
    tiempo: "4 noches - Novimebre",
    hotel: "Hotel Posada Del Sol Salta",
    precio: "40.000",
    href: '#',
    imageSrc: '/src/img/cataratas.jpg',
    imageAlt: "cataratas",
  },
  {
    id: 1,
    destino: 'Salta',
    tiempo: "4 noches - Novimebre",
    hotel: "Hotel Posada Del Sol Salta",
    precio: "40.000",
    href: '#',
    imageSrc: '/src/img/cataratas.jpg',
    imageAlt: "cataratas",
  },

  // More destinations...
]

export const CardDestiny = () => {

  const {id} = useParams()

  console.log(id);

  fetch("http://localhost:8080/api/destinos/1" + id)

  return (

    <div className="prueba001">

    <div className="prueba002">
    {destinations.map((destiny) => (
                    <div key={destiny.id} className="container-card-destiny">
                      <p className="container-card-destiny-text">{destiny.tiempo}</p>
                      <img className="container-card-destiny-img" src={destiny.imageSrc} alt={destiny.imageAlt} />
                      <div className="card-destiny">
                        <h2>{destiny.destino}</h2>
                        <div className="card-destiny-hotel">
                          <img className="card-destiny-hotel-img" src="/src/img/bed.svg" alt="" />
                          <p className="card-destiny-hotel-p" >{destiny.hotel}</p>
                        </div>
                        <div className="card-destiny-price">
                          <h3 className="card-destiny-price-h3" >${destiny.precio}</h3>
                          <a className="card-destiny-price-a" href={`destinos/detalle`}>Mas Informacion</a>
                          {/* <a className="card-destiny-price-a" href={`destinos/detalle/${destiny.id}`}>Mas Informacion</a> */}
                        </div>
                      </div>
                    </div>
                ))}
    </div>


    

    </div>
  )
}
