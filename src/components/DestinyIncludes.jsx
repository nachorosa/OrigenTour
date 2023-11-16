import React from 'react'

const DestinyIncludes = ({ collapsablesServicios, collapsableList, handleCollapsable }) => {
    return (
        <div className="colapsables-container p-8 md:p-0 mt-6 md:mb-6 md:mt-0">
            <div className="colapsable-item">
                {collapsablesServicios.map(c => (
                    <div className="mt-10">
                        <div className="colapsable-header flex items-center justify-between">
                            <h2 className="pl-4 pb-6 capitalize">{c.name}</h2>
                            <span onClick={() => handleCollapsable(c.name)} className="mb-6 collapsable-arrow">🔽</span>
                        </div>
                        {collapsableList[c.name] ? <div className="colapsable-content">
                            <ul>
                                {c.content.map(i => (
                                    <li>{i}</li>
                                ))}
                            </ul>
                        </div> : null}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DestinyIncludes