import React, { Component } from 'react';
import './Slider.css';
import FirstSlider from './FirstSlider/FirstSlider';
import SecondSlider from './SecondSlider/SecondSlider';

class Slider extends Component {
    state = {
        second: false
    }

    changeImageHandler = () => {
        const prevSecond = this.state.second;
        this.setState({second: !prevSecond})
    }

    componentDidMount() {
        this.interval = setInterval(() => this.changeImageHandler(), 5000);
    }
    render() {
        let image = null;
        if(this.state.second) {
            image = (
            <SecondSlider />
            );
        } 
        else {
            image = (
                <div>
                    <FirstSlider />
                </div> 
            );
        }
        let style1= null;
        let style2= null;
        if(this.state.second){
            style2 = {
                backgroundColor: 'rgb(255, 255, 255)'
            }
        }
        else {
            style1 = {
                backgroundColor: 'rgb(255, 255, 255)'
            }
        }
        return (
            <div>
                {image}
                <i className="fa fa-chevron-left" onClick={this.changeImageHandler}></i>
                <i className="fa fa-chevron-right" onClick={this.changeImageHandler}></i>
                <div className="circles">
                    <div style={style1} className="circle1" onClick={this.changeImageHandler}></div>
                    <div style={style2} className="circle2" onClick={this.changeImageHandler}></div>
                </div>
                
            </div>
            
        );
    }
}

export default Slider;