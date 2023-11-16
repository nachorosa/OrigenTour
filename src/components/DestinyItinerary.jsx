import React from 'react'

const DestinyItinerary = ({collapsablesItirenario, collapsableItinerarioList, handleCollapsableItinerario}) => {
    return (
        <div className="colapsables-container p-8 md:p-0 mt-6 md:mb-6 md:mt-0">
            <div className="colapsable-item">
                {collapsablesItirenario.map(c => (
                    <div className="mt-10">
                        <div className="colapsable-header flex items-center justify-between">
                            <h2 className="p-6 capitalize">Dia {c.dia}</h2>
                            <span onClick={() => handleCollapsableItinerario(c.dia)} className="mb-6 collapsable-arrow">🔽</span>
                        </div>
                        {collapsableItinerarioList[c.dia] ? <div className="colapsable-content">
                            <p className='mt-4 md:ml-6'>{c.descripcion}</p>
                        </div> : null}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DestinyItinerary