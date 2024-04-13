import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useHistory } from 'react-router-dom';

import * as actions from '../store/actions';
import '../assets/css/Elements/Elements.css';




const Elements = (props) => {

    const dispatch = useDispatch()
    const history = useHistory();


    return (
        <div className='Elements'>
            <div className='Elements-top'>
                <span className='Elements-top-en'>{props.en}</span>
            </div>
            <div className='Elements-bottom'>
                <div className='Elements-bottom-time'>{props.time}</div>
                <div className='Elements-bottom-name'>{props.name}</div>

            </div>

        </div>
    );
}

export default Elements;