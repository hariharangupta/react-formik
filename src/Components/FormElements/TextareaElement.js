import React from 'react';
import {Field, ErrorMessgae, ErrorMessage} from 'formik';


function TextareaElement(props) {
    const {name, label, ...rest} = props
    return (
        <div>
            <label htmlFor = {name} >{label}</label>
            <Field as = 'textarea' id= {name} name = {name} {...rest}  />
            <ErrorMessage name = {name} />
        </div>
    )
}

export default TextareaElement
