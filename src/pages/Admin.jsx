import React, { useEffect, useState } from 'react'
import FormViaje from '../components/FormViaje'
import '../css/admin.css'

const data = [
    {
        destino: "Villa Carlos Paz",
        precio: 40000,
        provincia: "Cordoba",
        hotel: "Las Palmas"
    },
    {
        destino: "San Carlos de Bariloche",
        precio: 40000,
        provincia: "Rio Negro",
        hotel: "Huemul"
    },
    {
        destino: "Villa Carlos Paz, San Carlos de Barilochesadasdadadasdasda",
        precio: 40000,
        provincia: "Cordoba, Santa Cruz",
        hotel: "Las Palmas, Huemul"
    },
    {
        destino: "Villa Carlos Paz, San Carlos de Barilochesadasdadadasdasda",
        precio: 40000,
        provincia: "Cordoba, Santa Cruz",
        hotel: "Las Palmas, Huemul"
    },
    {
        destino: "Villa Carlos Paz, San Carlos de Barilochesadasdadadasdasda",
        precio: 40000,
        provincia: "Cordoba, Santa Cruz",
        hotel: "Las Palmas, Huemul"
    },
    {
        destino: "Villa Carlos Paz, San Carlos de Barilochesadasdadadasdasda",
        precio: 40000,
        provincia: "Cordoba, Santa Cruz",
        hotel: "Las Palmas, Huemul"
    },
    {
        destino: "Villa Carlos Paz, San Carlos de Barilochesadasdadadasdasda",
        precio: 40000,
        provincia: "Cordoba, Santa Cruz",
        hotel: "Las Palmas, Huemul"
    },
    {
        destino: "Villa Carlos Paz, San Carlos de Barilochesadasdadadasdasda",
        precio: 40000,
        provincia: "Cordoba, Santa Cruz",
        hotel: "Las Palmas, Huemul"
    },
    {
        destino: "Villa Carlos Paz, San Carlos de Barilochesadasdadadasdasda",
        precio: 40000,
        provincia: "Cordoba, Santa Cruz",
        hotel: "Las Palmas, Huemul"
    },
    {
        destino: "Villa Carlos Paz, San Carlos de Barilochesadasdadadasdasda",
        precio: 40000,
        provincia: "Cordoba, Santa Cruz",
        hotel: "Las Palmas, Huemul"
    },
    {
        destino: "Villa Carlos Paz, San Carlos de Barilochesadasdadadasdasda",
        precio: 40000,
        provincia: "Cordoba, Santa Cruz",
        hotel: "Las Palmas, Huemul"
    },
    {
        destino: "Villa Carlos Paz, San Carlos de Barilochesadasdadadasdasda",
        precio: 40000,
        provincia: "Cordoba, Santa Cruz",
        hotel: "Las Palmas, Huemul"
    },
    {
        destino: "Villa Carlos Paz, San Carlos de Barilochesadasdadadasdasda",
        precio: 40000,
        provincia: "Cordoba, Santa Cruz",
        hotel: "Las Palmas, Huemul"
    },
]

const Admin = () => {

    const [popup, setPopup] = useState(false)
    const [onClose, setOnClose] = useState(false)

    const togglePopup = () => {
        setPopup(!popup)
    }

    const closePopup = (e) => {
        if (e.target.classList.contains('overlay')) {
          setOnClose(true)
          setTimeout(() => {
            setOnClose(false)
            setPopup(false);
          }, 500);
        }
      };

    useEffect(() => {
        popup ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"
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
                    <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
                        <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th scope="col" class="2xl:text-6xl md:text-2xl px-6 py-4 font-medium text-gray-900">Destino</th>
                                    <th scope="col" class="2xl:text-6xl md:text-2xl px-6 py-4 font-medium text-gray-900">Precio</th>
                                    <th scope="col" class="2xl:text-6xl md:text-2xl px-6 py-4 font-medium text-gray-900">Provincia</th>
                                    <th scope="col" class="2xl:text-6xl md:text-2xl px-6 py-4 font-medium text-gray-900">Hotel</th>
                                    <th scope="col" class="2xl:text-6xl md:text-2xl px-6 py-4 font-medium text-gray-900"></th>
                                </tr>
                            </thead>
                            {data.map(d => (
                                <tbody class="divide-y divide-gray-100 border-t border-gray-100">
                                    <tr class="hover:bg-gray-50">
                                        <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
                                            <div class="text-sm">
                                                <div class="2xl:text-5xl md:text-2xl font-medium text-gray-700">{d.destino}</div>
                                            </div>
                                        </th>
                                        <td class="px-6 py-4">
                                            <span
                                                class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 2xl:text-5xl md:text-2xl font-semibold text-green-600"
                                            >
                                                {d.precio}
                                            </span>
                                        </td>
                                        <td class="px-6 py-4 2xl:text-5xl md:text-2xl">Cordoba, Bariloche</td>
                                        <td class="px-6 py-4">
                                            <div class="flex gap-2 flex-col">
                                                <span
                                                    class="2xl:text-4xl md:text-2xl inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 font-semibold text-blue-600"
                                                >
                                                    {d.hotel}
                                                </span>
                                            </div>
                                        </td>
                                        <td class="px-6 py-4">
                                            <div class="flex justify-end gap-4">
                                                <a x-data="{ tooltip: 'Delete' }" href="#">
                                                    <img className='2xl:w-16 lg:w-8 md:w-6' src="./src/img/delete.svg" alt="" />
                                                </a>
                                                <a x-data="{ tooltip: 'Edite' }" href="#">
                                                    <img className='2xl:w-16 lg:w-8 md:w-6' src="./src/img/edit.svg" alt="" />
                                                </a>
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
                        <FormViaje popup={popup} onClose={onClose}/>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Admin