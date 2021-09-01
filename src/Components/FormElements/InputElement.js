import React from 'react';
import {Field, ErrorMessage} from 'formik'

function InputElement(props) {
    const {label, name, ...rest } = props
    return (
        <div className = "col-md">
            <label htmlFor ={name}>{label}</label>
            <Field  name = {name} id={name} {...rest}  />
            <ErrorMessage name= {name} />
        </div>
    )
}

export default InputElement
