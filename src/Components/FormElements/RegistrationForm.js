
import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikController from './FormikController'

function RegistrationForm () {
  const options = [
    { key: 'Email', value: 'emailmoc' },
    { key: 'Telephone', value: 'telephonemoc' }
  ]
  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
    modeOfContact: '',
    phone: ''
  }

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .required('Required'),
    password: Yup.string().required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), ''], 'Passwords must match')
      .required('Required'),
    modeOfContact: Yup.string().required('Required'),
    phone: Yup.string().when('modeOfContact', {
      is: 'telephonemoc',
      then: Yup.string().required('Required')
    })
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
          <Form className = "w-25 m-auto">
            <FormikController
              control='input'
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
            <FormikController
              control='input'
              type='password'
              label='Confirm Password'
              name='confirmPassword'
            />
            {/* <FormikController
              control='radio'
              label='Mode of contact'
              name='modeOfContact'
              options={options}
            /> */}
            <FormikController
              control='input'
              type='text'
              label='Phone number'
              name='phone'
            />
            <button className = "btn btn-primary" type='submit' disabled={!formik.isValid}>
              Submit
            </button>
          </Form>
        )
      }}
    </Formik>
  )
}

export default RegistrationForm