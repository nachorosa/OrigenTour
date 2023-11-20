import { useState } from "react"
import Dropdown from './Dropdown'
import "../css/experience.css"

const destinations = [
    {
        id: 1,
        lugar: 'Misisones',
        fecha: "21 de Septiembre 2023",
        href: '#',
        imageSrc: '/src/img/cataratas.jpg',
        imageAlt: "cataratas",
        imgs: ["https://lh3.googleusercontent.com/pw/ADCreHfDIAg4rYFapNNrVJaICvNdtQrb10MPHznwn7-FIMzKIFhrWb6SqGGZLsf44ZqcKKg6zJSNCCIdHn0VZf3Slh72kwYoxxnQVuDIcD8oKqyamGZIXzCSqg3W-W8wmaMr5rflW8lipcQTW30dGIzoRIa3=w722-h963-s-no-gm"]
    },
    {
        id: 2,
        lugar: 'Misisones',
        fecha: "21 de Septiembre 2023",
        href: '#',
        imageSrc: '/src/img/cataratas.jpg',
        imageAlt: "cataratas",
        imgs: []
    },
    {
        id: 3,
        lugar: 'Misisones',
        fecha: "21 de Septiembre 2023",
        href: '#',
        imageSrc: '/src/img/cataratas.jpg',
        imageAlt: "cataratas",
        imgs: []
    },

    {
        id: 4,
        lugar: 'Misisones',
        fecha: "21 de Septiembre 2023",
        href: '#',
        imageSrc: '/src/img/cataratas.jpg',
        imageAlt: "cataratas",
        imgs: []
    },

    {
        id: 5,
        lugar: 'Misisones',
        fecha: "21 de Septiembre 2023",
        href: '#',
        imageSrc: '/src/img/cataratas.jpg',
        imageAlt: "cataratas",
        imgs: []
    },

    {
        id: 6,
        lugar: 'Misisones',
        fecha: "22 de Septiembre 2023",
        href: '#',
        imageSrc: '/src/img/cataratas.jpg',
        imageAlt: "cataratas",
        imgs: []
    },
    // More experience...
]

export const CardExperience = () => {

    const [contenedorVisible, setContenedorVisible] = useState(false);
    const [onCloseAnimation, setOnCloseAnimation] = useState(false);
    const [viaje, setViaje] = useState({})

    const toggleContenedor = () => {
        if (contenedorVisible) {
            setOnCloseAnimation(true)
            setTimeout(() => {
                setContenedorVisible(false);
                setOnCloseAnimation(false)
            }, 800);
        }
        if (!contenedorVisible) {
            setContenedorVisible(true)
        }
    };

    const imgs = [
        "https://lh3.googleusercontent.com/pw/ADCreHfDIAg4rYFapNNrVJaICvNdtQrb10MPHznwn7-FIMzKIFhrWb6SqGGZLsf44ZqcKKg6zJSNCCIdHn0VZf3Slh72kwYoxxnQVuDIcD8oKqyamGZIXzCSqg3W-W8wmaMr5rflW8lipcQTW30dGIzoRIa3=w722-h963-s-no-gm",
        "https://lh3.googleusercontent.com/pw/ADCreHfDIAg4rYFapNNrVJaICvNdtQrb10MPHznwn7-FIMzKIFhrWb6SqGGZLsf44ZqcKKg6zJSNCCIdHn0VZf3Slh72kwYoxxnQVuDIcD8oKqyamGZIXzCSqg3W-W8wmaMr5rflW8lipcQTW30dGIzoRIa3=w722-h963-s-no-gm", "https://lh3.googleusercontent.com/pw/ADCreHfDIAg4rYFapNNrVJaICvNdtQrb10MPHznwn7-FIMzKIFhrWb6SqGGZLsf44ZqcKKg6zJSNCCIdHn0VZf3Slh72kwYoxxnQVuDIcD8oKqyamGZIXzCSqg3W-W8wmaMr5rflW8lipcQTW30dGIzoRIa3=w722-h963-s-no-gm", "https://lh3.googleusercontent.com/pw/ADCreHfDIAg4rYFapNNrVJaICvNdtQrb10MPHznwn7-FIMzKIFhrWb6SqGGZLsf44ZqcKKg6zJSNCCIdHn0VZf3Slh72kwYoxxnQVuDIcD8oKqyamGZIXzCSqg3W-W8wmaMr5rflW8lipcQTW30dGIzoRIa3=w722-h963-s-no-gm", "https://lh3.googleusercontent.com/pw/ADCreHfDIAg4rYFapNNrVJaICvNdtQrb10MPHznwn7-FIMzKIFhrWb6SqGGZLsf44ZqcKKg6zJSNCCIdHn0VZf3Slh72kwYoxxnQVuDIcD8oKqyamGZIXzCSqg3W-W8wmaMr5rflW8lipcQTW30dGIzoRIa3=w722-h963-s-no-gm", "https://lh3.googleusercontent.com/pw/ADCreHfDIAg4rYFapNNrVJaICvNdtQrb10MPHznwn7-FIMzKIFhrWb6SqGGZLsf44ZqcKKg6zJSNCCIdHn0VZf3Slh72kwYoxxnQVuDIcD8oKqyamGZIXzCSqg3W-W8wmaMr5rflW8lipcQTW30dGIzoRIa3=w722-h963-s-no-gm", "https://lh3.googleusercontent.com/pw/ADCreHfDIAg4rYFapNNrVJaICvNdtQrb10MPHznwn7-FIMzKIFhrWb6SqGGZLsf44ZqcKKg6zJSNCCIdHn0VZf3Slh72kwYoxxnQVuDIcD8oKqyamGZIXzCSqg3W-W8wmaMr5rflW8lipcQTW30dGIzoRIa3=w722-h963-s-no-gm", "https://lh3.googleusercontent.com/pw/ADCreHfDIAg4rYFapNNrVJaICvNdtQrb10MPHznwn7-FIMzKIFhrWb6SqGGZLsf44ZqcKKg6zJSNCCIdHn0VZf3Slh72kwYoxxnQVuDIcD8oKqyamGZIXzCSqg3W-W8wmaMr5rflW8lipcQTW30dGIzoRIa3=w722-h963-s-no-gm", "https://lh3.googleusercontent.com/pw/ADCreHfDIAg4rYFapNNrVJaICvNdtQrb10MPHznwn7-FIMzKIFhrWb6SqGGZLsf44ZqcKKg6zJSNCCIdHn0VZf3Slh72kwYoxxnQVuDIcD8oKqyamGZIXzCSqg3W-W8wmaMr5rflW8lipcQTW30dGIzoRIa3=w722-h963-s-no-gm", "https://lh3.googleusercontent.com/pw/ADCreHfDIAg4rYFapNNrVJaICvNdtQrb10MPHznwn7-FIMzKIFhrWb6SqGGZLsf44ZqcKKg6zJSNCCIdHn0VZf3Slh72kwYoxxnQVuDIcD8oKqyamGZIXzCSqg3W-W8wmaMr5rflW8lipcQTW30dGIzoRIa3=w722-h963-s-no-gm", "https://lh3.googleusercontent.com/pw/ADCreHfDIAg4rYFapNNrVJaICvNdtQrb10MPHznwn7-FIMzKIFhrWb6SqGGZLsf44ZqcKKg6zJSNCCIdHn0VZf3Slh72kwYoxxnQVuDIcD8oKqyamGZIXzCSqg3W-W8wmaMr5rflW8lipcQTW30dGIzoRIa3=w722-h963-s-no-gm", "https://lh3.googleusercontent.com/pw/ADCreHfDIAg4rYFapNNrVJaICvNdtQrb10MPHznwn7-FIMzKIFhrWb6SqGGZLsf44ZqcKKg6zJSNCCIdHn0VZf3Slh72kwYoxxnQVuDIcD8oKqyamGZIXzCSqg3W-W8wmaMr5rflW8lipcQTW30dGIzoRIa3=w722-h963-s-no-gm","https://lh3.googleusercontent.com/pw/ADCreHfDIAg4rYFapNNrVJaICvNdtQrb10MPHznwn7-FIMzKIFhrWb6SqGGZLsf44ZqcKKg6zJSNCCIdHn0VZf3Slh72kwYoxxnQVuDIcD8oKqyamGZIXzCSqg3W-W8wmaMr5rflW8lipcQTW30dGIzoRIa3=w722-h963-s-no-gm","https://lh3.googleusercontent.com/pw/ADCreHfDIAg4rYFapNNrVJaICvNdtQrb10MPHznwn7-FIMzKIFhrWb6SqGGZLsf44ZqcKKg6zJSNCCIdHn0VZf3Slh72kwYoxxnQVuDIcD8oKqyamGZIXzCSqg3W-W8wmaMr5rflW8lipcQTW30dGIzoRIa3=w722-h963-s-no-gm","https://lh3.googleusercontent.com/pw/ADCreHfDIAg4rYFapNNrVJaICvNdtQrb10MPHznwn7-FIMzKIFhrWb6SqGGZLsf44ZqcKKg6zJSNCCIdHn0VZf3Slh72kwYoxxnQVuDIcD8oKqyamGZIXzCSqg3W-W8wmaMr5rflW8lipcQTW30dGIzoRIa3=w722-h963-s-no-gm","https://lh3.googleusercontent.com/pw/ADCreHfDIAg4rYFapNNrVJaICvNdtQrb10MPHznwn7-FIMzKIFhrWb6SqGGZLsf44ZqcKKg6zJSNCCIdHn0VZf3Slh72kwYoxxnQVuDIcD8oKqyamGZIXzCSqg3W-W8wmaMr5rflW8lipcQTW30dGIzoRIa3=w722-h963-s-no-gm","https://lh3.googleusercontent.com/pw/ADCreHfDIAg4rYFapNNrVJaICvNdtQrb10MPHznwn7-FIMzKIFhrWb6SqGGZLsf44ZqcKKg6zJSNCCIdHn0VZf3Slh72kwYoxxnQVuDIcD8oKqyamGZIXzCSqg3W-W8wmaMr5rflW8lipcQTW30dGIzoRIa3=w722-h963-s-no-gm","https://lh3.googleusercontent.com/pw/ADCreHfDIAg4rYFapNNrVJaICvNdtQrb10MPHznwn7-FIMzKIFhrWb6SqGGZLsf44ZqcKKg6zJSNCCIdHn0VZf3Slh72kwYoxxnQVuDIcD8oKqyamGZIXzCSqg3W-W8wmaMr5rflW8lipcQTW30dGIzoRIa3=w722-h963-s-no-gm","https://lh3.googleusercontent.com/pw/ADCreHfDIAg4rYFapNNrVJaICvNdtQrb10MPHznwn7-FIMzKIFhrWb6SqGGZLsf44ZqcKKg6zJSNCCIdHn0VZf3Slh72kwYoxxnQVuDIcD8oKqyamGZIXzCSqg3W-W8wmaMr5rflW8lipcQTW30dGIzoRIa3=w722-h963-s-no-gm","https://lh3.googleusercontent.com/pw/ADCreHfDIAg4rYFapNNrVJaICvNdtQrb10MPHznwn7-FIMzKIFhrWb6SqGGZLsf44ZqcKKg6zJSNCCIdHn0VZf3Slh72kwYoxxnQVuDIcD8oKqyamGZIXzCSqg3W-W8wmaMr5rflW8lipcQTW30dGIzoRIa3=w722-h963-s-no-gm","https://lh3.googleusercontent.com/pw/ADCreHfDIAg4rYFapNNrVJaICvNdtQrb10MPHznwn7-FIMzKIFhrWb6SqGGZLsf44ZqcKKg6zJSNCCIdHn0VZf3Slh72kwYoxxnQVuDIcD8oKqyamGZIXzCSqg3W-W8wmaMr5rflW8lipcQTW30dGIzoRIa3=w722-h963-s-no-gm","https://lh3.googleusercontent.com/pw/ADCreHfDIAg4rYFapNNrVJaICvNdtQrb10MPHznwn7-FIMzKIFhrWb6SqGGZLsf44ZqcKKg6zJSNCCIdHn0VZf3Slh72kwYoxxnQVuDIcD8oKqyamGZIXzCSqg3W-W8wmaMr5rflW8lipcQTW30dGIzoRIa3=w722-h963-s-no-gm","https://lh3.googleusercontent.com/pw/ADCreHfDIAg4rYFapNNrVJaICvNdtQrb10MPHznwn7-FIMzKIFhrWb6SqGGZLsf44ZqcKKg6zJSNCCIdHn0VZf3Slh72kwYoxxnQVuDIcD8oKqyamGZIXzCSqg3W-W8wmaMr5rflW8lipcQTW30dGIzoRIa3=w722-h963-s-no-gm","https://lh3.googleusercontent.com/pw/ADCreHfDIAg4rYFapNNrVJaICvNdtQrb10MPHznwn7-FIMzKIFhrWb6SqGGZLsf44ZqcKKg6zJSNCCIdHn0VZf3Slh72kwYoxxnQVuDIcD8oKqyamGZIXzCSqg3W-W8wmaMr5rflW8lipcQTW30dGIzoRIa3=w722-h963-s-no-gm",
    ]

    return (
        <div>
            <h2 className="containerExperience font-semibold tracking-normal py-4 flex justify-center">Nuestros Viajes</h2>
            <div className="my-8 flex flex-wrap justify-center gap-8" >
                {destinations.map((destiny) => (
                    <div onClick={() => {toggleContenedor(), setViaje(destiny)}} key={destiny.id} className="ExperienceDetail relative cursor-pointer">
                        <div className="ExperienceDetailContainer w-full overflow-hidden hover:opacity-75">
                            <img className="w-full h-full object-cover object-center" src={destiny.imageSrc} alt={destiny.imageAlt} />
                            <p className="bottom-3/4 absolute left-0 w-full p-2 text-white z-10 font-semibold tracking-normal text-center ExperienceDetailText lg:bottom-1/4 lg:text-start">{destiny.lugar}</p>
                            <p className="bottom-0 absolute left-0 w-full p-2 text-white z-10 font-semibold tracking-normal text-center ExperienceDetailText ExperienceDetailTextProvince lg:text-start">{destiny.fecha}</p>
                        </div>
                    </div>
                ))}
            </div>
            {contenedorVisible && (
            <Dropdown contenedorVisible={contenedorVisible} toggleContenedor={toggleContenedor} imgs={imgs} onCloseAnimation={onCloseAnimation}></Dropdown>
            )}
        </div>
    )
}



