import { useState } from "react";
import { MultiSelect } from "react-multi-select-component";

import "../css/filter.css"

export const Filter = () => {
  const months = [
    { label: "Enero", value: "January" },
    { label: "Febrero", value: "February" },
    { label: "Marzo", value: "March" },
    { label: "Abril", value: "April" },
    { label: "Mayo", value: "May" },
    { label: "Junio", value: "June" },
    { label: "Julio", value: "July" },
    { label: "Agosto", value: "August" },
    { label: "Septiembre", value: "September" },
    { label: "Octubre", value: "October" },
    { label: "Noviembre", value: "November" },
    { label: "Diciembre", value: "December" }
  ]
  
  const provinces = [
      { label: "Buenos Aires", value: "buenos_aires" },
      { label: "CABA (Ciudad Autónoma de Buenos Aires)", value: "caba" },
      { label: "Catamarca", value: "catamarca" },
      { label: "Chaco", value: "chaco" },
      { label: "Chubut", value: "chubut" },
      { label: "Córdoba", value: "cordoba" },
      { label: "Corrientes", value: "corrientes" },
      { label: "Entre Ríos", value: "entre_rios" },
      { label: "Formosa", value: "formosa" },
      { label: "Jujuy", value: "jujuy" },
      { label: "La Pampa", value: "la_pampa" },
      { label: "La Rioja", value: "la_rioja" },
      { label: "Mendoza", value: "mendoza" },
      { label: "Misiones", value: "misiones" },
      { label: "Neuquén", value: "neuquen" },
      { label: "Río Negro", value: "rio_negro" },
      { label: "Salta", value: "salta" },
      { label: "San Juan", value: "san_juan" },
      { label: "San Luis", value: "san_luis" },
      { label: "Santa Cruz", value: "santa_cruz" },
      { label: "Santa Fe", value: "santa_fe" },
      { label: "Santiago del Estero", value: "santiago_del_estero" },
      { label: "Tierra del Fuego", value: "tierra_del_fuego" },
      { label: "Tucumán", value: "tucuman" }
    ]
  
    const destinys = [
      { label: "NuevoDestino", value: "NuevoDestino" },
      { label: "NuevoDestino2", value: "NuevoDestino2" },
      { label: "NuevoDestino", value: "NuevoDestino" },
      { label: "NuevoDestino2", value: "NuevoDestino2" },
      { label: "NuevoDestino", value: "NuevoDestino" },
      { label: "NuevoDestino2", value: "NuevoDestino2" },
      { label: "NuevoDestino", value: "NuevoDestino" },
      { label: "NuevoDestino2", value: "NuevoDestino2" },
    ]
      

  const [selectedMonth, setSelectedMonth] = useState([])
  const [selectedProvince, setSelectedProvince] = useState([])
  const [selectedDestinys, setSelectedDestiny] = useState([])


  const removeMonth = (value) => {
    setSelectedMonth(selectedMonth.filter((item) => item.value !== value))
  }

  const removeProvince = (value) => {
    setSelectedProvince(selectedProvince.filter((item) => item.value !== value))
  }

  const removeDestiny = (value) => {
    setSelectedDestiny(selectedDestinys.filter((item) => item.value !== value))
  }

  return (
    <div className="filter">
      <h2>Filtros</h2>
      <div className="container-filter">
        <MultiSelect options={months} value={selectedMonth} onChange={setSelectedMonth} valueRenderer={() => "Meses"}/>
        <MultiSelect options={provinces} value={selectedProvince} onChange={setSelectedProvince} valueRenderer={() =>"Provincias"}/>
 
        <MultiSelect options={destinys} value={selectedDestinys} onChange={setSelectedDestiny} valueRenderer={() => "Destinos"}/>

      </div>

      <div className="filter-selected">    
              {selectedMonth.map((item) => (
                <div className="filter-selected-item" key={item.value}>
                  <span>{item.label}</span>
                  <button onClick={() => removeMonth(item.value)}>X</button>
                </div>
              ))}
    
              {selectedProvince.map((item) => (
                        <div className="filter-selected-item"  key={item.value} >
                          <span>{item.label}</span>
                          <button onClick={() => removeProvince(item.value)}>X</button>
                        </div>
              ))}

              {selectedDestinys.map((item) => (
                            <div className="filter-selected-item"  key={item.value} >
                              <span>{item.label}</span>
                              <button onClick={() => removeDestiny(item.value)}>X</button>
                            </div>
              ))}
      </div>

    </div>
  )
}
