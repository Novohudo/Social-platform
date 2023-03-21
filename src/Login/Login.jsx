import s from "../components/common/FormsControls/FormsControls.module.css";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { createField, Input } from "../components/common/FormsControls/FormsControls";
import { required } from "../utilites/validators";
import { login, logout } from "../redux/auth-reducer";
import { Navigate } from "react-router-dom";


const LoginForm = ({ handleSubmit, error }) => {
	return (
		<form onSubmit={handleSubmit}>
			{createField([required], "Email", "email", Input)}
			{createField([required], "Password", "password", Input, { type: "password" })}
			{createField([], "rememberMe", "rememberMe", Input, { type: "checkbox" }, "remember me")}
			{/* проверка на ошибку */}
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
		<div>
			<h1>Login</h1>
			<LoginReduxForm onSubmit={onSubmit} />
		</div>
	);
};
const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth
});
export default connect(mapStateToProps, { login })(Login);
