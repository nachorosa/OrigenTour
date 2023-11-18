import React, { useEffect, useState } from 'react'

const FormViaje = () => {
    const [form, setForm] = useState({
        destinos: [],
        dias: 0,
        noches: 0,
        itinerario: [],
        servicios: [],
        salidas: [],
        precio: 0,
        descripcion: ""
    })

    const [dias, setDias] = useState(0);
    const cantDias = 15;
    const cantNoches = 15;
    const [shouldSendRequest, setShouldSendRequest] = useState(false);

    const arrayDias = Array.from({ length: form.dias }, (_, index) => index);
    const cantidadDias = Array.from({ length: cantDias }, (_, index) => index);
    const cantidadNoches = Array.from({ length: cantNoches }, (_, index) => index);
    const [servicios, setServicios] = useState([])
    const [fechas, setFechas] = useState([])

    const [destino, setDestino] = useState({
        destino: "",
        provincia: "",
        hotel: ""
    })

    const [servicio, setServicio] = useState({
        servicio: "",
        subServicios: ""
    })


    const handleInputs = (name, value) => {
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleServicio = (name, value) => {
        setServicio({
            ...servicio,
            [name]: value
        })
    }

    const handleDestino = (name, value) => {
        setDestino({
            ...destino,
            [name]: value
        })
    }

    const handleEliminar = (name, value) => {

        if(name === "destinos"){
            const destino = JSON.parse(value)
            const index = form.destinos.findIndex(s => s.destino === destino.destino && s.hotel === destino.hotel && s.provincia === destino.provincia)
            const newArray = [...form.destinos.slice(0, index), ...form.destinos.slice(index + 1)];
            setForm({
                ...form,
                destinos: newArray
            })
        }

        if(name === "servicio"){
            const servicio = JSON.parse(value)
            setServicios((prevServicios) => {
                const updatedServicios = [...prevServicios];
                const servicioIndex = updatedServicios.findIndex((s) => s.servicio === servicio.servicio.servicio);
                if (servicioIndex !== -1) {
                    updatedServicios[servicioIndex].subServicios = updatedServicios[servicioIndex].subServicios.filter(
                        (ss) => ss !== servicio.subServicio
                    );
                }
                return updatedServicios;
            });
            setForm({
                ...form,
                servicios: servicios
            })
        }

        if(name === "salidas"){
            const fechas = [...form.salidas]
            const nuevasFechas = fechas.filter(f => f != value)
            setForm({
                ...form,
                salidas: nuevasFechas
            })
        }

    }


    const handleServicios = (servicio, subServicio) => {
        // Verificar si ya existe un servicio con el mismo nombre
        const existingServicio = servicios.find(s => s.servicio === servicio);

        if (existingServicio) {
            // Si ya existe, agregar el subServicio al servicio existente
            setServicios(prevServicios => {
                const updatedServicios = [...prevServicios];
                const existingIndex = updatedServicios.findIndex(s => s.servicio === servicio);

                // Verificar si el subServicio ya existe antes de agregarlo
                if (!updatedServicios[existingIndex].subServicios.includes(subServicio)) {
                    updatedServicios[existingIndex].subServicios.push(subServicio);
                }

                return updatedServicios;
            });
        } else {
            // Si no existe, crear un nuevo servicio
            setServicios(prevServicios => [
                ...prevServicios,
                {
                    servicio: servicio,
                    subServicios: [subServicio]
                }
            ]);
        }

    };

    const handleDiaChange = (dia, value) => {
        setForm((prevForm) => ({
            ...prevForm,
            itinerario: [
                ...prevForm.itinerario.slice(0, dia - 1),
                { ...prevForm.itinerario[dia - 1], texto: value },
                ...prevForm.itinerario.slice(dia)
            ]
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const itinerarioString = form.itinerario.map((dia) => dia.texto);
        const serviciosCopy = servicios.filter(s => s.subServicios.length > 0)

        // Actualizar el estado manteniendo la estructura original del itinerario
        setForm((prevForm) => ({
            ...prevForm,
            itinerario: itinerarioString,
            servicios: serviciosCopy,
        }));

        // Establecer shouldSendRequest a true para indicar que se debe enviar la solicitud
        setShouldSendRequest(true);
    };

    useEffect(() => {
        // Esta lógica se ejecuta después de que el estado se ha actualizado

        if (shouldSendRequest) {
            fetch("http://localhost:8080/api/viajes", {
                method: 'POST',
                body: JSON.stringify(form),
                headers: {
                    "content-type": "application/json"
                }
            })
                .then(res => res.json())
                .then(data => console.log(data));
        }
        setShouldSendRequest(false);
    }, [form, shouldSendRequest]);

    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='my-8' style={{ boxShadow: "0px 20px 40px 0px rgba(0, 0, 0, 0.35)", padding: "2rem", borderRadius: "1.5rem" }}>
                <div className='flex gap-16 items-end'>
                    <div className="">
                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                            Destino
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name='destino'
                                value={destino.destino}
                                onChange={e => handleDestino(e.target.name, e.target.value)}
                                className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="">
                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                            Hotel
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="hotel"
                                value={destino.hotel}
                                onChange={(e) => handleDestino(e.target.name, e.target.value)}
                                className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="">
                        <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                            Provincia
                        </label>
                        <div className="mt-2">
                            <select
                                name="provincia"
                                onChange={(e) => handleDestino(e.target.name, e.target.value)}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            >
                                 <option selected disabled>Seleccionar</option>
                                <option>Buenos aires</option>
                                <option>Cordoba</option>
                                <option>Santa Fe</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex items-center justify-end gap-x-6">
                        <button
                            type="submit"
                            onClick={() => setForm(prevForm => ({
                                ...prevForm,
                                destinos: [...prevForm.destinos, destino]
                            }))}
                            className="rounded-md bg-indigo-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Agregar
                        </button>
                    </div>
                </div>
                {form.destinos.length > 0 ?
                    <div className='flex flex-wrap gap-2 max-w-full'>
                        {form.destinos != null ? form.destinos.map(d => (
                            <div style={{ border: "1px solid #6b7280" }} className='flex mt-2 items-center max-w-max p-1 rounded-md'>
                                <div className='text-sm mx-2'>
                                    {d.destino}, {d.hotel}, {d.provincia}
                                </div>
                                <div className='mx-2'>
                                    <button className='flex items-center cursor-pointer'
                                    
                                    onClick={() => handleEliminar("destinos", JSON.stringify({destino: d.destino, hotel: d.hotel, provincia: d.provincia}))}
                                    >
                                        <img  src="./src/img/cross.svg" alt="" />
                                    </button>
                                </div>
                            </div>
                        )) : null}
                    </div>
                    : null
                }
                <div className='flex gap-16 my-4'>
                    <div className="">
                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                            Dias
                        </label>
                        <div className="mt-2">
                            <select
                                name='dias'
                                onChange={(e) => { setDias(e.target.value), handleInputs(e.target.name, e.target.value) }}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            >
                                {cantidadDias.map(c => (<option value={c + 1}>{c + 1}</option>))}
                            </select>
                        </div>
                    </div>
                    <div className="">
                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                            Noches
                        </label>
                        <div className="mt-2">
                            <select
                                name='noches'
                                onChange={(e) => { handleInputs(e.target.name, e.target.value) }}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            >
                                {cantidadNoches.map(c => (<option value={c + 1}>{c + 1}</option>))}
                            </select>
                        </div>
                    </div>
                </div>
                <div>
                    {arrayDias.length > 0 && arrayDias.map((d, index) => (
                        <div key={index} className="w-full mt-2">
                            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                Dia {index + 1}:
                            </label>
                            <div className="mt-2">
                                <textarea
                                    style={{ resize: 'none', overflow: 'hidden' }}
                                    name={`dia-${index + 1}`}
                                    value={form.itinerario[index]?.texto || ''}
                                    onChange={(e) => handleDiaChange(index + 1, e.target.value)}
                                    rows={1}
                                    className="w-full block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex gap-16 my-4 items-end'>
                    <div className='w-full'>
                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                            Servicio
                        </label>
                        <div className="mt-2 w-full">
                            <select
                                name="servicio"
                                onChange={(e) => handleServicio(e.target.name, e.target.value)}
                                className="w-full block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            >
                                <option selected disabled>Seleccionar</option>
                                <option>Comida</option>
                                <option>Transporte</option>
                            </select>
                        </div>
                    </div>

                    <div className="w-full">
                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                            Sub servicio
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                // value={servicio.subServicios}
                                name='subServicios'
                                onChange={(e) => handleServicio(e.target.name, e.target.value)}
                                className="w-full block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-end gap-x-6">
                        <button
                            type="submit"
                            onClick={() => handleServicios(servicio.servicio, servicio.subServicios)}
                            className="rounded-md bg-indigo-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Agregar
                        </button>
                    </div>
                </div>
                {servicios != null && servicios.length > 0 ? servicios.map(s => (
                    s.subServicios != 0 ?
                    <div className='flex my-4'>
                        <div className='flex items-center'>
                            {s.servicio}:
                        </div>
                        <div className='flex items-center'>
                            {s.subServicios.map(ss => (
                                <div style={{ border: "1px solid #6b7280" }} className='flex mx-2 items-center max-w-max p-1 rounded-md'>
                                    <span className='mx-2'>
                                        {ss}
                                    </span>
                                    <div className='mx-2'>
                                        <button className='flex items-center cursor-pointer'
                                        onClick={() => handleEliminar("servicio", JSON.stringify({servicio: s, subServicio: ss }))}
                                    >
                                            <img src="./src/img/cross.svg" alt="" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div> : null
                )) : null}
                <div className='flex gap-16 my-4 items-end'>
                    <div className="">
                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                            Salidas
                        </label>
                        <div className="mt-2">
                            <input
                                type="date"
                                onChange={e => { setFechas([e.target.value], console.log(form)) }}
                                className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-end gap-x-6">
                        <button
                            type="submit"
                            value={fechas}
                            onClick={(e) => setForm(prevForm => ({
                                ...prevForm,
                                salidas: [...prevForm.salidas, e.target.value]
                            }))}
                            className="rounded-md bg-indigo-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Agregar
                        </button>
                    </div>

                </div>
                <div className='flex flex-wrap gap-2'>
                {form.salidas != null ? form.salidas.map(f => (
                                <div style={{ border: "1px solid #6b7280" }} className='flex items-center max-w-max p-1 rounded-md'>
                                <span className='mx-2'>
                                    {f}
                                </span>
                                <div className='mx-2'>
                                    <button className='flex items-center cursor-pointer'
                                    onClick={() => handleEliminar("salidas", f)}
                                    >
                                        <img src="./src/img/cross.svg" alt="" />
                                    </button>
                                </div>
                            </div>
                )) : null}
                </div>
                <div className='flex gap-16 my-4'>
                    <div className="">
                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                            Precio
                        </label>
                        <div className="mt-2">
                            <input
                                type="number"
                                name="precio"
                                // value={form.precio}
                                onChange={e => handleInputs(e.target.name, e.target.value)}
                                className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                </div>
                <div className='flex gap-16 my-4'>
                    <div className="w-full">
                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                            Descripcion
                        </label>
                        <div className="mt-2">
                            <textarea
                                name="descripcion"
                                // value={form.descripcion}
                                onChange={e => handleInputs(e.target.name, e.target.value)}
                                className="w-full block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-end gap-x-6">
                    <button
                        type="submit"
                        onClick={e => handleSubmit(e)}
                        className="rounded-md bg-indigo-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Crear viaje
                    </button>
                </div>
            </div>
        </div >
    )
}


export default FormViaje