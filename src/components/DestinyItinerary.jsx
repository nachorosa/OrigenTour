import React from 'react';

const DestinyItinerary = ({ collapsablesItirenario, collapsableItinerarioList, handleCollapsableItinerario }) => {
  return (
    <div className="colapsables-container p-8 md:p-0 mt-6 md:mb-6 md:mt-0">
      <div className="colapsable-item">
        {collapsablesItirenario.map((c, index) => (
          <div onClick={() => handleCollapsableItinerario(c.dia)} className="mt-10" key={c.dia}>
            <div className="colapsable-header flex items-center justify-between">
              <h2 className="p-6 capitalize">Dia {index + 1}</h2>
              <span className="mb-6 collapsable-arrow">
                {collapsableItinerarioList[c.dia] ? (
                  <img src="/src/img/arrow_forward_ios_up.svg" alt="flecha abierta" />
                ) : (
                  <img src="/src/img/arrow_forward_ios_down.svg" alt="flecha cerrado" />
                )}
              </span>
            </div>
            {collapsableItinerarioList[c.dia] ? (
              <div className="colapsable-content">
                <p className="mt-4 md:ml-6">{c}</p>
              </div>
            ) : (
              <div className="closed-content">
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinyItinerary;