import React from "react";
import { Formik, Field} from 'formik';
import * as Yup from 'yup';
import s from "./Login.module.css";
import {loginProcess} from "../redux/auth-reducer";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";

const ErrorPattern = (item, minSumbols, maxSumbols) => {
  return {
    [item]: Yup.string()
      .min(minSumbols, 'Too Short!')
      .max(maxSumbols, 'Too Long!')
      .required('Required')
  };
}

const ErrorMessagesSchema = Yup.object().shape({
  ...ErrorPattern('email', 5, 30),
  ...ErrorPattern('password', 5, 50),
});

const Login = (props) => {
  if (props.isLogin) {
    return <Navigate replace to={"/profile/" + props.userId} />
  }
  return <div>
    <div>Create profile</div>
    <LoginForm loginProcess = {props.loginProcess} isLogin = {props.isLogin} errorMessage = {props.errorMessage} captcha = {props.captcha} /> 
  </div>
};

const mapStateToProps = (state) => ({
  isLogin : state.auth.isLogin,
  userId: state.auth.userId,
  errorMessage: state.auth.errorMessage,
  captcha: state.auth.captcha
})

export default connect(mapStateToProps, {loginProcess}) (Login)

const LoginForm = ({loginProcess, errorMessage, captcha}) => (
  <div>
    <Formik      
      initialValues={{ email: '', password: '' }}
      validationSchema={ErrorMessagesSchema}
      onSubmit={(values) => {loginProcess(values.email, values.password, values.checkbox, values.captcha)}}
    >
    {({ values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <Field type="email" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} placeholder="email"/>
          {errors.email && touched.email ? <span className={s.error}>{errors.email}</span> : null} <br></br>
          <Field type="password" name="password" onChange={handleChange} onBlur={handleBlur} value={values.password} placeholder="password" />
          {errors.password && touched.password ? <span className={s.error}>{errors.password}</span> : null} <br></br>
          <Field type="checkbox" name="checkbox"/> remember me <br></br>
          {captcha && <img src={captcha}></img>}
          {captcha && <Field type="input" name="captcha" onChange={handleChange} onBlur={handleBlur} value={values.captcha} placeholder="Type symbols from image" />}
          {errorMessage && <div className={s.error__full_form}>{errorMessage}</div>}
          <button type="submit" >
            Create
          </button>
        </form>
    )}
    </Formik>
  </div>
);
  
 