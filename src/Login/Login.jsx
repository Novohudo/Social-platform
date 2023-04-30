import s from "./Login.module.css";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { createField, Input } from "../components/common/FormsControls/FormsControls";
import { required } from "../utilites/validators";
import { login } from "../redux/auth-reducer";
import { Navigate } from "react-router-dom";


const LoginForm = ({ handleSubmit, error }) => {
 return (
  <form className={s.form} onSubmit={handleSubmit}>
   {createField([required], "Email", "email", Input)}
   {createField([required], "Password", "password", Input, { type: "password" })}
   {createField([], "rememberMe", "rememberMe", Input, { type: "checkbox" }, "remember me")}

   {error && <div className={s.formSummeryError}>
    {error}
   </div>}
   <div>
    <button>Login</button>
   </div>
  </form>
 );
};
const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
 const onSubmit = (formData) => {
  props.login(formData.email, formData.password, formData.rememberMe);
 };
 if (props.isAuth) {
  return <Navigate to={"/profile"} />;
 }
 return (
  <div className={s.container}>
   <h1>Login</h1>
   <LoginReduxForm onSubmit={onSubmit} />
  </div>
 );
};
const mapStateToProps = (state) => ({
 isAuth: state.auth.isAuth
});
export default connect(mapStateToProps, { login })(Login);
