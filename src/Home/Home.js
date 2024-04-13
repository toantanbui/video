// import React, { Component } from 'react';
import { Audio } from 'react-loader-spinner'
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';

import * as actions from '../store/actions';
import '../assets/css/Home/Home.css';
import Footer from '../Footer/Footer';
import Elements from '../Elements/Elements';
import Elements1 from '../Elements1/Elements1';


import { useSelector, useDispatch } from 'react-redux';
import Menu from '../Menu/Menu';

import { useHistory } from 'react-router-dom';
const _ = require('lodash');






const Home = () => {


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
    const movie = [
        {
            name: 'Thạch Cảm Đan',
            time: 'tập 3',
            en: 'Thuyết minh'
        },
        {
            name: 'An Hùng Xạ Điêu',
            time: 'tập 4',
            en: 'Thuyết minh'
        },
        {
            name: 'Tam Quốc Diễn Nghĩa',
            time: 'tập 5',
            en: 'Thuyết minh'
        },
        {
            name: 'Thạch Cảm Đan',
            time: 'tập 3',
            en: 'Thuyết minh'
        },
        {
            name: 'An Hùng Xạ Điêu',
            time: 'tập 4',
            en: 'Thuyết minh'
        },
        {
            name: 'Tam Quốc Diễn Nghĩa',
            time: 'tập 5',
            en: 'Thuyết minh'
        },
        {
            name: 'Thạch Cảm Đan',
            time: 'tập 3',
            en: 'Thuyết minh'
        },
        {
            name: 'An Hùng Xạ Điêu',
            time: 'tập 4',
            en: 'Thuyết minh'
        },
        {
            name: 'Tam Quốc Diễn Nghĩa',
            time: 'tập 5',
            en: 'Thuyết minh'
        },

    ]





    return (
        <div className='Home'>
            <div className='Home-header'>
                <Menu />
            </div>


            <div className='Home-content'>
                <div className='Home-content-left'>
                    <div className='Home-content-left-one'>
                        <div className='Home-content-left-one-header'>
                            Phim Cổ trang
                        </div>
                        <div className='Home-content-left-one-content'>
                            {
                                movie.map((item, index) => {
                                    return (<Elements name={item.name} time={item.time}
                                        en={item.en}

                                    />)
                                })
                            }

                        </div>
                    </div>
                    <div className='Home-content-left-one'>
                        <div className='Home-content-left-one-header'>
                            Phim hoạt hình
                        </div>
                        <div className='Home-content-left-one-content'>
                            {
                                movie.map((item, index) => {
                                    return (<Elements name={item.name} time={item.time}
                                        en={item.en}

                                    />)
                                })
                            }
                        </div>
                    </div>
                    {/* <div className='Home-content-left-two'></div> */}
                    <div className='Home-content-left-three'>
                        <div className='Home-content-left-three-header'>
                            Phim khác
                        </div>
                        <div className='Home-content-left-three-content'>
                            {
                                movie.map((item, index) => {
                                    return (<Elements name={item.name} time={item.time}
                                        en={item.en}

                                    />)
                                })
                            }
                        </div>
                        <div className='Home-content-left-three-pagination'>

                            <div className="center">
                                <div className="pagination">
                                    <a >&laquo;</a>
                                    <a >1</a>
                                    <a >2</a>
                                    <a >3</a>
                                    <a >4</a>
                                    <a>5</a>
                                    <a >6</a>
                                    <a >&raquo;</a>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                <div className='Home-content-right'>
                    <div className='Home-content-right-header'>Mới nhất</div>
                    <div className='Home-content-right-content'>
                        {
                            movie.map((item, index) => {
                                return (<Elements1 name={item.name} time={item.time}
                                    en={item.en}

                                />)
                            })
                        }

                    </div>
                </div>
            </div>
            <div className='Home-footer'>
                <Footer />
            </div>

        </div >
    );
}

export default Home;




