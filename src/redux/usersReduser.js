const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';


let initialState = {
    usersData: [],
    pageSize: 50,
    totalCount: 0,
    currentPage: 1  

}

export const usersReduser = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:            
            return {
                ...state,
                usersData: state.usersData.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };

            case UNFOLLOW:            
            return {
                ...state,
                usersData: state.usersData.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };

            case SET_USERS:            
            return {
                ...state,
                usersData: [...action.usersData]
            };

            case SET_TOTAL_USERS_COUNT:            
            return {
                ...state,
                totalCount: action.totalCount
            };

            case SET_CURRENT_PAGE:            
            return {
                ...state,
                currentPage: action.currentPage
            };            
        
            
        default:
            return state;
        }

    }

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (usersData) => ({type: SET_USERS, usersData});
export const setTotalUsersCountAC = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount});
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});