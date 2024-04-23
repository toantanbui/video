// import React, { Component } from 'react';
import { Audio } from 'react-loader-spinner'
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';

import * as actions from '../store/actions';
import '../assets/css/Home/Home.css';
import Footer from '../Footer/Footer';
import Elements from '../Elements/Elements';
import Elements1 from '../Elements1/Elements1';

import ReactPaginate from 'react-paginate';


import { useSelector, useDispatch } from 'react-redux';
import Menu from '../Menu/Menu';

import { useHistory } from 'react-router-dom';

const _ = require('lodash');






const Home = () => {


    const dispatch = useDispatch()
    const history = useHistory();
    let [mythologyHome, setmythologyHome] = useState(null)
    let [allVideo, setallVideo] = useState(null)
    let [familyHome, setfamilyHome] = useState(null)
    let [allVideoByTime, setallVideoByTime] = useState(null)

    let mythology = useSelector(state => state.admin.dataOneVideoMythology)
    let dataAllVideoRedux = useSelector(state => state.admin.dataAllVideo)
    let family = useSelector(state => state.admin.dataOneVideoFamily)
    let dataAllVideoByTimeRedux = useSelector(state => state.admin.dataAllVideoByTime)

    useEffect(async () => {

        await dispatch(actions.handleGetOneVideoByMythology({ a1: 'than-thoai', a2: 'gia-dinh' }))

        if (mythology !== null) {
            setmythologyHome(mythology)
            setallVideo(dataAllVideoRedux)
        }
        if (family !== null) {
            setfamilyHome(family)
        }
        if (dataAllVideoByTimeRedux !== null) {
            setallVideoByTime(dataAllVideoByTimeRedux)
        }



    }, [])

    useEffect(async () => {


        if (mythology !== null) {
            console.log('Gia trị của thần thoại là: ', mythology)
            setmythologyHome(mythology)
            setallVideo(dataAllVideoRedux)
        }
        if (family !== null) {
            setfamilyHome(family)
        }
        if (dataAllVideoByTimeRedux !== null) {
            setallVideoByTime(dataAllVideoByTimeRedux)
        }


    }, [mythology, dataAllVideoRedux, family, dataAllVideoByTimeRedux])





    let [isClick, setisClick] = useState(false)
    let [pagination, setpagination] = useState([
        { number: 1 },
        { number: 2 },
        { number: 3 },
        { number: 4 },
        { number: 5 },
        { number: 6 },
        { number: 7 },
        { number: 8 },
        { number: 9 },
        { number: 10 },

    ])



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


    const handlePageClick = (event) => {
        console.log('event', event.selected)



    }


    const handleClickDetailedInfor = (data) => {

        history.push(`/DetailedInfor/${data.id}/${data.parameterName}`);
    }



    return (
        <div className='Home'>
            <div className='Home-header'>
                <Menu />
            </div>


            <div className='Home-content'>
                <div className='Home-content-left'>
                    <div className='Home-content-left-one'>
                        <div className='Home-content-left-one-header'>
                            Phim Thần Thoại
                        </div>
                        <div className='Home-content-left-one-content'>
                            {!_.isEmpty(mythologyHome) ?
                                mythologyHome && mythologyHome.map((item, index) => {
                                    return (<Elements movieName={item.movieName} duration={item.duration}
                                        parameterName={item.parameterName}
                                        id={item._id} image={item.image}
                                        handleClickDetailedInfor={handleClickDetailedInfor}

                                    />)
                                }) : <Audio
                                    heigth="100"
                                    width="100"
                                    color='grey'
                                    ariaLabel='loading'
                                />
                            }

                        </div>
                    </div>
                    <div className='Home-content-left-one'>
                        <div className='Home-content-left-one-header'>
                            Phim Gia Đình
                        </div>
                        <div className='Home-content-left-one-content'>
                            {!_.isEmpty(familyHome) ?
                                familyHome && familyHome.map((item, index) => {
                                    return (<Elements movieName={item.movieName} duration={item.duration}
                                        parameterName={item.parameterName}
                                        id={item._id} image={item.image}
                                        handleClickDetailedInfor={handleClickDetailedInfor}

                                    />)
                                }) : <Audio
                                    heigth="100"
                                    width="100"
                                    color='grey'
                                    ariaLabel='loading'
                                />
                            }
                        </div>
                    </div>
                    {/* <div className='Home-content-left-two'></div> */}
                    <div className='Home-content-left-three'>
                        <div className='Home-content-left-three-header'>
                            Phim khác
                        </div>
                        <div className='Home-content-left-three-content'>
                            {!_.isEmpty(allVideo) ?
                                allVideo && allVideo.map((item, index) => {
                                    return (<Elements movieName={item.movieName} duration={item.duration}
                                        parameterName={item.parameterName}
                                        id={item._id} image={item.image}
                                        handleClickDetailedInfor={handleClickDetailedInfor}

                                    />)
                                }) :
                                <Audio
                                    heigth="100"
                                    width="100"
                                    color='grey'
                                    ariaLabel='loading'
                                />
                            }
                        </div>
                        <div className='Home-content-left-three-pagination'>

                            <ReactPaginate
                                breakLabel="..."
                                nextLabel="next >"
                                onPageChange={handlePageClick}
                                pageRangeDisplayed={3}
                                pageCount={10}
                                previousLabel="< previous"
                                // renderOnZeroPageCount={null}

                                pageClassName='page-item'
                                pageLinkClassName='page-link'
                                previousLinkClassName='page-link'
                                previousClassName='page-item'
                                nextClassName='page-item'
                                nextLinkClassName='page-link'
                                breakClassName='page-item'
                                breakLinkClassName='page-link'
                                containerClassName='panination'
                                activeClassName='active'
                            />

                        </div>
                    </div>

                </div>
                <div className='Home-content-right'>
                    <div className='Home-content-right-header'>Mới nhất</div>
                    <div className='Home-content-right-content'>
                        {console.log('gia trị mới nhất', allVideoByTime)}
                        {
                            allVideoByTime && allVideoByTime.map((item, index) => {
                                return (<Elements1 movieName={item.movieName} duration={item.duration}
                                    parameterName={item.parameterName}
                                    id={item._id} image={item.image}
                                    handleClickDetailedInfor={handleClickDetailedInfor}
                                />)
                            })
                        }

                    </div>
                </div>
            </div>
            <div className='Home-footer'>
                <Footer />
            </div>
            <div className='Footer-end'>
                <p>Copyright © 2024</p>
            </div>

        </div >
    );
}

export default Home;




