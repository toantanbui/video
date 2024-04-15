import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useHistory } from 'react-router-dom';

import * as actions from '../store/actions';
import '../assets/css/Elements/Elements.css';




const Elements = (props) => {

    const dispatch = useDispatch()
    const history = useHistory();

    const handleClick = () => {
        props.handleClickDetailedInfor(props)

    }


    return (
        <div className='Elements'
            onClick={() => { handleClick() }}
        >
            <div className='Elements-top'>
                <span className='Elements-top-en'>Thuyết minh</span>
            </div>
            <div className='Elements-bottom'>
                <div className='Elements-bottom-time'>{props.duration}</div>
                <div className='Elements-bottom-name'>{props.movieName}</div>

            </div>

        </div>
    );
}

export default Elements;