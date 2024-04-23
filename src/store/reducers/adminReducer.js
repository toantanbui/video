import actionTypes from '../actions/actionTypes';

const initialState = {
    isLoggedIn: false,
    userInfo: null,
    UsersRedux: [],
    errMessage: '',
    userInfo1: null,
    dataAllVideo: null,
    dataOneVideoMythology: null,
    dataOneVideoFamily: null,
    dataOneVideoId: null,
    dataAllVideoByTime: null,
    dataSearchKey: null,
    dataSearchMenu: null







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
        case actionTypes.GET_ONE_VIDEO_FAMILY:
            state.dataOneVideoFamily = action.data

            console.log('action', action)

            return {
                ...state,
            }

        case actionTypes.GET_ONE_VIDEO_ID:
            state.dataOneVideoId = action.data

            console.log('action', action)

            return {
                ...state,
            }
        case actionTypes.GET_ALL_VIDEO_BY_TIME:
            state.dataAllVideoByTime = action.data

            console.log('action giá trị mới nhất', action.data)

            return {
                ...state,
            }
        case actionTypes.SEARCH_KEY:
            state.dataSearchKey = action.data

            console.log('action giá trị key', action.data)

            return {
                ...state,
            }
        case actionTypes.SEARCH_MENU:
            state.dataSearchMenu = action.data

            console.log('action giá trị key', action.data)

            return {
                ...state,
            }







        default:
            return state;
    }
}

export default adminReducer;