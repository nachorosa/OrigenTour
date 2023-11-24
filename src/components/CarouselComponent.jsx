
import { Carousel } from "@material-tailwind/react";
import '../css/carrousel.css'

export function CarouselComponent() {
  return (
    <div className="p-8">
      <Carousel
        className="rounded-xl" transition={{ duration: 2 }} autoplay={true} autoplayDelay={10000} loop={true} navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-5 left-2/4 z-50 flex -translate-x-2/4 gap-5">
            {new Array(length).fill("").map((_, i) => (
              <span key={i} className={`block h-4 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-stone-300" : "w-4 bg-stone-300/75"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <img src="/src/img/home/1.jpg" alt="1" className="h-full w-full object-cover" />
        <img src="/src/img/home/2.jpg" alt="2" className="h-full w-full object-cover" />
        <img src="/src/img/home/3.jpg" alt="3" className="h-full w-full object-cover" />
        {/* <img src="/src/img/home/4.jpg" alt="4" className="h-full w-full object-cover"/> */}
      </Carousel>
    </div>
  );
}