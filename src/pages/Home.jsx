import { Carousel } from "../components/Carousel"
import { Promotion } from "../components/Card-Promotion"
import { WelcomeMessage } from "../components/WelcomeMessage"

export const Home = () => {
  return (
    <div>
        <Carousel/>
        <WelcomeMessage/>
        <div className="flex">
        <Promotion/>
        {/* <Promotion/> */}
        {/* <Promotion/> */}
        </div>
    </div>
  )
}