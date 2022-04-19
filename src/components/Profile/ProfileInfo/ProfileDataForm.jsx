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
            <label className={s.contactLabel}> Fullname: <br></br>
              <Field className={s.contactField} type="input" name="fullName" onChange={handleChange} onBlur={handleBlur} value={values.fullName} placeholder="Type your full name"/>
            </label>            
            {errors.fullName && touched.fullName ? <span className={s.error}>{errors.fullName}</span> : null} <br></br>
            <label className={s.contactLabel}> About me: <br></br>
              <Field className={s.contactField} as="textarea" type="imput" name="aboutMe" onChange={handleChange} onBlur={handleBlur} value={values.aboutMe} placeholder="Type something about yourself" />
            </label>
            {errors.aboutMe && touched.aboutMe ? <span className={s.error}>{errors.aboutMe}</span> : null} <br></br>
            <label className={s.contactLabel}> Are you looking for a job?
              <Field className={s.contactField_checkbox} type="checkbox" name="lookingForAJob"/> <br></br>
            </label>            
            <label className={s.contactLabel}> Job description: <br></br>
              <Field className={s.contactField} as="textarea" type="input" name="lookingForAJobDescription" onChange={handleChange} onBlur={handleBlur} value={values.lookingForAJobDescription} placeholder="What kind of job do you want" />
            </label>
            <br></br>
            <label className={s.contactLabel}>          
            Contacts:
            {Object.keys(props.profile.contacts).map(contact=> {
                   return <div><Field className={s.contactField} type="input" name={"contacts." + contact} onChange={handleChange} onBlur={handleBlur} value={values.contacts[contact]} placeholder={contact}/> <br></br></div>
                })}
            {props.error && <div className={s.errorContactMessage}>{props.error}</div>}
            </label> 
            <button type="submit" className={s.button}>
              Submit
            </button>
          </form>
      )}
      </Formik>
    </div>
  );
    
    


export default ProfileDataForm

