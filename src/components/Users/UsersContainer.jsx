import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow,  setCurrentPage, getUsers } from './../../redux/usersReduser';
import Users from './Users';
import Preloader from '../Preloader/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {    

        return <> 

        {this.props.isFetching ? <Preloader /> : null}
        <Users totalCount={this.props.totalCount}
            pageSize={this.props.pageSize}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            followingInProgress={this.props.followingInProgress}
             />
            </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.usersData,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        isAuth: state.auth.isAuth
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (usersData) => {
//             dispatch(setUsersAC(usersData))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
        
//     }
// }


export default compose (
    connect(mapStateToProps, { follow, unfollow, setCurrentPage, getUsers }),
    withAuthRedirect
) (UsersContainer);
