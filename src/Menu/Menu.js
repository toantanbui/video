// import React, { Component } from 'react';
import { Audio } from 'react-loader-spinner'
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';

import * as actions from '../store/actions';
import '../assets/css/Menu/Menu.css';


import { useSelector, useDispatch } from 'react-redux';

import { useHistory } from 'react-router-dom';
const _ = require('lodash');






const Menu = () => {


    const dispatch = useDispatch()
    const history = useHistory();

    const handleClickLogin = () => {

        history.push(`/login`);
    }

    const handleClickHome = () => {

        history.push(`/`);
    }

    let [key, setkey] = useState('')


    const onChangeInputKey = (event) => {
        let event1 = event.target.value;
        console.log('Gia trị là ', event)


        setkey(event1)

    }


    const handleSearchKey = async () => {
        await dispatch(actions.handleSearchKey({
            text: key

        }))
        history.push(`/searchkey`);
    }



    return (
        <div className='Menu-header'>
            <div className='Menu-header-top'>
                <div className='Menu-header-top-title'>PhimHay.xyz</div>
                <div className='Menu-header-top-search'>
                    <input className='Menu-header-top-search-search' type='text' placeholder='tìm kiếm'
                        onChange={(event) => onChangeInputKey(event)}
                    />
                    <div
                        onClick={() => { handleSearchKey() }}
                    > <i className="fas fa-search search-icon" style={{ cursor: 'pointer' }}

                    ></i></div>

                </div>
            </div>
            <div className='Menu-header-bot'>
                <header className='Menu-header-bot-header'>
                    <ul className='Menu-header-bot-header-menu'>
                        <li><a href=""
                            onClick={() => { handleClickHome() }}
                        >Trang chủ</a>

                        </li>
                        <li><a href="">Thể loại</a>
                            <ul>
                                <li><a href="">Cổ trang</a></li>
                                <li><a href="">Gia đình</a></li>
                                <li><a href="">Khoa học</a></li>
                                <li><a href="">Hoạt hình</a></li>
                                <li><a href="">Chiến tranh</a></li>


                            </ul>
                        </li>
                        <li><a href="">Quốc gia</a>
                            <ul>
                                <li><a href="">Mỹ</a></li>
                                <li><a href="">Nhật Bản</a></li>
                                <li><a href="">Hàn Quốc</a></li>
                                <li><a href="">Việt Nam</a></li>
                                <li><a href="">Trung Quốc</a></li>


                            </ul>
                        </li>
                        <li><a href="" style={{ textDecoration: "none" }}>Phim bộ</a>
                            {/* <ul>
                                    <li><a href="">giới thiệu</a></li>
                                    <li><a href="">Tuyển sinh</a></li>
                                    <li><a href="">Tin tức</a></li>
                                    <li><a href="">Đào tạo</a></li>
                                    <li><a href="">Nghiên cứu</a></li>


                                </ul> */}
                        </li>
                        <li><a href="" >Phim lẻ</a>

                        </li>
                    </ul>
                    <div className='Menu-header-bot-header-login'
                        style={{ color: 'white' }}
                        onClick={() => { handleClickLogin() }}
                    >Đăng nhập</div>

                </header>

            </div>
        </div>
    );
}

export default Menu;




