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









export {
    handleCreateVideoAPI, handleGetAllVideoAPI


}