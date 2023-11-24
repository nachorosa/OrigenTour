import React, { useEffect, useState } from 'react'
import "../css/form.css"

const FormViaje = ({ popup, onClose }) => {
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
    const [fotos, setFotos] = useState([]);

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

        if (name === "destinos") {
            const destino = JSON.parse(value)
            const index = form.destinos.findIndex(s => s.destino === destino.destino && s.hotel === destino.hotel && s.provincia === destino.provincia)
            const newArray = [...form.destinos.slice(0, index), ...form.destinos.slice(index + 1)];
            setForm({
                ...form,
                destinos: newArray
            })
        }

        if (name === "servicio") {
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

        if (name === "salidas") {
            const fechas = [...form.salidas]
            const nuevasFechas = fechas.filter(f => f != value)
            setForm({
                ...form,
                salidas: nuevasFechas
            })
        }

        if(name === "fotos"){
            const newFotos = [...fotos]
            newFotos.splice(value, 1)
            setFotos(newFotos)
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

    const handleFotos = e => {
        const nuevasFotos = [...fotos];

        for (let i = 0; i < e.target.files.length; i++) {
          nuevasFotos.push(e.target.files[i]);
        }
    
        setFotos(nuevasFotos);
    }

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

            const formData = new FormData();
            formData.append("viaje",JSON.stringify(form))
            fotos.forEach((imagen) => {
                formData.append(`foto`, imagen);
              });

            fetch("http://localhost:8080/api/viajes", {
                method: 'POST',
                body: formData,
            })
                .then(res => res.json())
                .then(data => console.log(data));
        }
        setShouldSendRequest(false);
    }, [form, shouldSendRequest]);

    return (
        <div className={`p-10 bg-white ${onClose ? "popupOnClose" : "popupOnOpen"}`}>
            <div className='flex flex-col'>
                <div style={{ boxShadow: "0px 20px 40px 0px rgba(0, 0, 0, 0.35)" }} className='p-6 rounded-3xl'>
                    <div className='flex flex-col gap-10 items-end md:flex-row md:justify-between'>
                        <div className='flex flex-col gap-10 md:flex-row flex-wrap'>
                            <div >
                                <label htmlFor="first-name" className="text-3xl font-medium">
                                    Destino
                                </label>
                                <div className="mt-2">
                                    <input type="text" name='destino' value={destino.destino}
                                        onChange={e => handleDestino(e.target.name, e.target.value)}
                                        className="w-96 rounded-md border-0 ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-3xl   h-16 "
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="first-name" className="text-3xl font-medium">
                                    Hotel
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text" name="hotel" value={destino.hotel}
                                        onChange={(e) => handleDestino(e.target.name, e.target.value)}
                                        className="w-96 rounded-md border-0 ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-3xl   h-16 "
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="country" className="text-3xl font-medium">
                                    Provincia
                                </label>
                                <div className="mt-2">
                                    <select
                                        name="provincia"
                                        onChange={(e) => handleDestino(e.target.name, e.target.value)}
                                        className=" w-96 rounded-md border-0 ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-3xl   h-16  "
                                    >
                                        <option selected disabled>Seleccionar</option>
                                        <option>Buenos aires</option>
                                        <option>Cordoba</option>
                                        <option>Santa Fe</option>
                                    </select>
                                </div>
                            </div>

                        </div>
                        <div className="">
                            <button type="submit"
                                onClick={() => setForm(prevForm => ({
                                    ...prevForm,
                                    destinos: [...prevForm.destinos, destino]
                                }))}
                                className="w-96 rounded-md bg-indigo-600 px-6 py-2 text-3xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Agregar
                            </button>
                        </div>

                    </div>
                    {form.destinos.length > 0 ?
                        <div className='flex flex-wrap gap-2 max-w-full py-5'>
                            {form.destinos != null ? form.destinos.map(d => (
                                <div style={{ border: "1px solid #6b7280" }} className='flex mt-2 items-center max-w-max p-1 rounded-md'>
                                    <div className='text-3xl mx-2'>
                                        {d.destino}, {d.hotel}, {d.provincia}
                                    </div>
                                    <div className='mx-2'>
                                        <button className='flex items-center cursor-pointer'

                                            onClick={() => handleEliminar("destinos", JSON.stringify({ destino: d.destino, hotel: d.hotel, provincia: d.provincia }))}
                                        >
                                            <img src="./src/img/cross.svg" alt="" />
                                        </button>
                                    </div>
                                </div>
                            )) : null}
                        </div>
                        : null
                    }
                    <div className='flex justify-evenly py-5 md:gap-5 md:justify-start'>
                        <div className="mt-2">
                            <label htmlFor="first-name" className="block text-3xl font-medium    ">
                                Dias
                            </label>
                            <div className="mt-2">
                                <select name='dias'
                                    onChange={(e) => { setDias(e.target.value), handleInputs(e.target.name, e.target.value) }}
                                    className="w-40 rounded-md border-0 ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-3xl   h-16"
                                >
                                    {cantidadDias.map(c => (<option value={c + 1}>{c + 1}</option>))}
                                </select>
                            </div>
                        </div>
                        <div className="mt-2">
                            <label htmlFor="first-name" className="block text-3xl font-medium  ">
                                Noches
                            </label>
                            <div className="mt-2">
                                <select name='noches'
                                    onChange={(e) => { handleInputs(e.target.name, e.target.value) }}
                                    className=" w-40 rounded-md border-0 ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-3xl   h-16"
                                >
                                    {cantidadNoches.map(c => (<option value={c + 1}>{c + 1}</option>))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div>
                        {arrayDias.length > 0 && arrayDias.map((d, index) => (
                            <div key={index} className="mt-2">
                                <label htmlFor="first-name" className="block text-3xl font-medium    ">
                                    Dia {index + 1}:
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        style={{ resize: 'none', overflow: 'hidden' }}
                                        name={`dia-${index + 1}`}
                                        value={form.itinerario[index]?.texto || ''}
                                        onChange={(e) => handleDiaChange(index + 1, e.target.value)}
                                        rows={1}
                                        className=" w-full block rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-3xl "
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='flex flex-col items-end gap-5 md:flex-row md:justify-start py-5'>
                        <div className='md:flex md:flex-row md:gap-10 flex-wrap	'>
                            <div className='flex flex-col py-5 md:py-0'>
                                <label htmlFor="first-name" className="text-3xl font-medium">
                                    Servicio
                                </label>
                                <div className="mt-2">
                                    <select
                                        name="servicio"
                                        onChange={(e) => handleServicio(e.target.name, e.target.value)}
                                        className="w-96 rounded-md border-0 ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-3xl   h-16"
                                    >
                                        <option selected disabled>Seleccionar</option>
                                        <option>Comida</option>
                                        <option>Transporte</option>
                                    </select>
                                </div>
                            </div>

                            <div className='flex flex-col py-5 md:py-0'>
                                <label htmlFor="first-name" className="block text-3xl font-medium">
                                    Sub servicio
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        // value={servicio.subServicios}
                                        name='subServicios'
                                        onChange={(e) => handleServicio(e.target.name, e.target.value)}
                                        className=" w-96 rounded-md border-0 ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-3xl   h-16"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-end gap-x-6">
                            <button type="submit"
                                onClick={() => handleServicios(servicio.servicio, servicio.subServicios)}
                                className=" w-96 rounded-md bg-indigo-600 px-6 py-2 text-3xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Agregar
                            </button>
                        </div>
                    </div>

                    {servicios != null && servicios.length > 0 ? servicios.map(s => (
                        s.subServicios != 0 ?
                            <div className='flex flex-col'>
                                <div className='flex flex-col text-3xl font-medium py-5'>
                                    {s.servicio}:
                                </div>
                                <div className='flex flex-col text-3xl font-medium gap-5'>
                                    {s.subServicios.map(ss => (
                                        <div style={{ border: "1px solid #6b7280" }} className='flex mx-2 items-center max-w-max p-1 rounded-md '>
                                            <span className='mx-2 text-3xl font-normal'>
                                                {ss}
                                            </span>
                                            <div className='mx-2'>
                                                <button className='flex items-center cursor-pointer'
                                                    onClick={() => handleEliminar("servicio", JSON.stringify({ servicio: s, subServicio: ss }))}
                                                >
                                                    <img src="./src/img/cross.svg" alt="" />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div> : null
                    )) : null}
                    <div className='flex flex-col items-center md:items-start'>
                        <div className='flex flex-col items-end gap-5 py-5 md:w-full md:justify-start md:flex-row' >
                            <div className='flex flex-col '>
                                <label htmlFor="first-name" className="text-3xl font-medium ">
                                    Salidas
                                </label>
                                <div className="mt-2">
                                    <input type="date" onChange={e => { setFechas([e.target.value], console.log(form)) }}
                                        className="w-96 rounded-md border-0 ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-3xl   h-16"
                                    />
                                </div>
                            </div>
                            <div className="flex items-center justify-end gap-x-6 ">
                                <button type="submit" value={fechas}
                                    onClick={(e) => setForm(prevForm => ({
                                        ...prevForm,
                                        salidas: [...prevForm.salidas, e.target.value]
                                    }))}
                                    className="w-96 rounded-md bg-indigo-600 px-6 py-2 text-3xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Agregar
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-wrap gap-2 py-5'>
                        {form.salidas != null ? form.salidas.map(f => (
                            <div style={{ border: "1px solid #6b7280" }} className='flex items-center max-w-max p-1 rounded-md'>
                                <span className='mx-2 text-3xl font-normal'>
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
                    <div className='flex flex-col md:flex-row gap-10'>
                        <div className='flex flex-col items-center'>
                            <div className="mt-2 ">
                                <label htmlFor="first-name" className="block text-3xl font-medium">
                                    Precio
                                </label>
                                <div className="mt-2 ">
                                    <input type="number" name="precio"
                                        // value={form.precio}
                                        onChange={e => handleInputs(e.target.name, e.target.value)}
                                        className=" w-96 rounded-md border-0 ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-3xl   h-16 "
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col items-center w-full'>
                            <div className="mt-2 w-full md:w-10/12">
                                <label htmlFor="first-name" className="block text-3xl font-medium">
                                    Descripcion
                                </label>
                                <div className="mt-2 ">
                                    <textarea
                                        name="descripcion"
                                        // value={form.descripcion}
                                        onChange={e => handleInputs(e.target.name, e.target.value)}
                                        className=" w-full rounded-md border-0 ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-3xl   h-16"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center md:items-end mt-6'>
                        <div>
                            <label for="cover-photo" className="block text-3xl font-medium">Cover photo</label>
                            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                <div className="text-center">
                                    <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
                                    </svg>
                                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                        <label for="file-upload" className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                            <span>Upload a file</span>
                                            <input onChange={handleFotos} id="file-upload" name="file-upload" type="file" className="sr-only" multiple />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            {fotos.length > 0 ? fotos.map((f, index) => (
                                <div className='relative inline-block'>
                                    <img className='rounded-lg x h-full object-cover' width={"200px"} src={URL.createObjectURL(f)} />
                                    <button onClick={() => handleEliminar("fotos", index)} className='absolute top-0 right-0 border-none cursor-pointer text-white text-2xl bg-red-500 p-2 rounded-lg mr-2 mt-2'>x</button>
                                </div>
                            )) : null}

                        </div>
                    </div>
                    <div className="flex items-center justify-end gap-x-6 py-5">
                        <button
                            type="submit"
                            onClick={e => handleSubmit(e)}
                            className="rounded-md bg-indigo-600 px-6 py-2 text-3xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Crear viaje
                        </button>
                    </div>
                </div>
            </div >
        </div>
    )
}


export default FormViaje