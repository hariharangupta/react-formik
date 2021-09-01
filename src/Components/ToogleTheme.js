import React from "react"

export const themes = {
    darkMode:{
        backgroundColor: 'black',
        color: 'white'
    },
    ligthMode:{
        backgroundColor: 'white',
        color: 'black'
    }
}

const ToogleTheme = React.createContext(themes.darkMode)

export default ToogleTheme