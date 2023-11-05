import { Carousel } from "../components/Carousel"
import { CardPromotion } from "../components/CardPromotion"
import { WelcomeMessage } from "../components/WelcomeMessage"

export const Home = () => {
  return (
    <div>
        <Carousel/>
        <WelcomeMessage/>
        <div className="flex">
        <CardPromotion/>
        </div>
    </div>
  )
}