// import "../css/cardDestiny.css"

// const destinations = [
//   {
//       id: 1,
//       destino: 'Salta',
//       tiempo: "4 noches - Novimebre",
//       hotel: "Hotel Posada Del Sol Salta",
//       precio: "40.000",
//       href: '#',
//       imageSrc: '/src/img/cataratas.jpg',
//       imageAlt: "cataratas",
//     },

//   // More destinations...
// ]

// export const CardDestiny = () => {
//   return (
//     <div className="container-card-destiny">
//       <p className="text">4 noches - Novimebre</p>
//       <img src="/src/img/cataratas.jpg" alt="" />
//       <div className="card-destiny">
//         <h2>Salta</h2>
//         <div className="card-destiny-hotel">
//           <img src="/src/img/bed.svg" alt="" />
//         <p>Hotel Posada Del Sol Salta</p>
//         </div>
//         <div className="card-destiny-price">
//           <h3>$40.000</h3>
//           <a href="#">Mas Informacion</a>
//         </div>
//       </div>
//     </div>
//   )
// }


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
  return (

    <div className="prueba001">

    <div className="prueba002">
    {destinations.map((destiny) => (
                    <div key={destiny.id} className="container-card-destiny">
                      <p className="text">{destiny.tiempo}</p>
                      <img src={destiny.imageSrc} alt={destiny.imageAlt} />
                      <div className="card-destiny">
                        <h2>{destiny.destino}</h2>
                        <div className="card-destiny-hotel">
                          <img src="/src/img/bed.svg" alt="" />
                          <p>{destiny.hotel}</p>
                        </div>
                        <div className="card-destiny-price">
                          <h3>${destiny.precio}</h3>
                          <a href="#">Mas Informacion</a>
                        </div>
                      </div>
                    </div>
                ))}
    </div>


    

    </div>
  )
}
