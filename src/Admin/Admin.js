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

    let [movieName, setmovieName] = useState('')
    let [parameterName, setparameterName] = useState('')
    let [duration, setduration] = useState('')
    let [releaseYear, setreleaseYear] = useState('')
    let [director, setdirector] = useState('')
    let [action, setaction] = useState('')
    let [category, setcategory] = useState('')
    let [movieLink, setmovieLink] = useState('')
    let [country, setcountry] = useState('')
    let [movieContent, setmovieContent] = useState('')
    let [image, setimage] = useState('')

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





    return (
        <div className='admin'>
            <div className='admin-menu'></div>
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
                                        <td><button type="button" class="btn btn-warning">update</button></td>
                                        <td><button type="button" class="btn btn-danger">delete</button></td>
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
                <Infor />
            </div>

        </div>
    );
}

export default Admin;




