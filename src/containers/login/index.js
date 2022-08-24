import React from 'react'
import { Formik } from 'formik'
import {
  Button,
  Input
} from '../../components'
import { logInValidation } from '../../validationSchemas'
import {
  Container,
  FormContainer,
  Logo,
  Title
} from './styled'

const initialValues = {
  email: '',
  password: ''
}

const LogIn = () => {
  return (
    <Container>
      <div className='hidden sm:block'><Logo src={require('../../assets/img/png/logo/dogger_logo.png')} alt='Dogger' /></div>
      <div className='show-anim relative md:w-96 md:h-96 w-[60%] h-[70%] bg-black/40 rounded-3xl flex justify-center items-center flex-col shadowbox'>
        <Title>Iniciar Sesión</Title>
        <Formik
          initialValues={initialValues}
          validationSchema={logInValidation}
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
            console.log(isValid,isSubmitting)
            return(
            <><div className='mt-8 mb-2   w-[90%]'>
              <Input
                error={errors.email}
                label='Correo'
                name='email'
                onBlur={handleBlur}
                onChange={handleChange}
                type='email'
                value={values.email}
              />
              </div>
              <div className='mb-2 w-[90%]'>
              <Input
                error={errors.password}
                label='Contraseña'
                name='password'
                onBlur={handleBlur}
                onChange={handleChange}
                type='password'
                value={values.password}
              /></div>
              <div className='-mb-10 w-[90%]'>
              <Button
                disabled={!isValid || isSubmitting}
                onPress={handleSubmit}
                wide
              >
                Entrar
              </Button>
              </div>
            </>
          )}}
        </Formik>
      </div>
    </Container>
  )
}

export default LogIn
// <Logo src={require('../../assets/img/png/logo/dogger_logo.png')} alt='Dogger' />