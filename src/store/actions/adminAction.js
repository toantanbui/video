import actionTypes from "./actionTypes";

import {
    handleCreateVideoAPI, handleGetAllVideoAPI


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



