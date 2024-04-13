// import React, { Component } from 'react';
import { Audio } from 'react-loader-spinner'
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';

import * as actions from '../store/actions';
import '../assets/css/DetailedInfor/DetailedInfor.css';
import Footer from '../Footer/Footer';


import { useSelector, useDispatch } from 'react-redux';
import Menu from '../Menu/Menu';

import { useHistory } from 'react-router-dom';
const _ = require('lodash');






const DetailedInfor = () => {


    const dispatch = useDispatch()
    const history = useHistory();
    const latestTopics = [
        {
            title: "Cận cảnh nhà ga T3 Tân Sơn Nhất sau 3 tháng khởi công",
            author: "Toàn Bùi",
            createdAt: "2 giờ trước",
            previewContent: "Sau 3 tháng thi công, dự án xây dựng ga hành khách T3 của Cảng Hàng không Tân Sơn Nhất đang dần thành hình"
        },
        {
            title: "Cận cảnh nhà ga T3 Tân Sơn Nhất sau 3 tháng khởi công",
            author: "Toàn Bùi",
            createdAt: "2 giờ trước",
            previewContent: "Sau 3 tháng thi công, dự án xây dựng ga hành khách T3 của Cảng Hàng không Tân Sơn Nhất đang dần thành hình"
        },
        {
            title: "Cận cảnh nhà ga T3 Tân Sơn Nhất sau 3 tháng khởi công",
            author: "Toàn Bùi",
            createdAt: "2 giờ trước",
            previewContent: "Sau 3 tháng thi công, dự án xây dựng ga hành khách T3 của Cảng Hàng không Tân Sơn Nhất đang dần thành hình"
        }
    ];





    return (
        <div className='DetailedInfor'>
            <div className='DetailedInfor-header'>
                <Menu />
            </div>


            <div className='DetailedInfor-content'>
                <div className='DetailedInfor-content-left'>
                    <div className='DetailedInfor-content-left-top'>
                        <div className='DetailedInfor-content-left-top-image'>
                            <div className='DetailedInfor-content-left-top-image-image'></div>
                            <div className='DetailedInfor-content-left-top-image-watch'>
                                <span style={{ height: '50px', marginRight: '5px', }}>
                                    <button type="button" class="btn btn-primary">Tập phim</button>
                                </span>
                                <span style={{ height: '50px' }}>
                                    <button type="button" class="btn btn-warning">Xem phim</button>
                                </span>


                            </div>
                        </div>
                        <div className='DetailedInfor-content-left-top-infor'>
                            <div className='DetailedInfor-content-left-top-infor-title'>Thạch Cảm Đan</div>
                            <div className='DetailedInfor-content-left-top-infor-detail'>
                                <span className='abcd'>Đạo diễn:&nbsp; <span style={{ fontFamily: 'fantasy' }}>
                                    Nguyễn Văn A</span></span>
                                <span className='abcd'>Đạo diễn:&nbsp; <span style={{ fontFamily: 'fantasy' }}>
                                    Nguyễn Văn A</span></span>
                                <span className='abcd'>Đạo diễn:&nbsp; <span style={{ fontFamily: 'fantasy' }}>
                                    Nguyễn Văn A</span></span>
                                <span className='abcd'>Đạo diễn:&nbsp; <span style={{ fontFamily: 'fantasy' }}>
                                    Nguyễn Văn A</span></span>
                                <span className='abcd'>Đạo diễn:&nbsp; <span style={{ fontFamily: 'fantasy' }}>
                                    Nguyễn Văn A</span></span>
                                <span className='abcd'>Đạo diễn:&nbsp; <span style={{ fontFamily: 'fantasy' }}>
                                    Nguyễn Văn A</span></span>
                                <span className='abcd'>Đạo diễn:&nbsp; <span style={{ fontFamily: 'fantasy' }}>
                                    Nguyễn Văn A</span></span>
                                <span className='abcd'>Đạo diễn:&nbsp; <span style={{ fontFamily: 'fantasy' }}>
                                    Nguyễn Văn A</span></span>



                            </div>
                        </div>
                    </div>
                    <div className='DetailedInfor-content-left-bottom'>
                        <div className='DetailedInfor-content-left-bottom-title'>Nội dung</div>
                        <div className='DetailedInfor-content-left-bottom-content'>
                            makes a button appear pressed, and the disabled attribute makes a button unclickable. Note that elements do not support
                            the disabled attribute and must therefore use the .disabled class to make it visually appear disabled.

                        </div>

                    </div>
                </div>
                <div className='DetailedInfor-content-right'>
                    <div className='DetailedInfor-content-right-header'></div>
                </div>
            </div>
            <div className='DetailedInfor-footer'>
                <Footer />
            </div>

        </div >
    );
}

export default DetailedInfor;




