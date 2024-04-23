// import React, { Component } from 'react';
import { Audio } from 'react-loader-spinner'
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';

import * as actions from '../store/actions';
import '../assets/css/SearchMenu/SearchMenu.css';
import Footer from '../Footer/Footer';
import Elements from '../Elements/Elements';
import Elements1 from '../Elements1/Elements1';

import ReactPaginate from 'react-paginate';


import { useSelector, useDispatch } from 'react-redux';
import Menu from '../Menu/Menu';

import { useHistory } from 'react-router-dom';

const _ = require('lodash');






const SearchMenu = () => {


    const dispatch = useDispatch()
    const history = useHistory();
    let [key, setkey] = useState(null)
    let [isLoading, setisLoading] = useState(false)

    let dataSearchMenuRedux = useSelector(state => state.admin.dataSearchMenu)




    useEffect(async () => {

        // if (dataSearchMenuRedux !== null) {
        //     setkey(dataSearchMenuRedux)
        // }
        setkey(dataSearchMenuRedux)


    }, [dataSearchMenuRedux])





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
        <div className='SearchMenu'>
            {console.log('gia tri key', key)}
            <div className='SearchMenu-header'>
                <Menu />
            </div>


            <div className='SearchMenu-content'>

                <div className='SearchMenu-content-top'>
                    <span className='SearchMenu-content-top-title'>
                        Có {!_.isEmpty(key) === true ? key && key.length : '0'} kết quả tìm kiếm
                    </span>
                </div>
                <div className='SearchMenu-content-bottom'>
                    {
                        key && key.map((item, index) => {
                            return (<Elements movieName={item.movieName} duration={item.duration}
                                parameterName={item.parameterName}
                                id={item._id} image={item.image}
                                handleClickDetailedInfor={handleClickDetailedInfor}

                            />)
                        })
                    }

                </div>


            </div>
            <div className='SearchMenu-footer'>
                <Footer />
            </div>
            <div className='Footer-end'>
                <p>Copyright © 2024</p>
            </div>

        </div >
    );
}

export default SearchMenu;




