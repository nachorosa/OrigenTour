const Dropdown = ({contenedorVisible, toggleContenedor, imgs, onCloseAnimation}) => {

    return (
        <div className={`fixed bottom-0	left-0 w-full bg-white z-50 overflow-auto dropdown ${contenedorVisible && !onCloseAnimation ? "visible" : "dropdown-hidden"}`}>
        <div className="flex flex-col">
            <div className="dropdown-title flex w-full justify-between items-center p-16">
                <h2 className='font-semibold tracking-normal' >Salta - 21 de septiembre 2023</h2>
                <img className='cursor-pointer' onClick={toggleContenedor} src="./src/img/close.svg" alt="" />
            </div>
            <div className="flex flex-wrap w-full justify-around items-center">
                {imgs.map((img, index) => (
                    <img className='dropdownImg' key={index} src={img} alt={`imagen-${index}`} />
                ))}
            </div>
        </div>
    </div>
    )
}

export default Dropdown