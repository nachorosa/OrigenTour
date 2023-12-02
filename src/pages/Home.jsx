import { CarouselComponent } from "../components/CarouselComponent"
import { CardPromotion } from "../components/CardPromotion"
import { WelcomeMessage } from "../components/WelcomeMessage"
import { CardMainDestination } from "../components/CardMainDestination"
import { useEffect, useState } from "react"
import LoadingOval from "../components/LoadingOval"

export const Home = () => {
  const [loading, isLoading] = useState(true)
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    fetch("https://api.origentourandtravel.tur.ar/api/viajes/favoritos", {
      method: "GET",
      headers: {
        "content-type": "application/json"
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setFavoritos(data)
        isLoading(false)
      })
      .catch((error) => console.error("Error fetching favoritos:", error));
  }, []);

  return (
    loading ?
      <LoadingOval />
      :
      <div>
        <CarouselComponent />
        <WelcomeMessage />
        <CardPromotion favoritos={favoritos} />
        <CardMainDestination />
      </div>
  )
}

export default Home;