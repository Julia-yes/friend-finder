import React from "react";
import s from "./Post.module.css";
import cn from "classnames";
import like from "../../../../images/like.png";
import dislike from "../../../../images/dislike.png"

const Post = (props) => {
    let ava = (props.profile ? props.profile.photos.large : "https://coolsen.ru/wp-content/uploads/2021/06/17-7.jpg");
    let name = (props.profile ? props.profile.fullName : "nobody");
        
    function formatDate(date) {
        let dayOfMonth = parseInt(new Date(date).getDate());
        let month = parseInt(new Date(date).getMonth() + 1);
        let year = parseInt(new Date(date).getFullYear());
        let hour = parseInt(new Date(date).getHours());
        let minutes = parseInt(new Date(date).getMinutes());        
        
        month = month < 10 ? '0' + month : month;
        dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
        hour = hour < 10 ? '0' + hour : hour;
        minutes = minutes < 10 ? '0' + minutes : minutes;
      
        return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`        
    }

    return (
        <div className={s.post__area}>
            <span className={s.post__date}>{formatDate(props.date)}</span>
            <div  className={s.post__content}>                
                <div className={s.post__head}>
                    <div className={s.post__holder}>
                        <img className={s.holder__ava} src={ava} />
                    <span className={s.holder__name}>{name}</span>
                    </div>
                    <div className={s.post__likes}>
                        <button className={cn(s.button, s.button__like)} onClick={() => {props.likePost(props.id)}}>
                            <div><img src={like} className={s.post__reaction} /> {props.likesCount}</div>
                        </button>                        
                        <button className={cn(s.button, s.button__dislike)} onClick={() => {props.dislikePost(props.id)} }>
                            <div><img src={dislike} className={s.post__reaction} /> {props.dislikesCount}</div>
                        </button>                        
                    </div>
                </div>            
                <div className={s.post__message}>{props.message}</div>
            </div>      
        </div>
    )
};

export default Post