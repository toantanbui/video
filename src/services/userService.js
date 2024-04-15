import axios from '../axios';


// const handleGetDataLogin = (data) => {
//     return axios.post('/', data)
// }

const handleCreateVideoAPI = (data) => {
    return axios.post('/api/create-video', data)
}

const handleGetAllVideoAPI = () => {
    return axios.get('/api/get-all-video')
}

const handleUpdateVideoAPI = (data) => {
    return axios.post('/api/update-one-video', data)
}

const handleDeleteVideoAPI = (data) => {
    return axios.post('/api/delete-one-video', data)
}

const handleGetOneVideoByMythologyAPI = (data) => {
    return axios.post('/api/get-one-video-by-than-thoai', data)
}










export {
    handleCreateVideoAPI, handleGetAllVideoAPI, handleUpdateVideoAPI, handleDeleteVideoAPI,
    handleGetOneVideoByMythologyAPI


}