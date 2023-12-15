import { Link } from "react-router-dom"
import "../css/mainDestination.css"

const destinations = [
  {
    id: 1,
    provincia: 'Buenos Aires',
    lugar: "Mar del plata",
    href: '/destinos',
    imageSrc: '/src/img/cardMainDestiny/mardelplata.jpg',
    imageAlt: "Mar del plata",
  },
  {
    id: 2,
    provincia: 'Buenos Aires',
    lugar: "Villa gesell",
    href: '/destinos',
    imageSrc: '/src/img/cardMainDestiny/villagessel.jpg',
    imageAlt: "Villa gesell",
  }, {
    id: 3,
    provincia: 'Cordoba',
    lugar: "Carlos paz",
    href: '/destinos',
    imageSrc: '/src/img/cardMainDestiny/carlospaz.jpg',
    imageAlt: "Carlos paz",
  }, {
    id: 4,
    provincia: 'Neuquen',
    lugar: "Caviahue",
    href: '/destinos',
    imageSrc: '/src/img/cardMainDestiny/caviahue.jpg',
    imageAlt: "Caviahue",
  }, {
    id: 5,
    provincia: 'Salta',
    lugar: "Salta",
    href: '/destinos',
    imageSrc: '/src/img/cardMainDestiny/salta.jpg',
    imageAlt: "salta",
  }, {
    id: 6,
    provincia: 'Buenos Aires',
    lugar: "Pinamar",
    href: '/destinos',
    imageSrc: '/src/img/cardMainDestiny/pinamar.jpg',
    imageAlt: "pinamar",
  },
 {
    id: 7,
    provincia: 'Buenos Aires',
    lugar: "San bernardo",
    href: '/destinos',
    imageSrc: '/src/img/cardMainDestiny/sanbernardo.jpg',
    imageAlt: "sanbernardo",
  },
  {
    id: 8,
    provincia: 'Mendoza',
    lugar: "Mendoza",
    href: '/destinos',
    imageSrc: '/src/img/cardMainDestiny/mendoza.jpg',
    imageAlt: "mendoza",
  },
]

export const CardMainDestination = () => {
  return (
    <div className="bg-white py-12 px-6">
      <h2 className="font-semibold tracking-normal destinationTitle" >Principales Destinos</h2>
      <div className="mt-6 grid gap-6 containerCardDestination">
        {destinations.map((destiny) => (
          <div key={destiny.id} className="relative">
            <a href={destiny.href}>
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