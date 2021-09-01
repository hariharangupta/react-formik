import React from 'react';
import {Field, ErrorMessage} from 'formik';


function SelectElement(props) {
    const {name, label, options, ...rest} = props
    return (
        <div>
            <label htmlFor ={name}>{label}</label>
            <Field  as ="select" name= {name} id= {name} {...rest}>
            {
                options.map(option =>{
                   return ( <option key ={option.value} value = {option.value}>
                       {option.key}
                       </option>
                 )
                
                
                })
            }
            </Field>
            <ErrorMessage name ={name} />
        </div>

        
    )
}

export default SelectElement
