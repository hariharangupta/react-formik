import React from "react";
import { Formik,  Form } from "formik";
import * as Yup from 'yup'
import FormikController from "./FormikController";


function FormContainer() {
     const dropDown = [
         { key :"select the option", value : ""},
         { key : "option1", value : "option1"},
         { key : "option2", value : "option2"},
         { key : "option3", value : "option3"},
         { key : "option4", value : "option4"},
         
     ]
     const radioOptions = [
        { key: 'Option 1', value: 'rOption1' },
        { key: 'Option 2', value: 'rOption2' },
        { key: 'Option 3', value: 'rOption3' },
        
      ]
    const initialFormValues = {
        email: "",
        description:"",
        selectOption:"",
        radioOption: '',
      };
      const ValidateSchema = Yup.object({
        email: Yup.string().required('Email Required'),
        description: Yup.string().required('description Required'),
        selectOption: Yup.string().required("selsect an option"),
        radioOption: Yup.string().required('Required'),
      });
      const onSubmit = (values) => {
        console.log("formData", values);
      };

  return (
    <Formik
      initialValues={initialFormValues}
      ValidateSchema={ValidateSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormikController
             control='input'
             type='email'
             label='Email'
             name='email'
          />
          <FormikController
          control='textarea'
          label='Description'
          name='textarea'
       />
        <FormikController
          control='select'
          label='Select an option'
          name='selectOption'
          options = {dropDown}
       />
       <FormikController
            control='radio'
            label='Radio Buttons'
            name='radioOption'
            options={radioOptions}
          />
          

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default FormContainer;
