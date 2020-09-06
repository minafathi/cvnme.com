import React, { Component } from 'react';
import '../NavItems.css';
import './DesktopItems.css'


class DesktopItems extends Component {

    state = {
        theposition: window.pageYOffset,
    }

    componentDidMount () {
        window.addEventListener('scroll', this.listentToScroll)
    }

    listentToScroll = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop
        this.setState({theposition: winScroll})
    }
    render() {
        console.log(this.state.theposition)
        let aStyle = null;
        if(this.state.theposition >= 100) {
            aStyle = {
                color: 'rgb(103, 106, 108)',
                padding: '0',
            }
        } else {
            aStyle = {
                color: '#fff',
                padding: '0',
            }
            
        }
        return (
            <li className="nav-item  ">
               <a style={aStyle} className="nav-link" href="/">{this.props.title}</a>
            </li>
        );
    }
    
}

export default DesktopItems;