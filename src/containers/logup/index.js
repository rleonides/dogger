import React from 'react'
import { Formik } from 'formik'
import {
  Button,
  Input
} from '../../components'
import { logUpValidation } from '../../validationSchemas'
import {
  Container,
  Title,Logo
} from './styled'

const initialValues = {
  email: '',
  password: '',
  name: '',
  lastName: '',
  phone: '',
  address: '',
  confirmPassword: ''
}

const LogUp = () => {
  return (
    <Container>
      <div className='relative hidden sm:block'>
        <Logo src={require('../../assets/img/png/logo/dogger_logo.png')} alt='Dogger'/>
        </div>
      <div className='show-anim nice-scroll relative p-2 md:w-96 md:h-96 w-[60%] h-[70%] bg-black/40 rounded-3xl flex justify-center items-center flex-col shadowbox'>
      <Title>Registro</Title>
     
      <Formik
        initialValues={initialValues}
        validationSchema={logUpValidation}
        onSubmit={(props) => {
          console.log('formik props >>>', props)
        }}
      >
        {({
          values,
          errors,
          handleChange,
          handleSubmit,
          handleBlur,
          isSubmitting,
          isValid
        }) => { 
          
          return(
          <>
          <div className='overflow-y-scroll w-full m-2 insetShadow'>
            <Input
              error={errors.name}
              label='Nombre(s)'
              name='name'
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.name}
            />
            <Input
              error={errors.lastName}
              label='Apellidos'
              name='lastName'
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.lastName}
            />
            <Input
              error={errors.email}
              label='Correo'
              name='email'
              onBlur={handleBlur}
              onChange={handleChange}
              type='email'
              value={values.email}
            />
              <Input
              error={errors.address}
              label='Dirección'
              name='address'
              onBlur={handleBlur}
              onChange={handleChange}
              type='text'
              value={values.address}
            />
            <Input
              error={errors.phone}
              label='Teléfono'
              name='phone'
              onBlur={handleBlur}
              onChange={handleChange}
              type='tel'
              value={values.phone}
            />
      
            <Input
              error={errors.password}
              label='Contraseña'
              name='password'
              onBlur={handleBlur}
              onChange={handleChange}
              type='password'
              value={values.password}
            />
            <Input
              error={errors.confirmPassword}
              label='Confirmar contraseña'
              name='confirmPassword'
              onBlur={handleBlur}
              onChange={handleChange}
              type='password'
              value={values.confirmPassword}
            />
            </div>
            
            <Button
              disabled={!isValid || isSubmitting}
              onPress={handleSubmit}
              wide
            >
              Registrarse
            </Button>
          </>

        )}}
      </Formik>
      
      </div>
    </Container>
  )
}
//Se elimino un campo de correo y se agrega un input address
export default LogUp
