import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useHistory } from 'react-router-dom';

import * as actions from '../store/actions';
import '../assets/css/Login/Login.css';




const Login = (props) => {

    const dispatch = useDispatch()
    const history = useHistory();

    let [email, setemail] = useState('')
    let [password, setpassword] = useState('')

    const onChangeInputEmail = (event) => {
        let event1 = event.target.value;
        console.log('event1 là', event1)

        setemail(event1)
    }
    const onChangeInputPasword = (event) => {
        let event1 = event.target.value;
        console.log('password là', event1)
        setpassword(event1)

    }

    const handleLogin1 = () => {

        dispatch(actions.handleLogin({
            email: email,
            password: password
        }))

        setemail('')
        setpassword('')
        history.push(`/admin`);
    }

    let errMessage = useSelector(state => state.user.errMessage)

    const handleClickHome = () => {

        history.push(`/`);
    }











    return (
        <div>
            <form className="modal-content animate" >


                <div className="container">
                    <label ><b>Username</b></label>
                    <input type="text" placeholder="Enter Username"
                        onChange={(event) => onChangeInputEmail(event)}
                    />

                    <label ><b>Password</b></label>
                    <input type="password" placeholder="Enter Password"
                        onChange={(event) => onChangeInputPasword(event)}
                    />

                    <span style={{
                        height: '50px', width: '50px', padding: '10px', marginRight: '10px', backgroundColor: 'red', cursor: 'pointer'

                    }}
                        onClick={() => handleLogin1()}
                    >Login</span>
                    {/* <button className='abc'
                        onClick={() => handleLogin1()}
                    >Login</button> */}
                    <label>
                        {errMessage}
                    </label>
                </div>

                <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
                    <button type="button" className="cancelbtn"
                        onClick={() => { handleClickHome() }}
                    >Back Home</button>

                </div>
            </form >
        </div >
    );
}

export default Login;