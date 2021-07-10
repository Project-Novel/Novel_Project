import React, { Component } from "react";
import Slider from "react-slick";
import './slick1.css'
import imgfile01 from '../img/slideimg01.jpg';
import imgfile02 from '../img/slideimg02.jpg';
import imgfile03 from '../img/slideimg03.jpg';
import imgfile04 from '../img/slideimg04.jpg';



export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };
    return (
        <div>
              <Slider {...settings}>
                <div>
                    <img className="photo" src={imgfile01} />
                </div>
                <div>
                    <img className="photo" src={imgfile02} />
                </div>
                <div>
                    <img className="photo" src={imgfile03} />
                </div>
                <div>
                    <img className="photo" src={imgfile04} />
                </div>
              </Slider>
            </div>
          );
        }
      }