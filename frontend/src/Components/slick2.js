import React, { Component } from "react";
import Slider from "react-slick";
import './slick2.css'
import imgfile01 from '../img/slide01.jpg';
import imgfile02 from '../img/slide02.jpg';
import imgfile03 from '../img/slide03.jpg';
import imgfile04 from '../img/slide04.jpg';



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
                      <b>예1제목</b><br/>
                      예1 내용
                  </div>
                  <div>
                      <img className="photo" src={imgfile02} />
                      <b>예2제목</b><br/>
                      예2 내용
                  </div>
                  <div>
                      <img className="photo" src={imgfile03} />
                      <b>예3제목</b><br/>
                      예3 내용
                  </div>
                  <div>
                      <img className="photo" src={imgfile04} />
                      <b>예4제목</b><br/>
                      예4 내용
                  </div>
                </Slider>
                <div>
                  
                </div>
              </div>
            );
          }
        }