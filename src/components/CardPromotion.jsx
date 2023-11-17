import "../css/promotion.css"

const listPromotionDestiny = [
  {
      id: 1,
      provincia: 'Cordoba',
      lugar: "Villa General Belgrano",
      href: '#',
      imageSrc: '/src/img/cordoba.svg',
      imageAlt: "cordoba",
      precio: "10.000",
      fecha: "26 Ago - 30 Ago",
      descuento: "30"
    },
    {
      id: 2,
      provincia: 'Buenos Aires',
      lugar: "Villa Gessel",
      href: '#',
      imageSrc: '/src/img/cordoba.svg',
      imageAlt: "cordoba",
      precio: "200.000",
      fecha: "10 Ago - 29 Ago",
      descuento: "10"
    },
    {
      id: 3,
      provincia: 'Chubut',
      lugar: "Rawson",
      href: '#',
      imageSrc: '/src/img/cordoba.svg',
      imageAlt: "cordoba",
      precio: "100.000",
      fecha: "1 Ago - 10 Ago",
      descuento: "15"
    },
    {
      id: 4,
      provincia: 'Salta',
      lugar: "Capital De Salta",
      href: '#',
      imageSrc: '/src/img/cordoba.svg',
      imageAlt: "cordoba",
      precio: "50.000",
      fecha: "12 Ago - 22 Ago",
      descuento: "20"
    },
    {
      id: 5,
      provincia: 'Mendoza',
      lugar: "Capital de Mendoza",
      href: '#',
      imageSrc: '/src/img/cordoba.svg',
      imageAlt: "cordoba",
      precio: "29.000",
      fecha: "6 Ago - 12 Ago",
      descuento: "60"
    },
    {
      id: 6,
      provincia: 'Entre Rios',
      lugar: "Parana",
      href: '#',
      imageSrc: '/src/img/cordoba.svg',
      imageAlt: "cordoba",
      precio: "120.000",
      fecha: "22 Ago - 29 Ago",
      descuento: "10"
    },

  // More promotion...
]
  
  export const CardPromotion = () => {
 
    return (
            <div>
                <h2 className="font-semibold tracking-normal px-8 titlePromotion">Principales Destinos</h2>
                <div className="p-8 flex flex-nowrap justify-center items-center gap-8">
                    {listPromotionDestiny.map((destinyPromotion) => (
                        <>
                        <a href={`/destinos/detalle`}>
                        <div className="rounded-2xl flex w-full bg-white containerPromotion">
                            <div className="containerPromotionImg">
                                <img className="w-full h-full object-cover rounded-l-2xl" src={destinyPromotion.imageSrc} alt={destinyPromotion.imageSrc} />
                            </div>
                            <div className="promotionText p-4">
                                <div className="flex justify-between items-center">
                                    <p>{destinyPromotion.provincia}</p>
                                    <h2 className="flex text-white items-center justify-center w-24 h-10 promotionOff" >{destinyPromotion.descuento}% OFF</h2>
                                </div>
                                <h2 className="promotionTitle font-bold mt-4 my-2">{destinyPromotion.lugar}</h2>
                                <div className="flex flex-col justify-between	 promotionInfo">
                                    <h3 className="font-bold tracking-normal" >{destinyPromotion.precio}</h3>
                                    <h4 className="font-thin tracking-normal">{destinyPromotion.fecha}</h4>
                                </div>
                            </div>
                        </div>
                        </a></>
                    ))}
                </div>
            </div>
  )
}