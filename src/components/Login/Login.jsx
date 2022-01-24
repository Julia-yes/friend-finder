import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { values } from "redux-form";

const ErrorPattern = (item, minSumbols, maxSumbols) => (values) => {
item : Yup.string()
  .min(minSumbols, 'Too Short!')
  .max(maxSumbols, 'Too Long!')
  .required('Required')
}

const ErrorMessagesSchema = Yup.object().shape({
  ErrorPattern(login, 2, 50),
  ErrorPattern(password, 2, 50),
});

const Login = (props) => {
    return <div>
                <div>Create profile</div>
                <LoginForm /> 
            </div>
}

export default Login

const LoginForm = () => (
    <div>
      <Formik
        initialValues={{ login: '', password: '' }}
        validate={values => {
          const errors = {};
          if (!values.login) {
            errors.login = 'Required';
          } 
          if (!values.password) {
            errors.password = 'Required';
          } 
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            Login<Field type="login" name="login" onChange={handleChange} onBlur={handleBlur} value={values.login} />
            {errors.login && touched.login && errors.login} <br></br>
            Password<Field type="password" name="password" onChange={handleChange} onBlur={handleBlur} value={values.password} />
            {errors.password && touched.password && errors.password}<br></br>
            <Field type="checkbox" name="checkbox"/> remember me <br></br>
            <button type="submit" disabled={isSubmitting}>
              Create
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
  
 