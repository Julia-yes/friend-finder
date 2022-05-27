import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Formik, Field, Form } from 'formik';

const MyPosts = (props) => {
    let PostElement = props.posts.sort((p1, p2) => new Date(p2.date)-new Date(p1.date)).map(p => {
        return <Post message={p.message} likesCount={p.likesCount} dislikesCount={p.dislikesCount} date={p.date} profile={props.profile} />
    })
    
    return (
        <div className={s.posts__area}>
            <PostForm  addPost={props.addPost} />
            <div className={s.post__posts}>
                {PostElement}
            </div>
        </div>
    )
};

const PostForm = (props) => {
    
    return (
        <div>
            <Formik
                initialValues={{ postInput: ''}}
                validate={values => {
                const errors = {};
                if (!values.postInput) {
                    errors.postInput = 'Text anything';
                } 
                return errors;
                }}
                
               onSubmit ={(values, { setSubmitting }) => {
                    props.addPost(values.postInput);
                    values.postInput = " ";
                    setSubmitting(false);
                    
               }}
            >
                {({isSubmitting }) => (
                <Form className={s.post__form}> 
                    <Field className={s.post__textarea} type="postInput" as="textarea" name="postInput" placeholder = "Write what you wish"  />
                    <button type="submit"  disabled={isSubmitting} className={s.button}>
                    Publish
                    </button>
                </Form>
                )}
            </Formik>            
        </div>
    )
} 

export default MyPosts

