import React from "react";
import s from "./ProfileInfo.module.css";
import { Formik, Field} from 'formik';
import * as Yup from 'yup';

const ErrorPattern = (item, minSumbols, maxSumbols) => {
    return {
      [item]: Yup.string()
        .min(minSumbols, 'Too Short!')
        .max(maxSumbols, 'Too Long!')
        .required('Required')
    };
  }
  
  const ErrorMessagesSchema = Yup.object().shape({
    ...ErrorPattern('fullName', 2, 30),
    ...ErrorPattern('aboutMe', 5, 100),
    
  });

const ProfileDataForm = (props) => (
    <div>
      <Formik      
        initialValues={props.profile}
        validationSchema={ErrorMessagesSchema}
        onSubmit={(values) => {const result = props.updateMyProfile(values);
          result.then(
          () => {props.exitEditMode()}
        )}}
      >
      {({ values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <label> Fullname:
              <Field type="input" name="fullName" onChange={handleChange} onBlur={handleBlur} value={values.fullName} placeholder="Type your full name"/>
            </label>            
            {errors.fullName && touched.fullName ? <span className={s.error}>{errors.fullName}</span> : null} <br></br>
            <label> About me:
            <Field type="input" name="aboutMe" onChange={handleChange} onBlur={handleBlur} value={values.aboutMe} placeholder="Type something about yourself" />
            </label>
            {errors.aboutMe && touched.aboutMe ? <span className={s.error}>{errors.aboutMe}</span> : null} <br></br>
            <label> Are you looking a job?: <br></br>
            <Field type="checkbox" name="lookingForAJob"/> <br></br>
            </label>            
            <label> Job description:
            <Field type="input" name="lookingForAJobDescription" onChange={handleChange} onBlur={handleBlur} value={values.lookingForAJobDescription} placeholder="What kind of job do you want" />
            </label>            
            Contacts:
            {Object.keys(props.profile.contacts).map(contact=> {
                   return <Field type="input" name={"contacts." + contact} onChange={handleChange} onBlur={handleBlur} value={values.contacts[contact]} placeholder={contact}/>
                })}
            {props.error && <div className={s.errorContactMessage}>{props.error}</div>}
            <button type="submit" >
              Submit
            </button>
          </form>
      )}
      </Formik>
    </div>
  );
    
    


export default ProfileDataForm

