import { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import "../css/filter.css"

export const Filter = ({ destinos, setViajes, setLoading }) => {
    const months = [
        { label: "Enero", value: "1" },
        { label: "Febrero", value: "2" },
        { label: "Marzo", value: "3" },
        { label: "Abril", value: "4" },
        { label: "Mayo", value: "5" },
        { label: "Junio", value: "6" },
        { label: "Julio", value: "7" },
        { label: "Agosto", value: "8" },
        { label: "Septiembre", value: "9" },
        { label: "Octubre", value: "10" },
        { label: "Noviembre", value: "11" },
        { label: "Diciembre", value: "12" }
    ]
    
    const provinces = [
        { label: "Buenos Aires", value: "buenos aires" },
        { label: "Catamarca", value: "catamarca" },
        { label: "Chaco", value: "chaco" },
        { label: "Chubut", value: "chubut" },
        { label: "Córdoba", value: "cordoba" },
        { label: "Corrientes", value: "corrientes" },
        { label: "Entre Ríos", value: "entre rios" },
        { label: "Formosa", value: "formosa" },
        { label: "Jujuy", value: "jujuy" },
        { label: "La Pampa", value: "la pampa" },
        { label: "La Rioja", value: "la rioja" },
        { label: "Mendoza", value: "mendoza" },
        { label: "Misiones", value: "misiones" },
        { label: "Neuquén", value: "neuquen" },
        { label: "Río Negro", value: "rio negro" },
        { label: "Salta", value: "salta" },
        { label: "San Juan", value: "san juan" },
        { label: "San Luis", value: "san luis" },
        { label: "Santa Cruz", value: "santa cruz" },
        { label: "Santa Fe", value: "santa fe" },
        { label: "Santiago del Estero", value: "santiago del estero" },
        { label: "Tierra del Fuego", value: "tierra del fuego" },
        { label: "Tucumán", value: "tucuman" },
        { label: "Internacional", value: "internacional" }
    ]
    
    const destinys = destinos.map(d => ({ label: d, value: d }))
    
    const [selectedMonth, setSelectedMonth] = useState([])
    const [selectedProvince, setSelectedProvince] = useState([])
    const [selectedDestinys, setSelectedDestiny] = useState([])
    
    const filtersApplied = selectedMonth.length > 0 || selectedProvince.length > 0 || selectedDestinys.length > 0;

    const removeMonth = (value) => {
        setSelectedMonth(selectedMonth.filter((item) => item.value !== value))
    }

    const removeProvince = (value) => {
        setSelectedProvince(selectedProvince.filter((item) => item.value !== value))
    }

    const removeDestiny = (value) => {
        setSelectedDestiny(selectedDestinys.filter((item) => item.value !== value))
    }
    
    const handleClean = () => {

        setSelectedMonth([]);
        setSelectedProvince([]);
        setSelectedDestiny([]);

        let url = 'https://api.origentourandtravel.tur.ar/api/viajes';

        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
        .then(data => setViajes(data))
    }

    const handleFilter = () => {

    setLoading(true)

        const fecha = selectedMonth.length > 0 ? selectedMonth.map(m => (m.value)) : null
        const provincias = selectedProvince.length > 0 ? selectedProvince.map(p => (p.value)) : null
        const destinos = selectedDestinys.length > 0 ? selectedDestinys.map(d => (d.value)) : null
     
        console.log(fecha, provincias, destinos);

        let url = ''

        if (fecha != null && destinos != null && provincias != null) {
            url = `https://api.origentourandtravel.tur.ar/api/viajes/filtrar?fecha=${encodeURIComponent(fecha.join(','))}&destino=${encodeURIComponent(destinos.join(','))}&provincia=${encodeURIComponent(provincias.join(','))}`
        } else if (fecha != null && destinos != null) {
            url = `https://api.origentourandtravel.tur.ar/api/viajes/filtrar?fecha=${encodeURIComponent(fecha.join(','))}&destino=${encodeURIComponent(destinos.join(','))}`
        } else if (fecha != null && provincias != null) {
            url = `https://api.origentourandtravel.tur.ar/api/viajes/filtrar?fecha=${encodeURIComponent(fecha.join(','))}&provincia=${encodeURIComponent(provincias.join(','))}`
        } else if (destinos != null && provincias != null) {
            url = `https://api.origentourandtravel.tur.ar/api/viajes/filtrar?destino=${encodeURIComponent(destinos.join(','))}&provincia=${encodeURIComponent(provincias.join(','))}`
        } else if (destinos != null) {
            url = `https://api.origentourandtravel.tur.ar/api/viajes/filtrar?destino=${encodeURIComponent(destinos.join(','))}`
        } else if (fecha != null) {
            url = `https://api.origentourandtravel.tur.ar/api/viajes/filtrar?fecha=${encodeURIComponent(fecha.join(','))}`
        } else if (provincias != null) {
            url = `https://api.origentourandtravel.tur.ar/api/viajes/filtrar?provincia=${encodeURIComponent(provincias.join(','))}`
        } else {
            return
        }

        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
        .then(data => {setViajes(data), setLoading(false)})
    }

    return (
        <div className="px-4 md:py-4 md:px-8">
            <h2 className="text-1-6rem">Filtros</h2>
            <div className="flex gap-4 justify-center items-center md:justify-start">
                <MultiSelect options={months} value={selectedMonth} onChange={setSelectedMonth} valueRenderer={() => "Meses"} />
                <MultiSelect options={provinces} value={selectedProvince} onChange={setSelectedProvince} valueRenderer={() => "Provincias"} />
                <MultiSelect options={destinys} value={selectedDestinys} onChange={setSelectedDestiny} valueRenderer={() => "Destinos"} />
            </div>
            <div className="flex gap-5 pt-4">
                <div className="button-filter">
                    <button className="bg-orange-500 py-4 px-10 text-white rounded-xl text-xl font-bold" onClick={handleFilter}>Buscar</button>
                </div>
                {filtersApplied && (
                    <div className="button-filter">
                        <button className="bg-orange-500 py-4 px-10 text-white rounded-xl text-xl font-bold" onClick={handleClean}>Limpiar</button>
                    </div>
                )}
            </div>
            <div className="font-semibold flex flex-wrap gap-4 py-4">
                {selectedMonth.map((item) => (
                    <div className="selectedItem font-semibold" key={item.value}>
                        <span className="text-1-4rem">{item.label}</span>
                        <button className="removeBtn" onClick={() => removeMonth(item.value)}>X</button>
                    </div>
                ))}
                {selectedProvince.map((item) => (
                    <div className="selectedItem" key={item.value} >
                        <span>{item.label}</span>
                        <button className="removeBtn" onClick={() => removeProvince(item.value)}>X</button>
                    </div>
                ))}
                {selectedDestinys.map((item) => (
                    <div className="selectedItem" key={item.value} >
                        <span>{item.label}</span>
                        <button onClick={() => removeDestiny(item.value)}>X</button>
                    </div>
                ))}
            </div>
        </div>
    )
}
