// import React, { Component } from 'react';
import { Audio } from 'react-loader-spinner'
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';

import * as actions from '../store/actions';
import '../assets/css/DetailedInfor/DetailedInfor.css';
import Footer from '../Footer/Footer';
import Elements1 from '../Elements1/Elements1';
import { Buffer } from 'buffer';



import { useSelector, useDispatch } from 'react-redux';
import Menu from '../Menu/Menu';

import { useHistory } from 'react-router-dom';
const _ = require('lodash');






const DetailedInfor = (props) => {


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

    let [movieName, setmovieName] = useState('')
    let [parameterName, setparameterName] = useState('')
    let [duration, setduration] = useState('')
    let [releaseYear, setreleaseYear] = useState('')
    let [director, setdirector] = useState('')
    let [action, setaction] = useState('')
    let [category, setcategory] = useState('')
    let [movieLink, setmovieLink] = useState('')
    let [country, setcountry] = useState('')
    let [movieContent, setmovieContent] = useState('')
    let [image, setimage] = useState('')
    let [allVideoByTime, setallVideoByTime] = useState(null)





    let [inforOneVideo, setinforOneVideo] = useState(null)


    let dataOneVideoIdRedux = useSelector(state => state.admin.dataOneVideoId)
    let dataAllVideoByTimeRedux = useSelector(state => state.admin.dataAllVideoByTime)
    useEffect(async () => {


        await dispatch(actions.handleGetOneVideoById({ id: props.match.params.id }))
        console.log('giá trị video componentDidmount', dataOneVideoIdRedux)
        // if (dataOneVideoIdRedux !== null) {

        //     setinforOneVideo(dataOneVideoIdRedux)
        //     console.log('giá trị video componentDidmount', dataOneVideoIdRedux)


        // }
        console.log('giá trị tham số', props.match.params.id)
        if (dataAllVideoByTimeRedux !== null) {
            setallVideoByTime(dataAllVideoByTimeRedux)
        }



    }, [])

    useEffect(async () => {



        if (dataOneVideoIdRedux !== null) {

            setinforOneVideo(dataOneVideoIdRedux)
            console.log('giá trị video update', dataOneVideoIdRedux)

            setmovieName(dataOneVideoIdRedux[0].movieName);
            setparameterName(dataOneVideoIdRedux[0].parameterName)
            setduration(dataOneVideoIdRedux[0].duration)
            setreleaseYear(dataOneVideoIdRedux[0].releaseYear)
            setdirector(dataOneVideoIdRedux[0].director)
            setaction(dataOneVideoIdRedux[0].action)
            setcategory(dataOneVideoIdRedux[0].category)
            setmovieLink(dataOneVideoIdRedux[0].movieLink)
            setcountry(dataOneVideoIdRedux[0].country)
            setmovieContent(dataOneVideoIdRedux[0].movieContent)


            let imageBase64 = '';

            if (dataOneVideoIdRedux[0].image) {

                imageBase64 = new Buffer(dataOneVideoIdRedux[0].image, 'base64').toString('binary')

                if (imageBase64) {


                    setimage(imageBase64)

                }
            }




        }
        if (dataAllVideoByTimeRedux !== null) {
            setallVideoByTime(dataAllVideoByTimeRedux)
        }



    }, [dataOneVideoIdRedux, dataAllVideoByTimeRedux])

    const handleClickWatchVideo = async () => {
        history.push(`/watch/${props.match.params.id}/${props.match.params.parameterName}`);


    }

    const handleClickDetailedInfor = async (data) => {

        history.push(`/DetailedInfor/${data.id}/${data.parameterName}`);
        await dispatch(actions.handleGetOneVideoById({ id: data.id }))
    }





    return (
        <div className='DetailedInfor'>
            <div className='DetailedInfor-header'>
                <Menu />
            </div>
            {console.log('gia trị của mang detaile', inforOneVideo)}

            <div className='DetailedInfor-content'>
                <div className='DetailedInfor-content-left'>
                    <div className='DetailedInfor-content-left-top'>
                        <div className='DetailedInfor-content-left-top-image'>
                            <div className='DetailedInfor-content-left-top-image-image'
                                style={{ backgroundImage: `url(${image})`, backgroundSize: 'contain' }}
                            ></div>
                            <div className='DetailedInfor-content-left-top-image-watch'>
                                <span className='DetailedInfor-content-left-top-image-watch-span' style={{ height: '50px', marginRight: '5px', }}>
                                    <button type="button" class="btn btn-primary">{duration}</button>
                                </span>
                                <span className='DetailedInfor-content-left-top-image-watch-span' style={{ height: '50px', color: 'white' }}>
                                    <button type="button" class="btn btn-warning"
                                        onClick={() => { handleClickWatchVideo() }}
                                    >Xem phim</button>
                                </span>


                            </div>
                        </div>
                        <div className='DetailedInfor-content-left-top-infor'>
                            <div className='DetailedInfor-content-left-top-infor-title'>{movieName}</div>
                            <div className='DetailedInfor-content-left-top-infor-detail'>
                                <span className='abcd'>Năm sản xuất:&nbsp; <span style={{ fontFamily: 'fantasy' }}>
                                    {releaseYear}</span></span>
                                <span className='abcd'>Tập phát sóng/Thời lượng:&nbsp; <span style={{ fontFamily: 'fantasy' }}>
                                    {duration}</span></span>

                                <span className='abcd'>Quốc gia:&nbsp; <span style={{ fontFamily: 'fantasy' }}>
                                    {country}</span></span>
                                <span className='abcd'>Đạo diễn:&nbsp; <span style={{ fontFamily: 'fantasy' }}>
                                    {director}</span></span>
                                <span className='abcd'>Diễn viên:&nbsp; <span style={{ fontFamily: 'fantasy' }}>
                                    {action}</span></span>
                                <span className='abcd'>Thể loại:&nbsp; <span style={{ fontFamily: 'fantasy' }}>
                                    {category}</span></span>




                            </div>
                        </div>
                    </div>
                    <div className='DetailedInfor-content-left-bottom'>
                        <div className='DetailedInfor-content-left-bottom-title'>Nội dung</div>
                        <div className='DetailedInfor-content-left-bottom-content'>
                            {movieContent}

                        </div>

                    </div>
                </div>
                <div className='DetailedInfor-content-right'>
                    <div className='DetailedInfor-content-right-header'>Mới nhất</div>
                    <div className='DetailedInfor-content-right-content'>
                        {
                            allVideoByTime && allVideoByTime.map((item, index) => {
                                return (<Elements1 movieName={item.movieName} duration={item.duration}
                                    parameterName={item.parameterName}
                                    id={item._id}
                                    handleClickDetailedInfor={handleClickDetailedInfor}
                                />)
                            })
                        }
                    </div>
                </div>
            </div>
            <div className='DetailedInfor-footer'>
                <Footer />
            </div>
            <div className='Footer-end'>
                <p>Copyright © 2024</p>
            </div>

        </div >
    );
}

export default DetailedInfor;




