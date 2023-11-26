// import { useEffect, useState } from "react";
// import "../css/promotion.css";

// export const CardPromotion = () => {
//   const [favorito, setFavorito] = useState([]);
//   const [promotionsPerPage, setPromotionsPerPage] = useState(3);
//   const [currentPage, setCurrentPage] = useState(1);

//   const getFavorito = () => {
//     fetch("http://localhost:8080/api/viajes/favoritos", {
//       method: "GET",
//       headers: {
//         "content-type": "application/json"
//       }
//     })
//       .then((res) => res.json())
//       .then((data) => setFavorito(data))
//       .catch((error) => console.error("Error fetching favoritos:", error));
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth <= 1023) {
//         setPromotionsPerPage(1);
//       } else {
//         setPromotionsPerPage(3);
//         setCurrentPage(1);
//       }
//     };

//     getFavorito();

//     handleResize();
//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   const handleNextPage = () => {
//     setCurrentPage((prevPage) => (prevPage === totalPages ? 1 : prevPage + 1));
//   };

//   const handlePrevPage = () => {
//     setCurrentPage((prevPage) => (prevPage === 1 ? totalPages : prevPage - 1));
//   };

//   const startIdx = (currentPage - 1) * promotionsPerPage;
//   const endIdx = startIdx + promotionsPerPage;
//   const currentPromotions = favorito.slice(startIdx, endIdx);

//   const totalPages = Math.ceil(favorito.length / promotionsPerPage);

//   return (
//     <div>
//       <h2 className="font-semibold tracking-normal px-8 titlePromotion">Principales Destinos</h2>
//       <div className="flex justify-center">
//         {totalPages > 1 && (
//           <div className="flex">
//             <button className="p-6 bg-white" onClick={handlePrevPage}><img src="/src/img/arrow_back_ios_new.svg" alt="flecha atras" /></button>
//           </div>
//         )}
//         <div className="flex w-full justify-center gap-8">
//           {favorito.length > 0 ? (
//             currentPromotions.map((destinyPromotion) => (
//               <a className="w-full" key={destinyPromotion.id} href={`destinos/detalle/${destinyPromotion.id}`}>
//                 <div className="rounded-2xl flex bg-white containerPromotion">
//                   <div className="containerPromotionImg">
//                     <img className="w-full h-full object-cover rounded-l-2xl" src='/src/img/cordoba.svg' alt="" />
//                   </div>
//                   <div className="promotionText p-4">
//                     <div className="flex justify-between items-center">
//                       <p>
//                         {destinyPromotion.destinos.map((destino, index) => (
//                           <h2 key={index}>
//                             {`${destino.provincia.nombre}${index < destinyPromotion.destinos.length - 1 ? ' - ' : ''}`}
//                           </h2>
//                         ))}
//                       </p>
//                     </div>
//                     <h2 className="promotionTitle font-bold mt-4 my-2">
//                       {destinyPromotion.destinos.map((destino, index) => (
//                         <h2 key={index}>
//                           {`${destino.nombre}${index < destinyPromotion.destinos.length - 1 ? ' - ' : ''}`}
//                         </h2>
//                       ))}
//                     </h2>
//                     <div className="flex flex-col justify-between	 promotionInfo">
//                       <h3 className="font-bold tracking-normal" >
//                         {destinyPromotion.precio.toLocaleString('es-AR', {
//                           style: 'currency',
//                           currency: 'ARS',
//                           minimumFractionDigits: 0,
//                           maximumFractionDigits: 0,
//                         })}
//                       </h3>
//                       <h4 className="font-thin tracking-normal">{destinyPromotion.salidas[0]}</h4>
//                     </div>
//                   </div>
//                 </div>
//               </a>
//             ))
//           ) : (
//             <p>Cargando favoritos...</p>
//           )}
//         </div>
//         {totalPages > 1 && (
//           <div className="flex">
//             <button className="p-6 bg-white" onClick={handleNextPage}><img src="/src/img/arrow_forward_ios.svg" alt="flecha adelante" /></button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };
 
import { useEffect, useState } from 'react';
import { Carousel } from '@material-tailwind/react';
import "../css/promotion.css";

export const CardPromotion = () => {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    // Realiza la solicitud para obtener los favoritos
    fetch("http://localhost:8080/api/viajes/favoritos", {
      method: "GET",
      headers: {
        "content-type": "application/json"
      }
    })
    .then((res) => res.json())
    .then((data) => setFavoritos(data))
    .catch((error) => console.error("Error fetching favoritos:", error));
  }, []); // Se ejecuta solo una vez al montar el componente

  const favoritosGroups = [];

  // Dividir los favoritos en grupos de tres
  for (let i = 0; i < favoritos.length; i += 3) {
    favoritosGroups.push(favoritos.slice(i, i + 3));
  }

  return (
    <div>
      <Carousel
        className="rounded-xl"
        transition={{ duration: 2 }}
        autoplay={true}
        autoplayDelay={10000}
        loop={true}
      >
        {favoritosGroups.map((group, index) => (
          <div key={index} className="flex">
            {group.map((favorito, subIndex) => (
              <div key={subIndex} className="mr-4 w-1/3 h-1/3">
                <a className="w-full" key={favorito.id} href={`destinos/detalle/${favorito.id}`}>
                  <div className="rounded-2xl flex bg-white containerPromotion">
                    <div className="containerPromotionImg">
                      <img className="w-full h-full object-cover rounded-l-2xl" src={favorito.imageSrc} alt="" />
                    </div>
                    <div className="promotionText p-4">
                      <div className="flex justify-between items-center">
                        <p>
                          {favorito.destinos.map((destino, index) => (
                            <h2 key={index}>
                              {`${destino.provincia.nombre}${index < favorito.destinos.length - 1 ? ' - ' : ''}`}
                            </h2>
                          ))}
                        </p>
                      </div>
                      <h2 className="promotionTitle font-bold mt-4 my-2">
                        {favorito.destinos.map((destino, index) => (
                          <h2 key={index}>
                            {`${destino.nombre}${index < favorito.destinos.length - 1 ? ' - ' : ''}`}
                          </h2>
                        ))}
                      </h2>
                      <div className="flex flex-col justify-between	 promotionInfo">
                        <h3 className="font-bold tracking-normal" >
                          {favorito.precio.toLocaleString('es-AR', {
                            style: 'currency',
                            currency: 'ARS',
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                          })}
                        </h3>
                        <h4 className="font-thin tracking-normal">{favorito.salidas[0]}</h4>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
};
