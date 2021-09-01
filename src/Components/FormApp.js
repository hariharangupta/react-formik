import React, { useContext } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import DataField from "./DataField";
import ToogleTheme, { themes } from "./ToogleTheme";

const initialAppValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  Description: "",
};
const onSubmit = (values, prosp) => {
  console.log("values", values);
  prosp.resetForm();
};

const validate = Yup.object({
  firstName: Yup.string()
    .min(4, "  Minimum 4 characters required..! ")
    .required("Required Field!"),
  lastName: Yup.string()
    .min(6, "  Minimum 6 characters required..! ")
    .required("Required Field!"),
  email: Yup.string().email("Invalid Format!").required("Required Field!"),
  password: Yup.string()
    .min(6, " Minimum 6 characters required ..!")
    .required("Required Field!"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], " Password not match")
    .required("Required Field!"),
  Description: Yup.string().required("Required Field! "),
});

function FormApp() {
  const formThemes = useContext(ToogleTheme);

  return (
    <div className="container">
      <Formik
        initialValues={initialAppValues}
        validationSchema={validate}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form className="w-25 m-auto  align-items-center justify-content-center ">
            <div className="col">
              <DataField label="FirstName" name="firstName" type="text" />
            </div>
            <div className="col">
              <DataField label="LastName" name="lastName" type="text" />
            </div>
            <div className="col">
              <DataField label="Email" name="email" type="text" />
            </div>
            <div className="col">
              <DataField label="Password" name="password" type="password" />
            </div>

            <div className="col">
              <DataField
                label="confirmPassword"
                name="confirmPassword"
                type="password"
              />
            </div>
            <div className="col">
              <DataField label="Description" name="Description" type="text" />
            </div>

            <div className=" col d-flex flex-row justify-content-center  ">
              <button
                disabled={!(formik.dirty && formik.isValid)}
                type="submit"
                className= "btn btn-primary   m-auto "
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormApp;
