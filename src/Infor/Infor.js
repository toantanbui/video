// import React, { Component } from 'react';
import { Audio } from 'react-loader-spinner'
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';

import * as actions from '../store/actions';
import '../assets/css/Infor/Infor.css';


import { useSelector, useDispatch } from 'react-redux';

import { useHistory } from 'react-router-dom';
const _ = require('lodash');






const Infor = () => {


    const dispatch = useDispatch()
    const history = useHistory();






    return (



        <div className="container">
            <form >
                <div className="row">
                    <div className="col-25">
                        <label for="fname">MovieName</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="fname" name="firstname" placeholder="Your movieName.." />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label for="fname">ParameterName</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="fname" name="firstname" placeholder="Your parameterName.." />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label for="fname">Duration</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="fname" name="firstname" placeholder="Your duration.." />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label for="fname">ReleaseYear</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="fname" name="firstname" placeholder="releaseYear." />
                    </div>
                </div>

                <div className="row">
                    <div className="col-25">
                        <label for="lname">Dỉrector</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="lname" name="lastname" placeholder="Your dỉrector.." />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label for="lname">Action</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="lname" name="lastname" placeholder="Your action.." />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label for="lname">Category</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="lname" name="lastname" placeholder="Your category.." />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label for="lname">MovieLink</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="lname" name="lastname" placeholder="Your movieLink.." />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label for="lname">Country</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="lname" name="lastname" placeholder="Your country.." />
                    </div>

                </div>
                <div className="row">
                    <div className="col-25">
                        <label for="subject">MovieContent</label>
                    </div>
                    <div className="col-75">
                        <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: "200px" }}></textarea>
                    </div>
                </div>

                <div className="row">
                    <div className="col-25">
                        <label for="subject">Image</label>
                    </div>
                    <div className="col-25">
                        <input type="file"

                        />

                    </div>

                </div>
                <div className="row">
                    <div className="col-25">
                        <label for="subject">Show Image</label>
                    </div>
                    <div className="col-75">
                        <div style={{
                            height: '100px', width: '100px', borderStyle: 'solid', borderColor: '#cccccc',
                            marginLeft: '50px', backgroundSize: 'contain',
                            cursor: 'pointer'
                        }}  >

                        </div>
                    </div>
                </div>

                <br />
                <div className="row">
                    <button type="button" class="btn btn-secondary">Secondary</button>
                </div>
            </form >
        </div >


    );
}

export default Infor;




