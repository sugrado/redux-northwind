import React, { useState } from "react";

export default function TextInput({
  name,
  label,
  onChange,
  placeHolder,
  value,
  error,
}) {
  let wrapperClass = "form-group";
  if (error && error.length > 0) {
    wrapperClass += "has-error";
  }
  const [currentValue] = useState(value);
  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
          type="text"
          name={name}
          className="form-control"
          placeholder={placeHolder}
          defaultValue={currentValue}
          onChange={onChange}
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
}
