import React from "react";
import s from "./Messages.module.css"
import Dialog from "./Dialogs/Dialogs";
import Message from "./MassageItem/MessageItem.jsx";
import { Formik,Field} from 'formik';
import {useParams} from 'react-router-dom';
import { useSelector } from 'react-redux'

const Messages = (props) => {
    const names = useSelector((state) => state.messagesPage.names);
    const holderId = useSelector((state) => state.auth.userId);
    const messages = useSelector((state) => state.messagesPage.messages);
    const userId = parseInt(useParams().id);

    const filteredMessages = messages.filter(message => message.userIdFrom === userId || message.userIdTo === userId)
    .map(message => {
        return {
            ...message,
            user: names.filter(user => user.id === message.userIdFrom)[0]
        }
    });

    let NamesElement = names.filter(name => name.id !== holderId).map(name => {
        return <Dialog userId={userId} name={name.name} surname={name.surname} id={name.id} url={name.url} status={name.status} key={name.id}/>
    });

    let MessagesElement = filteredMessages.map(message => {
        return <Message user={message.user} message={message.message} userIdFrom={message.userIdFrom} userIdTo={message.userIdTo} date={message.date} key={message.id}/>
    })
    return (
        <div className={s.messages_area}>
            <div className={s.messages__block}>
                {NamesElement}
            </div>
            <div className={s.messages__block}>
                {MessagesElement}
            </div>
            <MessageForm addMessage={props.addMessage} userId = {userId} />
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
                    props.addMessage(values.input, props.userId);
                    values.input = " ";
                    setSubmitting(false);
                    
                }}
            >
                {({ isSubmitting, handleSubmit }) => (
                    <form onSubmit={handleSubmit} className={s.messages__form}>
                        <Field type="input" name="input" className={s.form__input} placeholder="Type your message"/>
                        <button type="submit" disabled={isSubmitting} className={s.form__button}>Send</button>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default Messages;