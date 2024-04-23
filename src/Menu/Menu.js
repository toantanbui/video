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

    const handleClickCategory = async (data) => {
        console.log(data)
        await dispatch(actions.handleSearchMenu({
            category: data

        }))
        history.push(`/searchMenu`);
    }

    const handleClickCountry = async (data) => {
        console.log(data)
        await dispatch(actions.handleSearchMenu({
            country: data

        }))
        history.push(`/searchMenu`);
    }


    return (
        <div className='Menu-header'>
            <div className='Menu-header-top'>
                <div className='Menu-header-top-title'
                    onClick={() => { handleClickHome() }}
                >PhimHay.xyz</div>
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
                        <li><a
                            style={{ color: 'white' }}
                        >Thể loại</a>
                            <ul>
                                <li><a
                                    style={{ color: 'white' }}
                                    onClick={() => { handleClickCategory('co-trang') }}
                                >Cổ trang</a></li>
                                <li><a
                                    style={{ color: 'white' }}
                                    onClick={() => { handleClickCategory('gia-dinh') }}
                                >Gia đình</a></li>
                                <li><a
                                    style={{ color: 'white' }}
                                    onClick={() => { handleClickCategory('than-thoai') }}
                                >Thần Thoại</a></li>
                                <li><a
                                    style={{ color: 'white' }}
                                    onClick={() => { handleClickCategory('hoat-hinh') }}
                                >Hoạt hình</a></li>
                                <li><a
                                    style={{ color: 'white' }}
                                    onClick={() => { handleClickCategory('chien-tranh') }}
                                >Chiến tranh</a></li>


                            </ul>
                        </li>
                        <li><a
                            style={{ color: 'white' }}
                        >Quốc gia</a>
                            <ul>
                                <li><a
                                    style={{ color: 'white' }}
                                    onClick={() => { handleClickCountry('my') }}
                                >Mỹ</a></li>
                                <li><a
                                    style={{ color: 'white' }}
                                    onClick={() => { handleClickCountry('nhat-ban') }}
                                >Nhật Bản</a></li>
                                <li><a
                                    style={{ color: 'white' }}
                                    onClick={() => { handleClickCountry('han-quoc') }}
                                >Hàn Quốc</a></li>
                                <li><a
                                    style={{ color: 'white' }}
                                    onClick={() => { handleClickCountry('viet-nam') }}
                                >Việt Nam</a></li>
                                <li><a
                                    style={{ color: 'white' }}
                                    onClick={() => { handleClickCountry('trung-quoc') }}
                                >Trung Quốc</a></li>


                            </ul>
                        </li>
                        <li><a

                            style={{ textDecoration: 'none', color: 'white' }}>Phim bộ</a>
                            {/* <ul>
                                    <li><a href="">giới thiệu</a></li>
                                    <li><a href="">Tuyển sinh</a></li>
                                    <li><a href="">Tin tức</a></li>
                                    <li><a href="">Đào tạo</a></li>
                                    <li><a href="">Nghiên cứu</a></li>


                                </ul> */}
                        </li>
                        <li><a
                            style={{ color: 'white' }}
                        >Phim lẻ</a>

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




