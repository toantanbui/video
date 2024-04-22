// import React, { Component } from 'react';
import { Audio } from 'react-loader-spinner'
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import Infor from '../Infor/Infor';

import * as actions from '../store/actions';
import '../assets/css/Admin/Admin.css';


import { useSelector, useDispatch } from 'react-redux';

import { useHistory } from 'react-router-dom';
const _ = require('lodash');







const Admin = () => {


    const dispatch = useDispatch()
    const history = useHistory();

    // let [movieName, setmovieName] = useState('')
    // let [parameterName, setparameterName] = useState('')
    // let [duration, setduration] = useState('')
    // let [releaseYear, setreleaseYear] = useState('')
    // let [director, setdirector] = useState('')
    // let [action, setaction] = useState('')
    // let [category, setcategory] = useState('')
    // let [movieLink, setmovieLink] = useState('')
    // let [country, setcountry] = useState('')
    // let [movieContent, setmovieContent] = useState('')
    let [inforOneVideo, setinforOneVideo] = useState(null)

    let [dataAllVideoAdmin, setdataAllVideoAdmin] = useState([])

    let dataAllVideoRedux = useSelector(state => state.admin.dataAllVideo)

    useEffect(async () => {

        await dispatch(actions.handleGetAllVideo({}))

        if (dataAllVideoRedux !== null) {

            setdataAllVideoAdmin(dataAllVideoRedux)

        }


    }, [])

    useEffect(async () => {

        if (dataAllVideoRedux !== null) {

            setdataAllVideoAdmin(dataAllVideoRedux)

        }


    }, [dataAllVideoRedux])

    const handleUpdateOneVideo = (item) => {
        setinforOneVideo(item)
    }

    const handleDeleteOneVideo = (idVideo) => {
        console.log('id video truyền vào là: ', idVideo)
        dispatch(actions.handleDeleteVideo({
            id: idVideo

        }))
    }

    const handleLogout = () => {

        dispatch(actions.handleLogout())


    }




    return (
        <div className='admin'>
            <div className='admin-menu'>
                <div className='admin-menu-top'>
                    <div className='admin-menu-top-title'>
                        Wellcom, Admin
                    </div>
                    <div className='admin-menu-top-search'>
                        <input className='admin-menu-top-search-input' type='text' placeholder='tìm kiếm' />
                        <i className="fas fa-search search-icon" style={{ cursor: 'pointer' }}></i>


                    </div>
                </div>
                <div className='admin-menu-bottom'>
                    <button type="button" class="btn btn-primary"
                        onClick={() => handleLogout()}
                    >Đăng xuất</button>
                </div>
            </div>
            <div className='admin-table'>
                <div className='admin-table-top'>
                    <table>
                        <tr>
                            <th>id</th>
                            <th>Tên phim</th>
                            <th>Thể loại</th>
                            <th>Quốc gia</th>
                            <th>Chỉnh sửa</th>
                            <th>Xóa</th>
                        </tr>

                        {dataAllVideoAdmin && dataAllVideoAdmin.length > 0 &&
                            dataAllVideoAdmin.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item._id}</td>
                                        <td>{item.movieName}</td>
                                        <td>{item.category}</td>
                                        <td>{item.country}</td>
                                        <td><button type="button" class="btn btn-warning"
                                            onClick={() => { handleUpdateOneVideo(item) }}
                                        >update</button></td>
                                        <td><button type="button" class="btn btn-danger"
                                            onClick={() => { handleDeleteOneVideo(item._id) }}
                                        >delete</button></td>
                                    </tr>
                                )

                            })

                        }


                    </table>
                </div>
                <div className='admin-table-bottom'>
                    <div className="center">
                        <div className="pagination">
                            <a >&laquo;</a>
                            <a >1</a>
                            <a>2</a>
                            <a >3</a>
                            <a >4</a>
                            <a>5</a>
                            <a >6</a>
                            <a >&raquo;</a>
                        </div>
                    </div>
                </div>



            </div>
            <div className='admin-detail'>
                <Infor item={inforOneVideo} />
            </div>

        </div>
    );
}

export default Admin;




