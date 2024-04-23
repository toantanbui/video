// import React, { Component } from 'react';
import { Audio } from 'react-loader-spinner'
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';

import * as actions from '../store/actions';
import '../assets/css/Footer/Footer.css';


import { useSelector, useDispatch } from 'react-redux';

import { useHistory } from 'react-router-dom';
const _ = require('lodash');






const Footer = () => {


    const dispatch = useDispatch()
    const history = useHistory();






    return (
        <div className='Footer-footer'>
            <div className='Footer-footer-image' >
                Trang web được thiết kế bởi Toàn

            </div>
            <div className='Footer-footer-three'>
                <li className='Footer-footer-three-li'><span style={{ color: 'white', fontSize: '20px' }} >Thông tin</span>
                    <ul className='Footer-footer-three-li-ul'>
                        <li className='Footer-footer-three-li-ul-li'><a href="">Giới thiệu</a></li>
                        <li className='Footer-footer-three-li-ul-li'><a href="">Liên hệ chúng tôi</a></li>
                        <li className='Footer-footer-three-li-ul-li'><a href="
                        https://www.youtube.com/watch?v=fdJtwP_FQ04">Chính sách riêng tư</a></li>
                        <li className='Footer-footer-three-li-ul-li'><a href="">Khiếu nạn bản quyền</a></li>



                    </ul>
                </li>
            </div>
            <div className='Footer-footer-three'>
                <li className='Footer-footer-three-li'><span style={{ color: 'white', fontSize: '20px' }} >Phim hay</span>
                    <ul className='Footer-footer-three-li-ul'>
                        <li className='Footer-footer-three-li-ul-li'><a href="">Phim cổ trang</a></li>
                        <li className='Footer-footer-three-li-ul-li'><a href="">Phim hoạt hình</a></li>
                        <li className='Footer-footer-three-li-ul-li'><a href="">Phim khoa học</a></li>



                    </ul>
                </li>
            </div>
        </div>
    );
}

export default Footer;




