import { useState } from "react"
import Dropdown from './Dropdown'
import "../css/experience.css"

const destinations = [
    {
        id: 1,
        lugar: 'Salta',
        fecha: '21 de Septiembre 2023',
        href: '#',
        imageSrc: '/src/img/experience/salta210923/salta.jpg',
        imageAlt: 'salta',
        folder: '/src/img/experience/salta210923/',
        imageRange: { start: 1, end: 119 },
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

    const getImagePaths = (folder, range) => {
        const imagePaths = [];
      
        for (let i = range.start; i <= range.end; i++) {
          const imagePath = `${folder}salta2109 (${i}).jpg`;
          imagePaths.push(imagePath);
        }
      
        // img/experience/salta210923/salta2109 (1).jpg

        return imagePaths;
      };

    // const imgs = [
        // "https://lh3.googleusercontent.com/pw/ADCreHfDIAg4rYFapNNrVJaICvNdtQrb10MPHznwn7-FIMzKIFhrWb6SqGGZLsf44ZqcKKg6zJSNCCIdHn0VZf3Slh72kwYoxxnQVuDIcD8oKqyamGZIXzCSqg3W-W8wmaMr5rflW8lipcQTW30dGIzoRIa3=w722-h963-s-no-gm"
        // "https://lh3.googleusercontent.com/pw/ADCreHfDIAg4rYFapNNrVJaICvNdtQrb10MPHznwn7-FIMzKIFhrWb6SqGGZLsf44ZqcKKg6zJSNCCIdHn0VZf3Slh72kwYoxxnQVuDIcD8oKqyamGZIXzCSqg3W-W8wmaMr5rflW8lipcQTW30dGIzoRIa3=w722-h963-s-no-gm", "https://lh3.googleusercontent.com/pw/ADCreHfDIAg4rYFapNNrVJaICvNdtQrb10MPHznwn7-FIMzKIFhrWb6SqGGZLsf44ZqcKKg6zJSNCCIdHn0VZf3Slh72kwYoxxnQVuDIcD8oKqyamGZIXzCSqg3W-W8wmaMr5rflW8lipcQTW30dGIzoRIa3=w722-h963-s-no-gm", "https://lh3.googleusercontent.com/pw/ADCreHfDIAg4rYFapNNrVJaICvNdtQrb10MPHznwn7-FIMzKIFhrWb6SqGGZLsf44ZqcKKg6zJSNCCIdHn0VZf3Slh72kwYoxxnQVuDIcD8oKqyamGZIXzCSqg3W-W8wmaMr5rflW8lipcQTW30dGIzoRIa3=w722-h963-s-no-gm", "https://lh3.googleusercontent.com/pw/ADCreHfDIAg4rYFapNNrVJaICvNdtQrb10MPHznwn7-FIMzKIFhrWb6SqGGZLsf44ZqcKKg6zJSNCCIdHn0VZf3Slh72kwYoxxnQVuDIcD8oKqyamGZIXzCSqg3W-W8wmaMr5rflW8lipcQTW30dGIzoRIa3=w722-h963-s-no-gm", "https://lh3.googleusercontent.com/pw/ADCreHfDIAg4rYFapNNrVJaICvNdtQrb10MPHznwn7-FIMzKIFhrWb6SqGGZLsf44ZqcKKg6zJSNCCIdHn0VZf3Slh72kwYoxxnQVuDIcD8oKqyamGZIXzCSqg3W-W8wmaMr5rflW8lipcQTW30dGIzoRIa3=w722-h963-s-no-gm", "https://lh3.googleusercontent.com/pw/ADCreHfDIAg4rYFapNNrVJaICvNdtQrb10MPHznwn7-FIMzKIFhrWb6SqGGZLsf44ZqcKKg6zJSNCCIdHn0VZf3Slh72kwYoxxnQVuDIcD8oKqyamGZIXzCSqg3W-W8wmaMr5rflW8lipcQTW30dGIzoRIa3=w722-h963-s-no-gm", "https://lh3.googleusercontent.com/pw/ADCreHfDIAg4rYFapNNrVJaICvNdtQrb10MPHznwn7-FIMzKIFhrWb6SqGGZLsf44ZqcKKg6zJSNCCIdHn0VZf3Slh72kwYoxxnQVuDIcD8oKqyamGZIXzCSqg3W-W8wmaMr5rflW8lipcQTW30dGIzoRIa3=w722-h963-s-no-gm", "https://lh3.googleusercontent.com/pw/ADCreHfDIAg4rYFapNNrVJaICvNdtQrb10MPHznwn7-FIMzKIFhrWb6SqGGZLsf44ZqcKKg6zJSNCCIdHn0VZf3Slh72kwYoxxnQVuDIcD8oKqyamGZIXzCSqg3W-W8wmaMr5rflW8lipcQTW30dGIzoRIa3=w722-h963-s-no-gm", "https://lh3.googleusercontent.com/pw/ADCreHfDIAg4rYFapNNrVJaICvNdtQrb10MPHznwn7-FIMzKIFhrWb6SqGGZLsf44ZqcKKg6zJSNCCIdHn0VZf3Slh72kwYoxxnQVuDIcD8oKqyamGZIXzCSqg3W-W8wmaMr5rflW8lipcQTW30dGIzoRIa3=w722-h963-s-no-gm", "https://lh3.googleusercontent.com/pw/ADCreHfDIAg4rYFapNNrVJaICvNdtQrb10MPHznwn7-FIMzKIFhrWb6SqGGZLsf44ZqcKKg6zJSNCCIdHn0VZf3Slh72kwYoxxnQVuDIcD8oKqyamGZIXzCSqg3W-W8wmaMr5rflW8lipcQTW30dGIzoRIa3=w722-h963-s-no-gm", "https://lh3.googleusercontent.com/pw/ADCreHfDIAg4rYFapNNrVJaICvNdtQrb10MPHznwn7-FIMzKIFhrWb6SqGGZLsf44ZqcKKg6zJSNCCIdHn0VZf3Slh72kwYoxxnQVuDIcD8oKqyamGZIXzCSqg3W-W8wmaMr5rflW8lipcQTW30dGIzoRIa3=w722-h963-s-no-gm", "https://lh3.googleusercontent.com/pw/ADCreHfDIAg4rYFapNNrVJaICvNdtQrb10MPHznwn7-FIMzKIFhrWb6SqGGZLsf44ZqcKKg6zJSNCCIdHn0VZf3Slh72kwYoxxnQVuDIcD8oKqyamGZIXzCSqg3W-W8wmaMr5rflW8lipcQTW30dGIzoRIa3=w722-h963-s-no-gm", "https://lh3.googleusercontent.com/pw/ADCreHfDIAg4rYFapNNrVJaICvNdtQrb10MPHznwn7-FIMzKIFhrWb6SqGGZLsf44ZqcKKg6zJSNCCIdHn0VZf3Slh72kwYoxxnQVuDIcD8oKqyamGZIXzCSqg3W-W8wmaMr5rflW8lipcQTW30dGIzoRIa3=w722-h963-s-no-gm", "https://lh3.googleusercontent.com/pw/ADCreHfDIAg4rYFapNNrVJaICvNdtQrb10MPHznwn7-FIMzKIFhrWb6SqGGZLsf44ZqcKKg6zJSNCCIdHn0VZf3Slh72kwYoxxnQVuDIcD8oKqyamGZIXzCSqg3W-W8wmaMr5rflW8lipcQTW30dGIzoRIa3=w722-h963-s-no-gm", "https://lh3.googleusercontent.com/pw/ADCreHfDIAg4rYFapNNrVJaICvNdtQrb10MPHznwn7-FIMzKIFhrWb6SqGGZLsf44ZqcKKg6zJSNCCIdHn0VZf3Slh72kwYoxxnQVuDIcD8oKqyamGZIXzCSqg3W-W8wmaMr5rflW8lipcQTW30dGIzoRIa3=w722-h963-s-no-gm", "https://lh3.googleusercontent.com/pw/ADCreHfDIAg4rYFapNNrVJaICvNdtQrb10MPHznwn7-FIMzKIFhrWb6SqGGZLsf44ZqcKKg6zJSNCCIdHn0VZf3Slh72kwYoxxnQVuDIcD8oKqyamGZIXzCSqg3W-W8wmaMr5rflW8lipcQTW30dGIzoRIa3=w722-h963-s-no-gm", "https://lh3.googleusercontent.com/pw/ADCreHfDIAg4rYFapNNrVJaICvNdtQrb10MPHznwn7-FIMzKIFhrWb6SqGGZLsf44ZqcKKg6zJSNCCIdHn0VZf3Slh72kwYoxxnQVuDIcD8oKqyamGZIXzCSqg3W-W8wmaMr5rflW8lipcQTW30dGIzoRIa3=w722-h963-s-no-gm", "https://lh3.googleusercontent.com/pw/ADCreHfDIAg4rYFapNNrVJaICvNdtQrb10MPHznwn7-FIMzKIFhrWb6SqGGZLsf44ZqcKKg6zJSNCCIdHn0VZf3Slh72kwYoxxnQVuDIcD8oKqyamGZIXzCSqg3W-W8wmaMr5rflW8lipcQTW30dGIzoRIa3=w722-h963-s-no-gm", "https://lh3.googleusercontent.com/pw/ADCreHfDIAg4rYFapNNrVJaICvNdtQrb10MPHznwn7-FIMzKIFhrWb6SqGGZLsf44ZqcKKg6zJSNCCIdHn0VZf3Slh72kwYoxxnQVuDIcD8oKqyamGZIXzCSqg3W-W8wmaMr5rflW8lipcQTW30dGIzoRIa3=w722-h963-s-no-gm", "https://lh3.googleusercontent.com/pw/ADCreHfDIAg4rYFapNNrVJaICvNdtQrb10MPHznwn7-FIMzKIFhrWb6SqGGZLsf44ZqcKKg6zJSNCCIdHn0VZf3Slh72kwYoxxnQVuDIcD8oKqyamGZIXzCSqg3W-W8wmaMr5rflW8lipcQTW30dGIzoRIa3=w722-h963-s-no-gm", "https://lh3.googleusercontent.com/pw/ADCreHfDIAg4rYFapNNrVJaICvNdtQrb10MPHznwn7-FIMzKIFhrWb6SqGGZLsf44ZqcKKg6zJSNCCIdHn0VZf3Slh72kwYoxxnQVuDIcD8oKqyamGZIXzCSqg3W-W8wmaMr5rflW8lipcQTW30dGIzoRIa3=w722-h963-s-no-gm", "https://lh3.googleusercontent.com/pw/ADCreHfDIAg4rYFapNNrVJaICvNdtQrb10MPHznwn7-FIMzKIFhrWb6SqGGZLsf44ZqcKKg6zJSNCCIdHn0VZf3Slh72kwYoxxnQVuDIcD8oKqyamGZIXzCSqg3W-W8wmaMr5rflW8lipcQTW30dGIzoRIa3=w722-h963-s-no-gm", "https://lh3.googleusercontent.com/pw/ADCreHfDIAg4rYFapNNrVJaICvNdtQrb10MPHznwn7-FIMzKIFhrWb6SqGGZLsf44ZqcKKg6zJSNCCIdHn0VZf3Slh72kwYoxxnQVuDIcD8oKqyamGZIXzCSqg3W-W8wmaMr5rflW8lipcQTW30dGIzoRIa3=w722-h963-s-no-gm",
    // ]

    return (
        <div>
            <h2 className="containerExperience font-semibold tracking-normal py-4 flex justify-center">Nuestros Viajes</h2>
            <div className="my-8 flex flex-wrap justify-center gap-8" >
                {destinations.map((destiny) => (
                    <div onClick={() => { toggleContenedor(), setViaje(destiny) }} key={destiny.id} className="ExperienceDetail relative cursor-pointer">
                        <div className="ExperienceDetailContainer w-full overflow-hidden hover:opacity-75">
                            <img className="w-full h-full object-cover object-center" src={destiny.imageSrc} alt={destiny.imageAlt} />
                            <p className="bottom-3/4 absolute left-0 w-full p-2 text-white z-10 font-semibold tracking-normal text-center ExperienceDetailText lg:bottom-1/4 lg:text-start">{destiny.lugar}</p>
                            <p className="bottom-0 absolute left-0 w-full p-2 text-white z-10 font-semibold tracking-normal text-center ExperienceDetailText ExperienceDetailTextProvince lg:text-start">{destiny.fecha}</p>
                        </div>
                    </div>
                ))}
            </div>
            {contenedorVisible && (
                <Dropdown contenedorVisible={contenedorVisible} toggleContenedor={toggleContenedor} imgs={getImagePaths(viaje.folder, viaje.imageRange)}  onCloseAnimation={onCloseAnimation}></Dropdown>
            )}
        </div>
    )
}