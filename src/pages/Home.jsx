import { CarouselComponent } from "../components/CarouselComponent"
import { CardPromotion } from "../components/CardPromotion"
import { WelcomeMessage } from "../components/WelcomeMessage"
import { CardMainDestination } from "../components/CardMainDestination"

export const Home = () => {
  return (
    <div>
        {/* <CarouselComponent/> */}
        <WelcomeMessage/>
        <div className="flex">
        {/* <CardPromotion/>
        <CardPromotion/>
        <CardPromotion/> */}
        </div>
        <CardMainDestination/>
    </div>
  )
}