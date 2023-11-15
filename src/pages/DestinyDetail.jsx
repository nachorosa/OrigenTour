import { Carousel } from "@material-tailwind/react"
import "../css/detailDestiny.css"

// const destinationDetail = [
//     {
//       id: 1,
//       destino: 'Salta',
//       tiempo: "4 noches",
//       hotel: "Hotel Posada Del Sol Salta",
//       descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum minus impedit aliquam soluta beatae quisquam voluptates totam corrupti rem at voluptate, harum, a magni eveniet, quia voluptatem quas optio eaque!",
//       precio: "40.000",
//       imageSrc: '/src/img/cataratas.jpg',
//       imageAlt: "cataratas",
//       mes1:"Enero: 1 - 4 - 6  - 7",
//       mes2:"Febrero: 4 - 6 - 9 - 12",
//       comida:"texto",
//       transporte:"texto",
//       actividades:"texto",
//       alojamiento:"texto",
//       dia1:"texto",
//       dia2:"texto",
//       dia3:"texto",
//       dia4:"texto"
//     },
 
//     // More destinationsdetail...
//   ]


export const DestinyDetail = () => {
  return (

    <div className="detailDestiny">
        
        <i className="fas fa-arrow-left detailDestiny1">Retroceder</i>

        <div className="detailDestiny9">

            <div className="detailDestiny2">
                <div className="detailDestiny3">
                    <h2>Salta</h2>
                    <h3>3 Noches</h3>
                </div>
                <h3>Salidas:</h3>
                <div className="detailDestiny4">
                    <h4>Enero: 1 - 2 - 4 - 5 </h4>
                    <h4>Febrero: 7 - 12 - 22 - 29 </h4>
                </div>
                <div className="detailDestiny5">
                    <img src="/src/img/bed.svg" alt="" />
                    <p>Hotel.....</p>
                </div>
            </div>

            <div className="detailDestiny6">
                <Carousel className="lg:rounded-xl" transition={{ duration: 2 }} autoplay={true} autoplayDelay={10000} loop={true} 
                    navigation={({ setActiveIndex, activeIndex, length }) => (
                        <div className="absolute bottom-5 left-2/4 z-50 flex -translate-x-2/4 gap-5">
                            {new Array(length).fill("").map((_, i) => (
                                <span key={i} className={`block h-4 cursor-pointer rounded-2xl transition-all content-[''] ${
                                    activeIndex === i ? "w-8 bg-stone-300" : "w-4 bg-stone-300/75"
                                    }`} onClick={() => setActiveIndex(i)}/>))}
                        </div>)}
                >
                    <img src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80" alt="image 2" className="h-full w-full object-cover"/>
                    <img src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80" alt="image 2" className="h-full w-full object-cover"/>
                    <img src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80" alt="image 2" className="h-full w-full object-cover"/>
                </Carousel>   
            </div>
      
            {/* <p className="detailDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet expedita delectus voluptatibus hic, nam, deserunt sunt provident cum modi animi natus aliquam sapiente assumenda accusamus molestias corporis pariatur qui labore!Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet expedita delectus voluptatibus hic, nam, deserunt sunt provident cum modi animi natus aliquam sapiente assumenda accusamus molestias corporis pariatur qui labore!</p> */}
           
        
        </div>

        <div>

            <div className="detailDestiny10">
                <div className="detailDestiny7">
                    <p>Precio por persona</p>
                    <h3>$ 40.000</h3>
                </div>
                <div className="detailDestiny8">
                    <p>Consultas y reservas</p>
                    <h3>11 2880 - 8745</h3>
                </div>
            </div>

            <div>
                itinerario
            </div>

        </div>

    </div>

  )
}
