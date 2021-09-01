import React from 'react'
import InputElement from './InputElement'
import RadioButtonElement from './RadioButtonElement'
import SelectElement from './SelectElement'
import TextareaElement from './TextareaElement'

function FormikController(props) {
    const {control, ...rest} = props
    switch (control) {
        case"input" :
        return <InputElement {...rest} />
        case"textarea" : 
        return <TextareaElement  {...rest} />
        case"select" :
        return < SelectElement {...rest} />
        case"radio" : 
        return <RadioButtonElement {...rest} />
        case"checkbox" :
        case"date" :
        return
        
        default :return null
    }
}

export default FormikController
