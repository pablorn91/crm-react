import React from 'react';
import Alerta from './Alerta';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const Formulario = () => {

  const nuevoClienteSchema = Yup.object().shape({
        nombre: Yup.string()
                    .min(3, 'El nombre es muy corto')
                    .max(20, 'El nombre es muy largo')
                    .required('El Nombre del Cliente es Obligatorio'),

        empresa: Yup.string()
                    .required('El Nombre la empresa es Obligatorio'),

        email:   Yup.string()
                    .email('El Email no es válido')
                    .max(20, 'El nombre es muy largo')
                    .required('El Email es Obligatorio'),

        telefono: Yup.number().typeError('El número no es válido')
                    .integer('Número no válido')
                    .positive('Número no válido')
  })

  const handleSubmit = (valores) => {
    console.log(valores)
  }

  return (
    <div className='bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto'>
        <h1 className='text-gray-600 font-bold text-xl uppercase text-center'>Agregar Cliente</h1>

        <Formik
            initialValues={{
              nombre: '',
              empresa: '',
              email: '',
              telefono: '',
              notas: ''
            }}

            onSubmit={ (values) => {
              handleSubmit(values)
            } }

            validationSchema={nuevoClienteSchema}
        >
          {({errors, touched}) => {
        
              // console.log(data)
        
            return (
                  
            <Form
              className='mt-10'
            >
                <div className='mb-4'>
                    <label
                        className='text-gray-800'
                        htmlFor='nombre'
                    >Nombre:</label>  
                    <Field 
                      type="text"
                      className="mt-2 block w-full p-3 bg-gray-50"
                      id="nombre"
                      placeholder="Nombre del Cliente"
                      name="nombre"
                    />
                    { errors.nombre && touched.nombre ? (
                      <Alerta>{errors.nombre}</Alerta>
                    ) : null }
                </div> 

                <div className='mb-4'>
                    <label
                        className='text-gray-800'
                        htmlFor='empresa'
                    >Empresa:</label>  
                    <Field 
                      type="text"
                      className="mt-2 block w-full p-3 bg-gray-50"
                      id="empresa"
                      placeholder="Empresa del Cliente"
                      name="empresa"
                    />
                    { errors.empresa && touched.empresa ? (
                      <Alerta>{errors.empresa}</Alerta>
                    ) : null }
                </div>

                <div className='mb-4'>
                    <label
                        className='text-gray-800'
                        htmlFor='email'
                    >Email:</label>  
                    <Field 
                      type="email"
                      className="mt-2 block w-full p-3 bg-gray-50"
                      id="email"
                      placeholder="Email del Cliente"
                      name="email"
                    />
                     { errors.email && touched.email ? (
                      <Alerta>{errors.email}</Alerta>
                    ) : null }
                </div> 

                <div className='mb-4'>
                    <label
                        className='text-gray-800'
                        htmlFor='telefono'
                    >Teléfono:</label>  
                    <Field 
                      type="tel"
                      className="mt-2 block w-full p-3 bg-gray-50"
                      id="telefono"
                      placeholder="Teléfono del Cliente"
                      name="telefono"
                    />
                    { errors.telefono && touched.telefono ? (
                      <Alerta>{errors.telefono}</Alerta>
                    ) : null }
                </div> 
                <div className='mb-4'>
                    <label
                        className='text-gray-800'
                        htmlFor='notas'
                    >Notas:</label>  
                    <Field
                      as="textarea"
                      type="text"
                      className="mt-2 block w-full p-3 bg-gray-50"
                      id="notas"
                      placeholder="Notas del Cliente"
                      name="notas"
                    />
                </div>

                <input 
                    type="submit" 
                    value="Agregar Cliente"
                    className='mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg'
                />

            </Form>
          )}} 
        </Formik>

    </div>
  )
}

export default Formulario