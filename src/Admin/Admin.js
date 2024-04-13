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
                        <tr>
                            <td>234123121</td>
                            <td>Alfreds Futterkiste</td>
                            <td>Maria Anders</td>
                            <td>Germany</td>
                            <td><button type="button" class="btn btn-warning">update</button></td>
                            <td><button type="button" class="btn btn-danger">delete</button></td>
                        </tr>
                        <tr>
                            <td>234123121</td>
                            <td>Alfreds Futterkiste</td>
                            <td>Maria Anders</td>
                            <td>Germany</td>
                            <td><button type="button" class="btn btn-warning">update</button></td>
                            <td><button type="button" class="btn btn-danger">delete</button></td>
                        </tr>
                        <tr>
                            <td>234123121</td>
                            <td>Alfreds Futterkiste</td>
                            <td>Maria Anders</td>
                            <td>Germany</td>
                            <td><button type="button" class="btn btn-warning">update</button></td>
                            <td><button type="button" class="btn btn-danger">delete</button></td>
                        </tr>


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




