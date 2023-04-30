
import React from "react";
import styles from "./FormsControls.module.css";
import { Field } from "redux-form";

const FormControl = ({ input, meta: { touched, error }, children, ...props }) => {
 const hasError = touched && error;
 return (
  <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
   <div>{children}</div>
   {hasError && <span>{error}</span>}
  </div>
 );
};

export const TextArea = (props) => {
 const { input, meta, child, ...restProps } = props;
 return (
  <FormControl {...props}>
   <textarea {...input} {...restProps} />
  </FormControl>
 );
};

export const Input = (props) => {
 const { input, meta, child, ...restProps } = props;
 return (
  <FormControl {...props}>
   <input {...input} {...restProps} />
  </FormControl>
 );
};

export const createField = (validator, placeholder, name, component, props = {}, text = "") => {
 return (
  <div>
   <Field
    validate={validator}
    placeholder={placeholder}
    name={name}
    component={component}
    {...props}
   />{text}
  </div>
 );
};
