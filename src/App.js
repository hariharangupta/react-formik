import { useState } from "react";

import "./App.css";
// import Form from './Components/Form';
// import FormCopy from './Components/FormCopy';
import "bootstrap/dist/css/bootstrap.min.css";
import FormContainer from "./Components/FormElements/FormContainer";
import LoginForm from "./Components/FormElements/LoginForm";
import RegistrationForm from "./Components/FormElements/RegistrationForm";
import FormApp from "./Components/FormApp";
import ToogleTheme, { themes } from "./Components/ToogleTheme";

function App() {
  const [toogle, setToogle] = useState(themes.darkMode);

  const toogleForm = () => {
    toogle === themes.darkMode
      ? setToogle(themes.ligthMode)
      : setToogle(themes.darkMode);
  };
  return (
    <ToogleTheme.Provider value={toogle}>
      <div className="App" style={toogle}>
        <h1>React Formik</h1>
        <hr></hr>
        <span className="form-check form-switch     ">
          <input
            className="form-check-input  btn-lg  m-auto "
            type="checkbox"
            id="flexSwitchCheckDefault"
            onClick={toogleForm}
          />
          <label
            className="form-check-label "
            htmlFor="flexSwitchCheckDefault"
          ></label>
        </span>
        {/* <Form /> */}
        {/* <FormCopy /> */}
        {/* <FormContainer /> */}
        {/* <LoginForm /> */}
        {/* <RegistrationForm /> */}

        <FormApp />
      </div>
    </ToogleTheme.Provider>
  );
}

export default App;
