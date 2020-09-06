import React from 'react';
import './SecondSlider.css';

const secondSlider = () => {
    return (
        <div  className="header-back two">
            <div className="secbox"></div>
            <div className="secondCaption">
                <h1 className="secondH1">We create meaningful <br/> interfaces that inspire.</h1>
                <p className="secondP">Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
                <a className="btn btn-lg btn-primary secondCapBtn" href="#" role="button">Learn more</a>
            </div>
        </div>
    );
}

export default secondSlider;