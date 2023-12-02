import { Carousel } from '@material-tailwind/react'
import "../css/promotion.css"
import { utcToZonedTime } from 'date-fns-tz'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import { useEffect, useState } from 'react';

export const CardPromotion = ({favoritos}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

     handleResize();

     window.addEventListener('resize', handleResize);

     return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const favoritosGroups = [];

  for (let i = 0; i < favoritos.length; i += isMobile ? 1 : 3) {
    favoritosGroups.push(favoritos.slice(i, i + (isMobile ? 1 : 3)));
  }
 
  return (
    <div>
      <h2 className="font-semibold tracking-normal px-8 titlePromotion">Promociones</h2>     
      <Carousel
        className="rounded-xl"
        transition={{ duration: 2 }}
        autoplay={true}
        autoplayDelay={10000}
        loop={true}
      >
        {favoritosGroups.map((group, index) => (
          <div key={index} className="flex p-8">
            {group.map((favorito, subIndex) => (
              <div key={subIndex} className={`mr-4 ${isMobile ? 'w-full h-full' : 'w-1/3 h-1/3'}`}>
                <a className="w-full" key={favorito.id} href={`destinos/detalle/${favorito.id}`}>
                  <div className="rounded-2xl flex bg-white containerPromotion">
                    <div className="containerPromotionImg">
                      <img className="w-full h-full object-cover rounded-l-2xl" src={favorito.fotos[0]} alt="" />
                    </div>
                    <div className="promotionText p-4">
                      <div className="flex justify-between items-center">
                        <p className='flex flex-wrap h-2'>
                        {
                          favorito.destinos.map((destino, index) => (
                            index === 0 || destino.provincia !== favorito.destinos[index - 1].provincia ? (
                              <h2 key={index}>
                                {`${destino.provincia}${index < favorito.destinos.length - 1 ? ' - ' : ''}`}
                              </h2>
                            ) : null
                          ))
                        }
                        </p>
                      </div>
                      <h2 className="promotionTitle font-bold mt-4 my-2 flex flex-wrap h-2">
                        {favorito.destinos.map((destino, index) => (
                          <h2 key={index}>
                            {`${destino.destino}${index < favorito.destinos.length - 1 ? ' - ' : ''}`}
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
                        {(() => {
                          const groupedDates = {};
                          favorito.salidas.forEach((fecha) => {
                            const date = new Date(fecha)
                            const zonedDate = utcToZonedTime(date, 'UTC')
                            const monthYear = format(zonedDate, 'MMM', { locale: es, timeZone: 'UTC' })

                            if (!groupedDates[monthYear]) {
                              groupedDates[monthYear] = []
                            }
                          })

                          const months = Object.keys(groupedDates);

                          return (
                            <div className='flex flex-wrap'>
                              {months.map((month, index) => (
                                <h4 className="textMonth flex flex-wrap" key={month}>
                                  <h4 key={month} className="textMonth">{` ${month} `}</h4>
                                  {index < months.length - 1 && ', '}
                                </h4>
                              ))}
                            </div>
                          );
                        })()}
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
  )
}
