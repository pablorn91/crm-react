import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Formulario from '../components/Formulario'

const EditarCliente = () => {

  const [ cliente, setCliente ] = useState({});
    const [ cargando, setCargando ] = useState(true)

    const { id } = useParams()

    useEffect(() => {
        const obtenerClienteAPI = async () => {
            try {
                const url = `${import.meta.env.VITE_API_URL}/${id}`
                const respuesta = await fetch(url)
                const resultado = await respuesta.json()

                setCliente(resultado)

            } catch (error) {
                console.log(error)
            }
            setTimeout(() => {
                setCargando(!cargando)
            }, 500);
        }
        obtenerClienteAPI()
    }, [])

  return (
    <>
        {cliente?.nombre ? (
          <>
            <h1 className='font-black text-4xl text-blue-900'>Editar Cliente</h1>
            <p className='mt-3'>Edita los campos para actualizar el cliente</p>
          </>
        ) : (
          <div className='text-center'>
            <h1 className='font-black text-4xl text-blue-900'>No hay coincidencias </h1>
            <p className='mt-3'>Intenta volver atrás</p>
          </div>
        )}

        {cliente?.nombre && (
            <Formulario 
              cliente= {cliente}
              cargando={cargando}
            />
        )}
    </>
  )
}

export default EditarCliente