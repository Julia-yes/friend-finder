import React from "react";
import s from "./Post.module.css"


const Post = (props) => {
    return (
        <div>
            <img className={s.post__ava}
                 src="https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58.jpg"></img>
            {props.message}
            <div>like {props.count}</div>
        </div>
    )
};

export default Post