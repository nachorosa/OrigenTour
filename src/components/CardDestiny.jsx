import { format, utcToZonedTime } from 'date-fns-tz';
import es from 'date-fns/esm/locale/es/index';
import "../css/cardDestiny.css"
import LoadingOval from './LoadingOval';

export const CardDestiny = ({ viajes, loading }) => {

  return (
    <>
      <div className="px-8 pb-8">
        <div className="flex flex-wrap justify-center gap-8">
          {loading ? <div className="spinner-container">
            <LoadingOval />
          </div> : viajes.map((viaje, index) => (
            <div key={index} className="relative containerCardDestiny">
              <p style={{ top: "22.5rem" }} className="absolute text-center text-white cardDetailNight ">{viaje.dias} Dias - {viaje.noches} Noches</p>
              <img className="rounded-t-lg w-full h-1/2 -z-1" src={viaje?.fotos[0] || "./src/img/aboutUs.jpg"} alt={""} />
              <div className="font-semibold tracking-normal cardDestinyData ">
                <div className="h-40 flex flex-row justify-between cardDestinyText ">
                  {viaje.destinos.length === 1 ? (
                    <h2>{viaje.destinos[0].destino}</h2>
                  ) : (
                    <div className="flex flex-wrap h-2">
                      {viaje.destinos.map((destino, index) => (
                        <h2 key={index}>
                          {`${destino.destino}${index < viaje.destinos.length - 1 ? ' - ' : ' '}`}
                        </h2>
                      ))}
                    </div>
                  )}
                  <div className='flex flex-col' >
                    {(() => {
                      const groupedDates = {};
                      viaje.salidas.forEach((fecha) => {
                        let date;

                        if (Array.isArray(fecha)) {
                          // Si es un array, construir una fecha a partir de sus elementos
                          date = new Date(fecha[0], fecha[1] - 1, fecha[2]);
                        } else {
                          // Si no es un array, asumir que es una cadena de fecha ISO 8601
                          date = new Date(fecha);
                        }

                        const zonedDate = utcToZonedTime(date, 'UTC');
                        const monthYear = format(zonedDate, 'MMM', { locale: es, timeZone: 'UTC' });

                        if (!groupedDates[monthYear]) {
                          groupedDates[monthYear] = [];
                        }

                        groupedDates[monthYear].push(format(zonedDate, 'dd', { locale: es, timeZone: 'UTC' }));
                      });

                      return Object.entries(groupedDates).map(([monthYear, days]) => (
                        <h4 className="textMonth" key={monthYear}>
                          {`${monthYear}: ${days.join(' - ')}`}
                        </h4>
                      ));
                    })()}
                  </div>
                </div>
                <div className="flex items-center py-2">
                  <img className="iconHotel" src="/src/img/bed.svg" alt="" />
                  {viaje.destinos.length > 1 ? (
                    <p className="cardDestinyHotelText p-2" >Este paquete contiene más de 1 hotel</p>
                  ) : (
                    viaje.destinos.map((destino, index) => (
                      <p key={index} className="cardDestinyHotelText p-2">
                        {destino.hotel}
                      </p>
                    ))
                  )}
                </div>
                <div style={{ bottom: "1rem", left: "0rem" }} className="absolute flex items-center justify-evenly text-center w-full">

                  <h3 className="cardDestinyPrice">
                    {viaje.precio.toLocaleString('es-AR', {
                      style: 'currency',
                      currency: 'ARS',
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}</h3>
                  <a className="cardDestinyDetail" href={`destinos/detalle/${viaje.id}`}>Mas Informacion</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}