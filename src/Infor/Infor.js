// import React, { Component } from 'react';
import { Audio } from 'react-loader-spinner'
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import CommonUtil from '../CommonUtil/CommonUtil';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { Buffer } from 'buffer';

import * as actions from '../store/actions';
import '../assets/css/Infor/Infor.css';


import { useSelector, useDispatch } from 'react-redux';

import { useHistory } from 'react-router-dom';
const _ = require('lodash');






const Infor = (props) => {


    const dispatch = useDispatch()
    const history = useHistory();
    let [id, setid] = useState('')
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
    let [actionHandle, setactionHandle] = useState('CREATE')


    let [isOpenpreviewImage, setisOpenpreviewImage] = useState(false)


    useEffect(async () => {

        if (props.item !== null) {
            console.log('giá trị của item la ', props.item)
            setmovieName(props.item.movieName)
            setparameterName(props.item.parameterName)
            setduration(props.item.duration)
            setreleaseYear(props.item.releaseYear)
            setdirector(props.item.director)
            setaction(props.item.action)
            setcategory(props.item.category)
            setmovieLink(props.item.movieLink)
            setcountry(props.item.country)
            setmovieContent(props.item.movieContent)
            setid(props.item._id)


            let imageBase64 = '';

            if (props.item.image) {

                imageBase64 = new Buffer(props.item.image, 'base64').toString('binary')

                if (imageBase64) {


                    setimage(imageBase64)

                }
            }

            setactionHandle('UPDATE')


        }


    }, [props.item])



    const onChangeInputMovieName = (event) => {
        let event1 = event.target.value;
        console.log('Gia trị là ', event1)

        setmovieName(event1)
    }

    const onChangeInputParameterName = (event) => {
        let event1 = event.target.value;
        console.log('Gia trị là ', event1)

        setparameterName(event1)
    }

    const onChangeInputDuration = (event) => {
        let event1 = event.target.value;
        console.log('Gia trị là ', event1)

        setduration(event1)
    }

    const onChangeInputReleaseYear = (event) => {
        let event1 = event.target.value;
        console.log('Gia trị là ', event1)

        setreleaseYear(event1)
    }

    const onChangeInputDirector = (event) => {
        let event1 = event.target.value;
        console.log('Gia trị là ', event1)

        setdirector(event1)
    }

    const onChangeInputAction = (event) => {
        let event1 = event.target.value;
        console.log('Gia trị là ', event1)

        setaction(event1)
    }

    const onChangeInputCategory = (event) => {
        let event1 = event.target.value;
        console.log('Gia trị là ', event1)

        setcategory(event1)
    }

    const onChangeInputMovieLink = (event) => {
        let event1 = event.target.value;
        console.log('Gia trị là ', event1)

        setmovieLink(event1)
    }

    const onChangeInputCountry = (event) => {
        let event1 = event.target.value;
        console.log('Gia trị là ', event1)

        setcountry(event1)
    }

    const onChangeInputMovieContent = (event) => {
        let event1 = event.target.value;
        console.log('Gia trị là ', event1)

        setmovieContent(event1)
    }

    const handleOpenpreviewImage = () => {

        setisOpenpreviewImage(true)
    }



    const onChangeInputImage = async (event) => {
        let data = event.target.files;
        let file = data[0];

        if (file) {
            let base64 = await CommonUtil.getbase64(file);
            let Url = URL.createObjectURL(file);

            setimage(base64)
            // this.setState({
            //     UrlImage: Url,
            //     image: base64
            // })
        }

    }

    const handleCreateOrUpdateVideo = () => {

        if (actionHandle === 'CREATE') {
            dispatch(actions.handleCreateVideo({
                movieName: movieName,
                parameterName: parameterName,
                duration: duration,
                releaseYear: releaseYear,
                director: director,
                action: action,
                category: category,
                movieLink: movieLink,
                country: country,
                movieContent: movieContent,
                image: image

            }))
        } else {
            dispatch(actions.handleUpdateVideo({
                id: id,
                movieName: movieName,
                parameterName: parameterName,
                duration: duration,
                releaseYear: releaseYear,
                director: director,
                action: action,
                category: category,
                movieLink: movieLink,
                country: country,
                movieContent: movieContent,
                image: image

            }))

            setactionHandle('CREATE')


        }

        setmovieName('')
        setparameterName('')
        setduration('')
        setreleaseYear('')
        setdirector('')
        setaction('')
        setcategory('')
        setmovieLink('')
        setcountry('')
        setmovieContent('')
        setimage('')

    }







    return (



        <div className="container">
            <form >
                <div className="row">
                    <div className="col-25">
                        <label for="fname">MovieName</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="fname" name="firstname" placeholder="Your movieName.."
                            onChange={(event) => onChangeInputMovieName(event)}
                            value={movieName}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label for="fname">ParameterName</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="fname" name="firstname" placeholder="Your parameterName.."
                            onChange={(event) => onChangeInputParameterName(event)}
                            value={parameterName}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label for="fname">Duration</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="fname" name="firstname" placeholder="Your duration.."
                            onChange={(event) => onChangeInputDuration(event)}
                            value={duration}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label for="fname">ReleaseYear</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="fname" name="firstname" placeholder="releaseYear."
                            onChange={(event) => onChangeInputReleaseYear(event)}
                            value={releaseYear}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-25">
                        <label for="lname">Director</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="lname" name="lastname" placeholder="Your dỉrector.."
                            onChange={(event) => onChangeInputDirector(event)}
                            value={director}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label for="lname">Action</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="lname" name="lastname" placeholder="Your action.."
                            onChange={(event) => onChangeInputAction(event)}
                            value={action}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label for="lname">Category</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="lname" name="lastname" placeholder="Your category.."
                            onChange={(event) => onChangeInputCategory(event)}
                            value={category}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label for="lname">MovieLink</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="lname" name="lastname" placeholder="Your movieLink.."
                            onChange={(event) => onChangeInputMovieLink(event)}
                            value={movieLink}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label for="lname">Country</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="lname" name="lastname" placeholder="Your country.."
                            onChange={(event) => onChangeInputCountry(event)}
                            value={country}
                        />
                    </div>

                </div>
                <div className="row">
                    <div className="col-25">
                        <label for="subject">MovieContent</label>
                    </div>
                    <div className="col-75">
                        <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: "200px" }}
                            onChange={(event) => onChangeInputMovieContent(event)}
                            value={movieContent}
                        ></textarea>
                    </div>
                </div>

                <div className="row">
                    <div className="col-25">
                        <label for="subject">Image</label>
                    </div>
                    <div className="col-25">
                        <input type="file"
                            onChange={(event) => { onChangeInputImage(event) }}
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
                            marginLeft: '50px', backgroundSize: 'contain', backgroundImage: `url(${image})`,
                            cursor: 'pointer'
                        }}
                            onClick={() => { handleOpenpreviewImage() }}
                        >

                            {isOpenpreviewImage === true &&
                                <Lightbox
                                    mainSrc={image}
                                    onCloseRequest={() => setisOpenpreviewImage(false)} />
                            }
                        </div>
                    </div>
                </div>

                <br />
                <div className="row">
                    <button type="button" class="btn btn-secondary"
                        onClick={() => { handleCreateOrUpdateVideo() }}
                    >{actionHandle === 'CREATE' ? 'Create' : 'Update'}</button>
                </div>
            </form >
        </div >


    );
}

export default Infor;




