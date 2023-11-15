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
            <h2 className="titlePromotion">Principales Destinos</h2>
            <div className="promotionSection">
                {listPromotionDestiny.map((destinyPromotion) => (
                    <>
                    <div className="container-promotion">
                        <div className="container-promotion-image">
                            <img src={destinyPromotion.imageSrc} alt={destinyPromotion.imageSrc} />
                        </div>
                        <div className="text-promotion">
                            <div className="title-promotion">
                                <p>{destinyPromotion.provincia}</p>
                                <h2>{destinyPromotion.descuento}% OFF</h2>
                            </div>
                            <h2 className="text-promotion-title">{destinyPromotion.lugar}</h2>
                            <div className="text-promotion-info">
                                <h3>{destinyPromotion.precio}</h3>
                                <h4>{destinyPromotion.fecha}</h4>
                            </div>
                        </div>
                    </div></>
                ))}
            </div>
        </div>
  )
}