import { useState } from "react";
import "../css/experience.css"
import Dropdown from './Dropdown'

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
        fecha: "21 de Septiembre 2023",
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
        <div >
            <h2 className="container-title">Nuestros Viajes</h2>
            <div className="container-destination-card" >
                {destinations.map((destiny) => (
                    <div onClick={() => {toggleContenedor(), setViaje(destiny)}} key={destiny.id} className="card-destination trigger">
                        <div className="card-destination-detail">
                            <img src={destiny.imageSrc} alt={destiny.imageAlt} />
                            <p className="card-destination-detail-text">{destiny.lugar} </p>
                            <p className="card-destination-detail-text card-destination-detail-text-province">{destiny.fecha} </p>
                        </div>
                    </div>
                ))}
            </div>
            {contenedorVisible && (
            <Dropdown contenedorVisible={contenedorVisible} toggleContenedor={toggleContenedor} imgs={imgs} onCloseAnimation={onCloseAnimation} ></Dropdown>
            )}
        </div>
    )
}



