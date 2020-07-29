import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUsersProfile, getUserStatus, savePhoto, setUsersProfile, updateStatus} from "../../Redax/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    refreshProfile = () => {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authId;
        }
        this.props.getUsersProfile(userId);
        this.props.getUserStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

   componentDidUpdate (prevProps,prevState) {
        if(this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return (
            <div>
                <Profile {...this.props} savePhoto={this.props.savePhoto} isOwner={!this.props.match.params.userId} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authId: state.auth.id
});

export default compose(
    connect(mapStateToProps, {getUsersProfile,getUserStatus,updateStatus,savePhoto}),
    withRouter,withAuthRedirect)(ProfileContainer)
