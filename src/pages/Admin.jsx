import { useEffect, useState } from 'react'
import FormViaje from '../components/FormViaje'
import '../css/admin.css'
import FormEdit from '../components/FormEdit'

const Admin = () => {

    const [popup, setPopup] = useState(false)
    const [onClose, setOnClose] = useState(false)
    const [viajes, setViajes] = useState([])
    const [loading, isLoading] = useState(false)
    const [viaje, setViaje] = useState({})
    const [edit, isEdit] = useState(false)

    useEffect(() => {
        getViajes()
    }, [])

    const getViajes = () => {
        fetch("http://localhost:8080/api/viajes", {
            method: "GET",
            headers: {
                "content-type": "application/json"
            }
        }).then(res => res.json())
            .then(data => setViajes(data))
    }

    const togglePopup = () => {
        setPopup(!popup)
    }

    const handleEdit = id => {
        isEdit(true)
        fetch("http://localhost:8080/api/viajes/ " + id, {
            method: "GET",
            headers: {
                "content-type": "application/json"
            }
        }).then(res => res.json())
            .then(data => setViaje(data))
            .then(() => togglePopup())
    }

    const handleDelete = id => {
        fetch("http://localhost:8080/api/viajes/" + id, {
            method: "DELETE"
        }).then(() => getViajes())
    }

    const handleFavorite = (id) => {
        fetch(`http://localhost:8080/api/viajes/favorito/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(() => getViajes()) // Actualizar la lista de viajes después de marcar/desmarcar como favorito
        .catch((error) => console.error('Error al marcar/desmarcar como favorito:', error));
    };

    const closePopup = (e) => {
        if (e.target.classList.contains('overlay')) {
            setOnClose(true)
            isEdit(false)
            setTimeout(() => {
                setOnClose(false)
                setPopup(false);
            }, 500);
        }
    };

    useEffect(() => {
        // popup ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"
    }, [popup])


    return (
        <div className='content-baseline'>
            <div className="container mx-auto flex flex-col my-16 shadow rounded-lg">
                <div className="admin-header w-3/4 flex items-center justify-between mx-auto my-6">
                    <div className="admin-header-title">
                        <h1>Viajes</h1>
                    </div>
                    <div>
                        <button onClick={() => togglePopup()} className='text-2xl bg-indigo-600 text-white py-2 px-4 rounded-lg'>Crear viaje</button>
                    </div>
                </div>
                <div className="admin-dashboard w-full flex items-center justify-center">
                    <div className="rounded-lg border border-gray-200 shadow-md m-5 w-full">
                        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="2xl:text-6xl md:text-2xl px-6 py-4 font-medium text-gray-900">Destino</th>
                                    <th scope="col" className="2xl:text-6xl md:text-2xl px-6 py-4 font-medium text-gray-900">Precio</th>
                                    <th scope="col" className="2xl:text-6xl md:text-2xl px-6 py-4 font-medium text-gray-900">Provincia</th>
                                    <th scope="col" className="2xl:text-6xl md:text-2xl px-6 py-4 font-medium text-gray-900">Hotel</th>
                                    <th scope="col" className="2xl:text-6xl md:text-2xl px-6 py-4 font-medium text-gray-900"></th>
                                </tr>
                            </thead>
                            {viajes.map(d => (
                                <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                                    <tr className="hover:bg-gray-50">
                                        <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                                            <div className="text-sm">
                                                <div class="2xl:text-5xl md:text-2xl font-medium text-gray-700">
                                                    {d.destinos.map((destino, index) => (
                                                        <h2 key={index}>
                                                            {`${destino.destino}${index < d.destinos.length - 1 ? ' - ' : ''}`}
                                                        </h2>))}
                                                </div>
                                            </div>
                                        </th>
                                        <td class="px-6 py-4">
                                            <span
                                                class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 2xl:text-5xl md:text-2xl font-semibold text-green-600"
                                            >
                                                {d.precio.toLocaleString('es-AR', {
                                                    style: 'currency',
                                                    currency: 'ARS',
                                                    minimumFractionDigits: 0,
                                                    maximumFractionDigits: 0,
                                                })}
                                            </span>
                                        </td>
                                        <td class="px-6 py-4 2xl:text-5xl md:text-2xl">{d.destinos.map(ds => (ds.provincia + " - "))}</td>
                                        <td class="px-6 py-4">
                                            <div class="flex gap-2 flex-col">
                                                {d.destinos.map(ds => (<span
                                                    class="2xl:text-4xl md:text-2xl inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 font-semibold text-blue-600"
                                                >
                                                    {ds.hotel}
                                                </span>))}
                                            </div>
                                        </td>
                                        <td class="px-6 py-4">
                                            <div class="flex justify-end gap-4">
                                                <button onClick={() => handleFavorite(d.id)}>
                                                    <img className='2xl:w-16 lg:w-8 md:w-6' src={d.favorite ? "./src/img/star-regular.svg" : "./src/img/star-solid.svg"} alt="" />
                                                </button>
                                                <button onClick={() => handleDelete(d.id)}>
                                                    <img className='2xl:w-16 lg:w-8 md:w-6' src="./src/img/delete.svg" alt="" />
                                                </button>
                                                <button onClick={() => handleEdit(d.id)}>
                                                    <img className='2xl:w-16 lg:w-8 md:w-6' src="./src/img/edit.svg" alt="" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            ))}
                        </table>
                    </div>
                </div>
            </div>
            {popup && (
                <div onClick={closePopup} className='overlay'>
                    <div className=''>
                        {edit ? <FormEdit popup={popup} onClose={onClose} viaje={viaje} /> : <FormViaje popup={popup} onClose={onClose} />}
                    </div>
                </div>
            )
            }
        </div>
    )
}

export default Admin