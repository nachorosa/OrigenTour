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
        id: 1,
        provincia: 'Cordoba',
        lugar: "Villa General Belgrano",
        href: '#',
        imageSrc: '/src/img/cordoba.svg',
        imageAlt: "cordoba",
        precio: "10.000",
        fecha: "26 Ago - 30 Ago",
        descuento: "30"
      }
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