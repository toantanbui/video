import actionTypes from '../actions/actionTypes';

const initialState = {
    isLoggedIn: false,
    userInfo: null,
    UsersRedux: [],
    errMessage: '',
    userInfo1: null,
    dataAllVideo: null,
    dataOneVideoMythology: null







}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {


        case actionTypes.GET_NEW_USERS:
            // state.arrAllUsersRedux = action.data

            console.log('action', action.data)

            return {
                ...state,
            }
        case actionTypes.USER_SIGNUP_SUCCESS:
            state.errMessage = action.errMessage

            console.log('action', action)

            return {
                ...state,
            }

        case actionTypes.GET_ALL_VIDEO:
            state.dataAllVideo = action.data

            console.log('action', action)

            return {
                ...state,
            }

        case actionTypes.GET_ONE_VIDEO_MYTHOLOGY:
            state.dataOneVideoMythology = action.data

            console.log('action', action)

            return {
                ...state,
            }







        default:
            return state;
    }
}

export default adminReducer;