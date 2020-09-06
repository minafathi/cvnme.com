import React from 'react';
import './Footer.css';

const footer = (props) => {
    return (
        <div className="Footer">
            <div className="container FooterIn">
                <div className="worldImage">
                    <div className="row m-b-lg FooterFirstBox">
                        <div className="col-lg-12 text-center">
                            <div className="navy-line"></div>
                            <h1 className="Contact">Contact Us</h1>
                            <p className="ContactP">Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.</p>
                        </div>
                    </div>
                    <div className="row m-b-lg CenterAlign FooterSecondBox">
                        <div className="col-lg-3 col-lg-offset-3 addressCap">
                            <address>
                                <strong><span className="navy" className="CompanyName">Company name, Inc.</span></strong><br/>
                                <div className="CompanyAddress">
                                    795 Folsom Ave, Suite 600<br/>
                                    San Francisco, CA 94107<br/>
                                    <abbr title="Phone">P:</abbr> (123) 456-7890
                                </div>
                            </address>
                        </div>
                        <div className="col-lg-4 ">
                            <p className="FooterDescription">
                                Consectetur adipisicing elit. Aut eaque, totam corporis laboriosam veritatis quis ad perspiciatis, totam corporis laboriosam veritatis, consectetur adipisicing elit quos non quis ad perspiciatis, totam corporis ea,
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <a href="mailto:test@email.com" className="btn btn-primary emailBtn">Send us mail</a>
                            <p className="m-t-sm follow">
                                Or follow us on social platform
                            </p>
                                
                        </div>
                        <div className="social-icon">
                            <div className="text-center">
                                <div className="icon"><i className="fa fa-twitter"></i></div>
                                <div className="icon"><i className="fa fa-facebook"></i></div>
                                <div className="icon"><i className="fa fa-linkedin"></i></div>
                            </div>
                        </div>
                        <div className="row LastLine">
                                <strong className="CName">&copy; 2015 Company Name</strong><br/><div className="LastDes">consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</div>
                        </div>
                        <div className="lastbox"></div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default footer;