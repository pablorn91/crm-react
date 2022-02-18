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
                const url = `http://localhost:4000/clientes/${id}`
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
        <h1 className='font-black text-4xl text-blue-900'>Editar Cliente</h1>
        <p className='mt-3'>Edita los campos para actualizar el cliente</p>

        <Formulario 
          cliente= {cliente}
          cargando={cargando}
        />
    </>
  )
}

export default EditarCliente