import React from 'react'

const Dropdown = ({contenedorVisible, toggleContenedor, imgs, onCloseAnimation}) => {

    return (
        <div className={`dropdown ${contenedorVisible && !onCloseAnimation ? "visible" : "dropdown-hidden"}`}>
        <div className="flex flex-col">
            <div className="dropdown-title flex w-full justify-between items-center p-16">
                <h2>Salta - 21 de septiembre 2023</h2>
                <img onClick={toggleContenedor} src="./src/img/close.svg" alt="" />
            </div>
            <div className="dropdown-gallery">
                {imgs.map((img, index) => (
                    <img key={index} src={img} alt={`imagen-${index}`} />
                ))}
            </div>
        </div>
    </div>
    )
}

export default Dropdown