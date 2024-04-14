// import React, { Component } from 'react';
import { Audio } from 'react-loader-spinner'
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';

import * as actions from '../store/actions';
import '../assets/css/Watch/Watch.css';
import Footer from '../Footer/Footer';
import Elements1 from '../Elements1/Elements1';
import ReactPaginate from 'react-paginate';



import { useSelector, useDispatch } from 'react-redux';
import Menu from '../Menu/Menu';

import { useHistory } from 'react-router-dom';
const _ = require('lodash');






const Watch = () => {


    const dispatch = useDispatch()
    const history = useHistory();


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

    }




    return (
        <div className='Watch'>
            <div className='Watch-header'>
                <Menu />
            </div>


            <div className='Watch-content'>
                <div className='Watch-content-left'>
                    <div className='Watch-content-left-content'>
                        <iframe

                            src='https://drive.google.com/file/d/1hdngyjpbqVkczFh-Y_nfuQSAj6x2axeP/preview'
                            frameborder="0"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                            allowfullscreen
                            width="100%"
                            height="100%"

                        ></iframe>
                    </div>
                    <div className='Watch-content-left-title'>
                        Thạch Cảm Đan
                    </div>
                    <div className='Watch-content-left-time'>
                        <ReactPaginate
                            breakLabel="..."
                            // nextLabel="next >"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={69}
                            pageCount={69}
                            // previousLabel="< previous"
                            // renderOnZeroPageCount={null}

                            pageClassName='page-item'
                            pageLinkClassName='page-link'
                            // previousLinkClassName='page-link'
                            previousClassName='page-item'
                            nextClassName='page-item'
                            // nextLinkClassName='page-link'
                            breakClassName='page-item'
                            breakLinkClassName='page-link'
                            containerClassName='panination'
                            activeClassName='active'
                        />

                    </div>
                    <div className='Watch-content-left-chat'></div>

                </div>
                <div className='Watch-content-right'>
                    <div className='Watch-content-right-header'>Mới nhất</div>
                    <div className='Watch-content-right-content'>
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
            <div className='Watch-footer'>
                <Footer />
            </div>

        </div >
    );
}

export default Watch;




