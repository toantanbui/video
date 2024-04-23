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






const Watch = (props) => {


    const dispatch = useDispatch()
    const history = useHistory();
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


            console.log('giá trị video update', dataOneVideoIdRedux)

            setmovieName(dataOneVideoIdRedux[0].movieName);
            setparameterName(dataOneVideoIdRedux[0].parameterName)
            setduration(dataOneVideoIdRedux[0].duration)
            setreleaseYear(dataOneVideoIdRedux[0].releaseYear)

            setmovieLink(dataOneVideoIdRedux[0].movieLink)

            setmovieContent(dataOneVideoIdRedux[0].movieContent)




        }
        if (dataAllVideoByTimeRedux !== null) {
            setallVideoByTime(dataAllVideoByTimeRedux)
        }



    }, [dataOneVideoIdRedux, dataAllVideoByTimeRedux])




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

    const handleClickDetailedInfor = (data) => {

        history.push(`/DetailedInfor/${data.id}/${data.parameterName}`);
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

                            src={movieLink}
                            frameborder="0"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                            allowfullscreen="true"
                            width="100%"
                            height="100%"

                        ></iframe>
                    </div>
                    <div className='Watch-content-left-title'>
                        {movieName}
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
            <div className='Watch-footer'>
                <Footer />
            </div>
            <div className='Footer-end'>
                <p>Copyright © 2024</p>
            </div>

        </div >
    );
}

export default Watch;




