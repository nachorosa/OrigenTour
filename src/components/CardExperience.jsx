import "../css/experience.css"

const destinations = [
    {
        id: 1,
        lugar: 'Misisones',
        fecha: "21 de Septiembre 2023",
        href: '#',
        imageSrc: '/src/img/cataratas.jpg',
        imageAlt: "cataratas",
      },
      {
        id: 1,
        lugar: 'Misisones',
        fecha: "21 de Septiembre 2023",
        href: '#',
        imageSrc: '/src/img/cataratas.jpg',
        imageAlt: "cataratas",
      },
      {
        id: 1,
        lugar: 'Misisones',
        fecha: "21 de Septiembre 2023",
        href: '#',
        imageSrc: '/src/img/cataratas.jpg',
        imageAlt: "cataratas",
      },
     
      {
        id: 1,
        lugar: 'Misisones',
        fecha: "21 de Septiembre 2023",
        href: '#',
        imageSrc: '/src/img/cataratas.jpg',
        imageAlt: "cataratas",
      },
     
      {
        id: 1,
        lugar: 'Misisones',
        fecha: "21 de Septiembre 2023",
        href: '#',
        imageSrc: '/src/img/cataratas.jpg',
        imageAlt: "cataratas",
      },
     
      {
        id: 1,
        lugar: 'Misisones',
        fecha: "21 de Septiembre 2023",
        href: '#',
        imageSrc: '/src/img/cataratas.jpg',
        imageAlt: "cataratas",
      },
     
 
    // More experience...
  ]
  
  export const CardExperience = () => {
    return (
        <div >
          <h2 className="container-title">Nuestros Viajes</h2>
            <div className="container-destination-card" >
                {destinations.map((destiny) => (
                    <div key={destiny.id} className="card-destination">
                        <div className="card-destination-detail">
                            <img src={destiny.imageSrc} alt={destiny.imageAlt}/>
                            <p className="card-destination-detail-text">{destiny.lugar} </p>
                            <p className="card-destination-detail-text card-destination-detail-text-province">{destiny.fecha} </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
  }
  

  
   