import React, {useState} from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
const initialValues = {
  username: "",
  email: "",
  password: "",
  comments: "",
  location: "",
  social: {
    facebook: "",
    instagram: "",
  },
  phoneNumbers: ["", ""],
  numbers: [],
};

const savedData = {
  username: "Hari ",
  email: "hari@gmail.com",
  password: "12345678",
  comments: "Hello",
  location: "hyderabad",
  social: {
    facebook: "hari",
    instagram: "",
  },
  phoneNumbers: ["123", "342"],
  numbers: [],
};

const validationComments = (values) => {
  let error;
  if (!values) {
    error = "comments Required!";
  }
  return error;
};


const onSubmit = (values, onSumbitProps) => {
  // onSumbitProps.setSubmitting(false)
  onSumbitProps.resetForm()
};

const validationSchema = Yup.object({
  username: Yup.string().required("username required"),
  email: Yup.string().email("invaild email").required("email required"),
  password: Yup.string().required("invaild password"),
});

function FormCopy() {

  const [formData, setFormData] = useState(null)
  return (
    <Formik
      initialValues={ formData  || initialValues }
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {
        formik =>{
          console.log('fromik', formik)
          return(
            <Form>
            <label htmlFor="username">Username</label>
            <br></br>
            <br></br>
            <Field type="text" id="username" name="username" />
            <ErrorMessage name="username" />
            <br></br>
            <label htmlFor="email">E-mail</label>
            <br></br>
            <br></br>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" />
            <br></br>
            <label htmlFor="password">Password</label>
            <br></br>
            <br></br>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" />
            <br></br>
            <label htmlFor="comments">Comments</label>
            <br></br>
            <br></br>
            <div>
              <Field
                as="textarea"
                id="comments"
                name="comments"
                validate={validationComments}
              />
              <ErrorMessage name="comments" />
            </div>
            <br></br>
    
            <label htmlFor="location">Loaction</label>
            <br></br>
            <br></br>
            <Field name="location">
              {(props) => {
                const { field, form, meta } = props;
                return (
                  <div>
                    <input type="text" id="location" {...field} />
                    {meta.touched && meta.error ? <div> {meta.error} </div> : null}
                  </div>
                );
              }}
            </Field>
            <br></br>
            <label htmlFor="facebook">FaceBook</label>
            <br></br>
            <br></br>
            <Field type="text" id="facebook" name="social.facebook"  validate = {validationComments} />
            <ErrorMessage name="social.facebook" />
            <br></br>
            <label htmlFor="instagram">Instagram</label>
            <br></br>
            <br></br>
            <Field type="text" id="instagram" name="social.instagram" validate = {validationComments} />
            <ErrorMessage name="social.instagram" />
            <br></br>
            <label htmlFor="phonenumber1">Phone1</label>
            <br></br>
            <br></br>
            <Field type="text" id="phonenumber1" name="phoneNumbers[0]" />
            <br></br>
            <label htmlFor="phonenumber2">Phone2</label>
            <br></br>
            <br></br>
            <Field type="text" id="phonenumber2" name="phoneNumbers[1]" />
            <br></br>
            <label>Numbers</label>
    
            <br></br>
            <br></br>
    
            <label>List of phone numbers</label>
            <FieldArray name="numbers">
              {(fieldArrayProps) => {
                const { push, remove, form } = fieldArrayProps;
                const { values } = form;
                const { numbers } = values;
                return (
                  <div>
                    {numbers.map((number, index) => (
                      <div key={index}>
                        <Field name={`numbers[${index}]`} />
                        {index > 0 && (
                          <button type="button" onClick={() => remove(index)}>
                            -
                          </button>
                        )}
                      </div>
                    ))}
                    <button type="button" onClick={() => push("")}>
                      +
                    </button>
                  </div>
                );
              }}
            </FieldArray>
            <br></br>
            <br></br>
            {/* <button type = 'button' onClick = {() => formik.validateField('comments')} >validate comments</button>
            <button type = 'button' onClick = {()=> formik.validateForm()} >validate all</button>
            <button type = 'button' onClick = {()=> formik.setFieldTouched('comments')} >touched comments</button>
            <button type = 'button' onClick = {() =>formik.setTouched(
              {
                username : true,
                email : true, 
                password: true,
                comments :true
              }
            )} >touched all</button> */}
            <button onClick = {() => setFormData(savedData)}>load</button>
            <button type="submit" disabled ={ !(formik.dirty && formik.isValid)}>Submit</button>
            {/* submit form on api call */}
            {/* <button type="submit" disabled = {! formik.isValid || formik.isSubmitting }>Submit</button> */}
          </Form>
          )
        }
      }
    </Formik>
  );
}

export default FormCopy;
