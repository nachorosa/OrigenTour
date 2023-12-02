import { Link } from "react-router-dom"

export const WelcomeMessage = () => {
  return (
    <>
      <div className="titlePage">Atrévete a ir más lejos con Origen Viajes</div>
      <Link to="/login"><p>login</p></Link>
    </>
  )
}