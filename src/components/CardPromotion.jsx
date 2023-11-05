import "../css/promotion.css"

export const CardPromotion = () => {
  
    return (
    <section>
        <div className="container-promotion">
            <div className="container-promotion-image">
                <img src="/src/img/cordoba.svg" alt="CORDOBA"/>
            </div>
            <div className="text-promotion">
                <div className="title-promotion">
                    <p>Cordoba</p>
                    <h2>30% OFF</h2>
                </div>
                <h2 className="text-promotion-title">Villa General Belgrano</h2>
                <div className="text-promotion-info">
                    <h3>$10.000</h3>
                    <h4>26 Ago - 30 Ago</h4>
                </div>
            </div>
        </div>
    </section>
  )
}