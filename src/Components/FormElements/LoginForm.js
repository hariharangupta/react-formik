
import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikController from './FormikController'

function LoginForm () {
  const initialValues = {
    email: '',
    password: ''
  }

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .required('Required'),
    password: Yup.string().required('Required')
  })

  const onSubmit = values => {
    console.log('Form data', values)
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {formik => {
        return (
          <Form className  ="w-25 m-auto">
            <FormikController
              control='input'
              // control='chakraInput'
              type='email'
              label='Email'
              name='email'
            />
            <FormikController
              control='input'
              type='password'
              label='Password'
              name='password'
            />
            <button  className = "btn btn-primary my-5" type='submit' disabled={!formik.isValid}>Submit</button>
          </Form>
        )
      }}
    </Formik>
  )
}

export default LoginForm
