import React from "react";
import s from "./Messages.module.css"
import Dialog from "./Dialogs/Dialogs";
import Message from "./MassageItem/MessageItem.jsx";
import { Formik, Form, Field, ErrorMessage } from 'formik';


const Messages = (props) => {
    let NamesElement = props.messagesPage.names.map(name => {
        return <Dialog name={name.name} id={name.id} url={name.url} />
    })

    let MessagesElement = props.messagesPage.messages.map(message => {
        return <Message message={message.message} id={message.id}/>
    })

    return (
        <div className={s.messages_area}>
            <div className={s.messages__dialogs}>
                {NamesElement}
            </div>
            <div>
                <div className={s.messages__content}>
                    {MessagesElement}
                </div>
                <MessageForm addMessage={props.addMessage}/>
            </div>
        </div>
    )
};

const MessageForm = (props) => {
    return(
        <div>
            <Formik
                initialValues={{input: ''}}
                validate={values => {
                    const errors = {};
                    if (!values.input) {
                    errors.input = 'Empty post';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    props.addMessage(values.input);
                    setSubmitting(false);
                   
                }}
            >
                {({ isSubmitting, handleSubmit }) => (
                    <form onSubmit={handleSubmit} className={s.messages__form}>
                        <Field type="input" name="input" className={s.form__input} />
                        <button type="submit" disabled={isSubmitting} className={s.form__button}>Send</button>
                    </form>
                    )}
            </Formik>
        </div>
        
    )
}

export default Messages;