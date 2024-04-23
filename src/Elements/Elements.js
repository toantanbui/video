import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { Buffer } from 'buffer';

import * as actions from '../store/actions';
import '../assets/css/Elements/Elements.css';




const Elements = (props) => {

    const dispatch = useDispatch()
    const history = useHistory();

    let [image, setimage] = useState('')

    const handleClick = () => {
        props.handleClickDetailedInfor(props)

    }

    useEffect(async () => {



        if (props !== null) {



            let imageBase64 = '';

            if (props.image) {

                imageBase64 = new Buffer(props.image, 'base64').toString('binary')

                if (imageBase64) {


                    setimage(imageBase64)

                }
            }

            console.log('image', props.image)


        }




    }, [props])


    return (
        <div className='Elements'
            onClick={() => { handleClick() }}
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className='Elements-top'>
                <span className='Elements-top-en'
                    style={{
                        backgroundColor: 'white', height: '30px',
                        borderRadius: '10px'

                    }}
                >Thuyết minh</span>
            </div>
            <div className='Elements-bottom'

            >
                <div className='Elements-bottom-time'
                    style={{
                        backgroundColor: 'white',
                        borderRadius: '10px',
                    }}
                >{props.duration}</div>
                <div className='Elements-bottom-name'
                    style={{
                        backgroundColor: 'white',
                        borderRadius: '10px',
                    }}
                >{props.movieName}</div>

            </div>

        </div>
    );
}

export default Elements;