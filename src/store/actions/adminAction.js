import actionTypes from "./actionTypes";

import {
    handleCreateVideoAPI, handleGetAllVideoAPI, handleUpdateVideoAPI, handleDeleteVideoAPI,
    handleGetOneVideoByMythologyAPI


} from '../../services/userService'


export const handleCreateVideo = (data1) => {
    return async (dispatch, getState) => {
        try {
            let res = await handleCreateVideoAPI(data1);

            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.CREATE_ONE_VIDEO,

                    errMessage: res.errMessage,



                })
                await dispatch(handleGetAllVideo({}))


            }



        } catch (e) {
            console.log(e)

        }
    }
}

export const handleGetAllVideo = () => {
    return async (dispatch, getState) => {
        try {
            let res = await handleGetAllVideoAPI();

            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.GET_ALL_VIDEO,
                    errMessage: res.errMessage,
                    data: res.data


                })

            }


        } catch (e) {
            console.log(e)

        }
    }
}

export const handleUpdateVideo = (data1) => {
    return async (dispatch, getState) => {
        try {
            let res = await handleUpdateVideoAPI(data1);

            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.UPDATE_ONE_VIDEO,

                    errMessage: res.errMessage,



                })
                await dispatch(handleGetAllVideo({}))





            }



        } catch (e) {
            console.log(e)

        }
    }
}

export const handleDeleteVideo = (data1) => {
    return async (dispatch, getState) => {
        try {
            let res = await handleDeleteVideoAPI(data1);

            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.DELETE_ONE_VIDEO,

                    errMessage: res.errMessage,



                })
                await dispatch(handleGetAllVideo({}))


            }



        } catch (e) {
            console.log(e)

        }
    }
}

export const handleGetOneVideoByMythology = (data1) => {
    return async (dispatch, getState) => {
        try {
            let res = await handleGetOneVideoByMythologyAPI(data1);

            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.GET_ONE_VIDEO_MYTHOLOGY,

                    errMessage: res.errMessage,
                    data: res.data


                })

            }



        } catch (e) {
            console.log(e)

        }
    }
}



// export const handleLogin = (data1) => {
//     return async (dispatch, getState) => {
//         try {
//             let res = await handleGetDataLogin(data1);

//             if (res && res.errCode === 0) {
//                 dispatch({
//                     type: actionTypes.USER_LOGIN_SUCCESS,
//                     data: res.data,
//                     errMessage: res.errMessage,
//                     token: res.token1

//                 })

//             } else {
//                 dispatch({
//                     type: actionTypes.USER_LOGIN_FAIL,
//                     data: res.errMessage
//                 })
//             }



//         } catch (e) {
//             console.log(e)

//         }
//     }
// }



