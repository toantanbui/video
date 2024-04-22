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

const handleGetOneVideoByIdAPI = (data) => {
    return axios.post('/api/get-one-video-by-id', data)
}

const handleGetOneVideoByFamilyAPI = (data) => {
    return axios.post('/api/get-one-video-by-gia-dinh', data)
}

const handleGetDataLogin = (data) => {
    return axios.post('/api/login', data)
}

const handleGetDataLogout = () => {
    return axios.get('/api/logout')
}

const handleGetAllVideoByTimeAPI = () => {
    return axios.get('/api/get-all-video-by-time')
}

const handleSearchKeyAPI = (data) => {
    return axios.post('/api/get-video-text-search', data)
}











export {
    handleCreateVideoAPI, handleGetAllVideoAPI, handleUpdateVideoAPI, handleDeleteVideoAPI,
    handleGetOneVideoByMythologyAPI, handleGetOneVideoByIdAPI, handleGetOneVideoByFamilyAPI,
    handleGetDataLogin, handleGetDataLogout, handleGetAllVideoByTimeAPI, handleSearchKeyAPI


}