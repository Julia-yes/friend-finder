import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Formik, Field, Form } from 'formik';

const MyPosts = (props) => {
    let PostElement = props.posts.map(p => {
        return <Post message={p.message} count={p.likesCount}/>
    })

    
    return (
        <div className={s.post__area}>My posts
            <PostForm addPost={props.addPost} />                
            {PostElement}
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
                    setSubmitting(false);
               }}
            >
                {({isSubmitting }) => (
                <Form>
                    <Field type="postInput" name="postInput" placeholder = "Write what you wish"  />
                    <button type="submit"  disabled={isSubmitting}>
                    Publish
                    </button>
                </Form>
                )}
            </Formik>            
        </div>
    )
} 

export default MyPosts

/*
let newPostElement = React.createRef();

    const addPost = () => {
        let text = newPostElement.current.value;
        props.addPost();
        newPostElement.current.value = " ";
    }

    let onInputPost = () => {
        let text = newPostElement.current.value;
        props.updateInputPost(text);

    }
<textarea onChange={onInputPost} ref={newPostElement} value={props.inputTextProps}></textarea>
            <div>
                <button onClick={addPost}>Add post</button>
                <button>Remove</button>
            </div>
            */