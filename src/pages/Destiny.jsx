import { useEffect, useState } from "react"
import { CardDestiny } from "../components/CardDestiny"
import { Filter } from "../components/Filter"

export const Destiny = () => {

  const [destinys, setDestinys] = useState([])
  const [viajes, setViajes] = useState([])

  const getDestinys = () => {
    fetch("http://localhost:8080/api/viajes/destinos", {
      method: "GET"
    }).then(res => res.json())
    .then(data => setDestinys(data))
  }

  const getViajes = () => {
		fetch("http://localhost:8080/api/viajes", {
			method: 'GET',
			headers: {
				"content-type": "application/json"
			}
		}).then(res => res.json())
			.then(data => setViajes(data))
  }

	useEffect(() => {
      getViajes()
      getDestinys()
	}, [])

  return (
    <div>
      <h2 className="titlePage">Nuestros Destinos</h2>
      <Filter destinos={destinys} setViajes={setViajes}/>
      <CardDestiny viajes={viajes}/>
    </div>
  )
}

export default Destiny