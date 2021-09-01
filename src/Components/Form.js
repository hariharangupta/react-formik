import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
 const initialValues = {
    username: "",
    email: "",
    password: "",
  }

  const onSubmit = (values) => {
    console.log("form data", values)
}



const validationSchema  = Yup.object({
   username : Yup.string().required('username required'),
   email: Yup.string().email("invaild email").required('email required'),
   password: Yup.string().required("invaild password")
})


function Form() {
  const data = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });

  console.log("error", data.touched)
  return (
    <div>
      <form onSubmit={data.handleSubmit}>
        <label htmlFor="username">Username</label>
        <br></br>
        <br></br>
        <input
          type="text"
          id="username"
          name="username"
          {... data.getFieldProps('username')}
        />
        { data.touched.username  && data.errors.username ?(<div   style = {{color:"red"}}>{data.errors.username}</div>): null}
        <br></br>
        <label htmlFor="email">E-mail</label>
        <br></br>
        <br></br>
        <input
          type="email"
          id="email"
          name="email"
          {... data.getFieldProps('email')}

        />
        {  data.touched.email && data.errors.email ?( <div  style = {{color:"red"}} >{data.errors.email}</div>): null}

        <br></br>
        <label htmlFor="password">Password</label>
        <br></br>
        <br></br>
        <input
          type="password"
          id="password"
          name="password"
          {... data.getFieldProps('password')}

        />
        {  data.touched.password &&  data.errors.password ? (<div style = {{color:"red"}}>{data.errors.password}</div>): null}

        <br></br>
        <button type="submit ">Sumbit</button>
      </form>
    </div>
  );
}

export default Form;
