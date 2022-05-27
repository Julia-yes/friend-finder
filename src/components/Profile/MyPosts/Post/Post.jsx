import React from "react";
import s from "./Post.module.css";
import cn from "classnames";
import like from "../../../../images/like.png";
import dislike from "../../../../images/dislike.png"


const Post = (props) => {
    let ava = (props.profile ? props.profile.photos.large : "https://coolsen.ru/wp-content/uploads/2021/06/17-7.jpg");
    let name = (props.profile ? props.profile.fullName : "nobody")
    return (
        <div className={s.post__area}>
            <span className={s.post__date}>{props.date}</span>
            <div  className={s.post__content}>                
                <div className={s.post__head}>
                    <div className={s.post__holder}>
                        <img className={s.holder__ava} src={ava} />
                    <span className={s.holder__name}>{name}</span>
                    </div>
                    <div className={s.post__likes}>
                        <button className={cn(s.button, s.button__like)}>
                            <div><img src={like} className={s.post__reaction} /> {props.likesCount}</div>
                        </button>                        
                        <button className={cn(s.button, s.button__dislike)}>
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