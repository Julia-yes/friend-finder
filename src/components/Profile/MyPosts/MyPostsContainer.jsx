import React from "react";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addPost, likePost, dislikePost} from "./../../redux/profile-reducer.js"

let mapStateToProps = (state) => {
    return {
        posts : state.profilePage.posts,
        profile : state.profilePage.profile,
    }
}

const MyPostsContainer = connect(mapStateToProps, {addPost, likePost, dislikePost})(MyPosts)

export default MyPostsContainer
