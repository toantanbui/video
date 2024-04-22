// import React, { Component } from 'react';
import { Audio } from 'react-loader-spinner'
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';

import * as actions from '../store/actions';
import '../assets/css/SearchKey/SearchKey.css';
import Footer from '../Footer/Footer';
import Elements from '../Elements/Elements';
import Elements1 from '../Elements1/Elements1';

import ReactPaginate from 'react-paginate';


import { useSelector, useDispatch } from 'react-redux';
import Menu from '../Menu/Menu';

import { useHistory } from 'react-router-dom';

const _ = require('lodash');






const SearchKey = () => {


    const dispatch = useDispatch()
    const history = useHistory();
    let [key, setkey] = useState(null)

    let dataSearchKeyRedux = useSelector(state => state.admin.dataSearchKey)




    useEffect(async () => {

        // if (dataSearchKeyRedux !== null) {
        //     setkey(dataSearchKeyRedux)
        // }
        setkey(dataSearchKeyRedux)


    }, [dataSearchKeyRedux])





    let [isClick, setisClick] = useState(false)





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


    const handlePageClick = (event) => {
        console.log('event', event.selected)
    }


    const handleClickDetailedInfor = (data) => {

        history.push(`/DetailedInfor/${data.id}/${data.parameterName}`);
    }



    return (
        <div className='SearchKey'>
            {console.log('gia tri key', key)}
            <div className='SearchKey-header'>
                <Menu />
            </div>


            <div className='SearchKey-content'>

                <div className='SearchKey-content-top'>
                    <span className='SearchKey-content-top-title'>
                        Có {!_.isEmpty(key) === true ? key && key.length : '0'} kết quả tìm kiếm
                    </span>
                </div>
                <div className='SearchKey-content-bottom'>
                    {
                        key && key.map((item, index) => {
                            return (<Elements movieName={item.movieName} duration={item.duration}
                                parameterName={item.parameterName}
                                id={item._id}
                                handleClickDetailedInfor={handleClickDetailedInfor}

                            />)
                        })
                    }

                </div>


            </div>
            <div className='SearchKey-footer'>
                <Footer />
            </div>
            <div className='Footer-end'>
                <p>Copyright © 2024</p>
            </div>

        </div >
    );
}

export default SearchKey;




