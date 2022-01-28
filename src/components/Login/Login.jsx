import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
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
  let userId = props.userId
  if (props.isLogin) {
  return <Navigate replace to={"/profile/" + userId} />
}

    return <div>
                <div>Create profile</div>
                <LoginForm loginProcess = {props.loginProcess} isLogin = {props.isLogin} errorMessage = {props.errorMessage}/> 
            </div>
};

const mapStateToProps = (state) => ({
  isLogin : state.auth.isLogin,
  userId: state.auth.userId,
  errorMessage: state.auth.errorMessage
})

export default connect(mapStateToProps, {loginProcess}) (Login)

const LoginForm = (props) => (
    <div>
      <Formik      
        initialValues={{ email: '', password: '' }}
        validationSchema={ErrorMessagesSchema}
        onSubmit={(values) => {
          props.loginProcess(values.email, values.password, values.checkbox);
            
          }
        }
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
            {props.errorMessage && <div className={s.error__full_form}>{props.errorMessage}</div> }
            <button type="submit" disabled={isSubmitting}>
              Create
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
  
 