import React  from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import People from "./People.jsx";
import {getUsers, unfollowUser, followUser} from "./../redux/people-reducer.js";
import {componentWithRedirect} from "../../HOC/WithRedirect";
import {getUsersSelector, getTotalCount, getCountUsersOnPage, getActivePage, getLoading, getProcessFollowed} from "../redux/selectors"

class PeopleContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.activePage, this.props.countUsersOnPage);
    }

    onPageChanges = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.countUsersOnPage);
    }
    render() {
        return <People
            totalCount = {this.props.totalCount}
            countUsersOnPage = {this.props.countUsersOnPage}
            activePage = {this.props.activePage}
            onPageChanges ={this.onPageChanges}
            users ={this.props.users}
            inProcessFollowed ={this.props.inProcessFollowed}
            getUsers = {this.props. getUsers}
            unfollowUser = {this.props. unfollowUser} 
            followUser = {this.props. followUser} 
            />
    }
}

let mapStateToProps = (state) => {
    return {
        users : getUsersSelector(state),
        totalCount: getTotalCount(state),
        countUsersOnPage: getCountUsersOnPage(state),
        activePage: getActivePage(state),
        isLoading: getLoading(state),
        inProcessFollowed: getProcessFollowed(state),
    }
};


export default compose(
connect (mapStateToProps, { getUsers, unfollowUser, followUser}),
componentWithRedirect
)(PeopleContainer)