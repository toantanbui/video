import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useHistory } from 'react-router-dom';

import * as actions from '../store/actions';
import '../assets/css/Elements1/Elements1.css';




const Elements1 = (props) => {

    const dispatch = useDispatch()
    const history = useHistory();

    const handleClick = () => {
        props.handleClickDetailedInfor(props)

    }


    return (
        <div className='Elements1'
            onClick={() => { handleClick() }}
        >
            <div className='Elements1-image'></div>
            <div className='Elements1-infor'>
                <span className='Elements1-infor-name'>{props.movieName}</span>
                <span className='Elements1-infor-time'>{props.duration}</span>
            </div>

        </div>
    );
}

export default Elements1;