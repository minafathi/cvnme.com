import React, { Component } from 'react';
import './NavItems.css';
import { NavItem } from 'react-bootstrap';
import ToggledItems from './ToggledItems/ToggledItems';
import DesktopItems from './DesktopItems/DesktopItems';

class NavItems extends Component {

    state = {
        toggleNav: false,
        theposition: window.pageYOffset,
    }

    toggleHandler = () => {
        const doesShow = this.state.toggleNav;
        this.setState({toggleNav: !doesShow})
    }

    componentDidMount () {
        window.addEventListener('scroll', this.listentToScroll)
    }

    listentToScroll = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop
        this.setState({theposition: winScroll})
    }

    render() {
        // console.log(this.state.toggleNav)
        // console.log(this.state.theposition)
        let navItems = null;

        let navScroll = null;
        let brandStyle = null;
        let navbarBrandStyle = null;
        let midStyle = null;
        if(this.state.theposition > 100) {
            navScroll = {
                borderBottom: '1px solid #e7eaec',
                height: '70px',
                backgroundColor: '#fff',
            }

            midStyle = {
                marginTop: '-5px'
            }
            brandStyle = {
                width: '115px',
                height: '40px',
                top: '20',
                marginTop: '3px',
                borderTopRightRadius: '5px',
                borderTopLeftRadius: '5px',
                // textAlign: 'center',
                // alignItems: 'center',
                display: 'inline-block',
                paddingLeft: '10px',
                paddingRight: '10px',
                paddingTop: '10px',
                paddingBottom: '10px',
            }

            navbarBrandStyle = {
                fontSize: '12px',
                width: 'fit-content',
                height: '20px',
                // marginRight: 'auto',
                // marginLeft: 'auto',
                // textAlign: 'center',
                display: 'inline-block'
            }

        } else {
            navbarBrandStyle = {
                fontSize: '14px'
            }
        }

        if(this.state.toggleNav) {
            navItems = (
                // <div  className={this.state.toggleNav ? "wrapperToggled" :"wrapperToggledOut"}>
                <div  className="wrapperToggled">
                    <nav className="navbar navbarToggled navbar-expand-lg">
                        <div className="inToggled">
                            <ToggledItems position={this.state.theposition} title="Home" />
                            <ToggledItems position={this.state.theposition} title="Features" />
                            <ToggledItems position={this.state.theposition} title="Team" />
                            <ToggledItems position={this.state.theposition} title="Testimonials" />
                            <ToggledItems position={this.state.theposition} title="Pricing" />
                            <ToggledItems position={this.state.theposition} title="Contact" />
                        </div>
                    </nav>
                </div>
            );

        }
            
        return (
            <div>
                <div style={navScroll} className="navbar-wrapper">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container">
                            <div>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" onClick={this.toggleHandler} data-target=".navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                
                                <div style={midStyle} className="collapse navbar-collapse navbarNavDropdown">
                                    <ul className="navbar-nav">
                                        <DesktopItems title="Contact" />
                                        <DesktopItems title="Pricing" />
                                        <DesktopItems title="Testimonials" />
                                        <DesktopItems title="Team" />
                                        <DesktopItems title="Features" />
                                        <DesktopItems title="Home" />
                                    </ul>
                                </div>
                            </div>
                            <div style={brandStyle} className="brand">
                                <a style={navbarBrandStyle} className="navbar-brand" href="index.html">WEBAPPLAYERS</a>
                            </div>
                        </div>
                    </nav>
                </div>
                {navItems}
            </div>
        );
    }
}

export default NavItems;