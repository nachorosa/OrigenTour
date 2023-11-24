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
    id: 2,
    provincia: 'pepe',
    lugar: "Cataratas del iguazu",
    href: '#',
    imageSrc: '/src/img/cataratas.jpg',
    imageAlt: "cataratalorem s",
  }, {
    id: 3,
    provincia: 'pepe2',
    lugar: "Cataratas del iguazu",
    href: '#',
    imageSrc: '/src/img/cataratas.jpg',
    imageAlt: "clorem ataratas",
  }, {
    id: 4,
    provincia: 'pepe4',
    lugar: "Cataratas del iguazu",
    href: '#',
    imageSrc: '/src/img/cataratas.jpg',
    imageAlt: "catalorem atas",
  }, {
    id: 5,
    provincia: 'lorem aaa ',
    lugar: "Cataratas del iguazu",
    href: '#',
    imageSrc: '/src/img/cataratas.jpg',
    imageAlt: "catarlorem atas",
  }, {
    id: 6,
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
    <div className="bg-white py-12 px-6">
      <h2 className="font-semibold tracking-normal destinationTitle" >Principales Destinos</h2>
      <div className="mt-6 grid gap-6 containerCardDestination">
        {destinations.map((destiny) => (
          <div key={destiny.id} className="relative">
            <a href={`/destinos`}>
              <div className="w-full overflow-hidden cardDestination hover:opacity-75">
                <img className="w-full h-full object-cover object-center" src={destiny.imageSrc} alt={destiny.imageAlt} />
                <p className="absolute left-0 w-full p-2 text-white z-10 font-semibold tracking-normal cardDestinationPlace">{destiny.lugar}</p>
                <p className="absolute left-0 w-full p-2 text-white z-10 font-semibold tracking-normal cardDestinationPlace cardDestinationProvince">{destiny.provincia}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}