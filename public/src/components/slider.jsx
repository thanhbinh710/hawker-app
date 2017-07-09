import _ from 'lodash';
import React from 'react';
import Slider from 'react-slick';

export default (props) => {
    const imgData = props.data;

    const settings = {
        className: 'post-slider',
        dots: true,
        dotsClass: 'slick-dots',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
    };


    const listImg = imgData.map((imgSrc) => 
        <div key={imgSrc.toString()} >
            <div className="slider_post_img" style={{backgroundImage:'url('+imgSrc+')'}}></div>
        </div>
    );

    return (
        <Slider {...settings}>
            {listImg}
        </Slider>
    );

}