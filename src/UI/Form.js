import React from "react";
import classes from "./Form.module.css";

const Form = ({ id, name, onChange, detail }) => {
  return (
    <form className={classes.myform}>
      <label htmlFor={id}>
        {id} {detail}
      </label>

      <input
        className={classes.slider}
        type="range"
        id={id}
        name={name}
        min="0"
        max="1000"
        step="1"
        onChange={onChange}
      />
    </form>
  );
};

export default Form;
