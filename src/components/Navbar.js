import React from 'react'

import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
                <a className="navbar-brand" href="#">{props.title}</a>
                {/* We replace "a" to "Link" keyword bcz for no reload and we can see it on React router.com Website */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.aboutText}</Link>
                        </li> */}
                    </ul>
                    {/* <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-primary" type="submit">Search</button>
                    </form> */}
                    {/* This is for Dark Mode */}
                    <div className={`form-check form-switch text-${props.mode ==='dark'?'light':'dark'}`}>
                        <input className="form-check-input" onClick={props.toogleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
                    </div>
                    {/* This is for Purple Mode */}
                    <div className={`form-check form-switch text-${props.mode ==='dark'?'light':''} mx-3`}>
                        <input className="form-check-input" onClick={props.toogleModeP} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Purple Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}
Navbar.propts = {
    title: PropTypes.string,
    aboutText: PropTypes.string
}

Navbar.defaultpropts = {
    title: 'Name',
    aboutText: 'About'
}
