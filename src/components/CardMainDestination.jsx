import "../css/mainDestination.css"

const destinations = [
    {
        id: 1,
        provincia: 'Misisones',
        lugar: "Cataratas del iguazu",
        href: '/destinos/detalle',
        imageSrc: '/src/img/cataratas.jpg',
        imageAlt: "cataratas",
      },
      {
        id: 1,
        provincia: 'pepe',
        lugar: "Cataratas del iguazu",
        href: '#',
        imageSrc: '/src/img/cataratas.jpg',
        imageAlt: "cataratalorem s",
      },    {
        id: 1,
        provincia: 'pepe2',
        lugar: "Cataratas del iguazu",
        href: '#',
        imageSrc: '/src/img/cataratas.jpg',
        imageAlt: "clorem ataratas",
      },    {
        id: 1,
        provincia: 'pepe4',
        lugar: "Cataratas del iguazu",
        href: '#',
        imageSrc: '/src/img/cataratas.jpg',
        imageAlt: "catalorem atas",
      },    {
        id: 1,
        provincia: 'lorem aaa ',
        lugar: "Cataratas del iguazu",
        href: '#',
        imageSrc: '/src/img/cataratas.jpg',
        imageAlt: "catarlorem atas",
      },    {
        id: 1,
        provincia: 'lorem lorem ',
        lugar: "Clorem ",
        href: '#',
        imageSrc: '/src/img/cataratas.jpg',
        imageAlt: "cataratas",
      },
 
    // More destinations...
  ]
  
  export const CardMainDestination = () => {
    return (
      <a href={`/destinos?&salta`}>
          <div className="container-destination">
            <h2>Principales Destinos</h2>
              <div className="container-destination-card">
                  {destinations.map((destiny) => (
                      <div key={destiny.id} className="card-destination">
                          <div className="card-destination-detail">
                              <img src={destiny.imageSrc} alt={destiny.imageAlt}/>
                              <p className="card-destination-detail-text">{destiny.lugar} </p>
                              <p className="card-destination-detail-text card-destination-detail-text-province">{destiny.provincia} </p>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
        </a>
    )
  }
  

  
   