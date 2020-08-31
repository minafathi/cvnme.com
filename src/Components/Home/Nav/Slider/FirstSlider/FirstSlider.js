import React from 'react';
import './FirstSlider.css';

const firstSlider = () => {
    return (
        <div className="firstSlider">
            
            <div  className="header-back one">
                <div className="firstbox"></div>
                <div className="firstCaption">
                    <h1 className="firstH1">We craft<br/>
                    brands, web apps,<br/>
                    and user interfaces<br/>
                    we are IN+ studio</h1>
                    <p className="firstP">Lorem Ipsum is simply dummy text of the printing.</p>
                    <p className="secondP">
                        <a className="btn btn-lg btn-primary firstCapBtn" href="#" role="button">READ MORE</a>
                        <a className="caption-link" href="#" role="button">Inspinia Theme</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default firstSlider;