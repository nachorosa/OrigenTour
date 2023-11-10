import { CardDestiny } from "../components/CardDestiny"
import { Filter } from "../components/Filter"

export const Destiny = () => {
  return (
    <div>
        <h2 className="titlePage">Nuestros Destinos</h2>
        <Filter/>
        <CardDestiny/>
    </div>
  )
}