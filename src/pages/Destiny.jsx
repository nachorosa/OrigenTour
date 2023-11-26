import { useEffect, useState } from "react"
import { CardDestiny } from "../components/CardDestiny"
import { Filter } from "../components/Filter"

export const Destiny = () => {

  const [destinys, setDestinys] = useState([])

  const getDestinys = () => {
    fetch("http://localhost:8080/api/viajes/destinos", {
      method: "GET"
    }).then(res => res.json())
    .then(data => {
      const destinysFormat = []
      data.forEach(destiny => {
        destinysFormat.push(destiny.nombre)
      });
      setDestinys(destinysFormat)
    })
  }


  useEffect(() => {
    getDestinys()
  }, [])

  return (
    <div>
      <h2 className="titlePage">Nuestros Destinos</h2>
      <Filter destinos={destinys}/>
      <CardDestiny />
    </div>
  )
}

export default Destiny