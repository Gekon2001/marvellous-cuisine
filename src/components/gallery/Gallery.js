import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class Gallery extends React.Component {
  render() {
    const urls = [
      {url: 'https://cdn.shopify.com/s/files/1/1208/1394/t/3/assets/slide-image-2.jpg?1178245996367747070'},
      {url: 'https://cdn.shopify.com/s/files/1/1208/1394/t/3/assets/slide-image-3.jpg?1178245996367747070'},
      {url: 'https://cdn.shopify.com/s/files/1/1208/1394/t/3/assets/slide-image-1.jpg?1178245996367747070'},
];

    const settings = {
      arrows: true,
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div>
        <Slider
          {...settings}
          appendDots={(dots)=><ul>{dots}</ul>}
        >
          <div style={{alignSelf: 'center'}}>
            <img src={urls[0].url} alt="image"/>
          </div>
          <div>
            <img src={urls[1].url} alt="image"/>
          </div>
          <div>
            <img src={urls[0].url} alt="image"/>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Gallery;
