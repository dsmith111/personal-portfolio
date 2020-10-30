import React from 'react';
import {Link} from 'react-router-dom';

function Footer(props) {
    return(
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                    </div>
                </div>
            </div>
            <div className="row justify-content-center mt-2">
                <div className="col-auto">
                    <p>© Copyright 2020 David Smith</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;
