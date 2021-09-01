import React from "react";
import { ErrorMessage, useField } from "formik";

function DataField({ label, ...all }) {
  const [field, meta] = useField(all);
  return (
    <div>
      <label className="col-md-8 " htmlFor={field.name}>
        {" "}
        {label}{" "}
      </label>
      <input
        className={` text-primary form-control ${
          meta.touched && meta.error && "is-invalid  text-danger  "
        } `}
        {...field}
        {...all}
      />
      <ErrorMessage  name={field.name} />
    </div>
  );
}

export default DataField;
