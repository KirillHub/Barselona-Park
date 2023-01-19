import { Apartment } from '../../../types/type';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.scss';

interface MyProps {
  apartment: Apartment;
}

export const SliderImages = ({ apartment }: MyProps) => {
  const settings = {
    className: 'center',
    centerPadding: '0px',
    centerMode: false,
    infinite: true,
    draggable: true,
    autoplaySpeed: 0,
    autoplay: false,
    slidesToShow: 3,
    speed: 500,
    rows: 1,
  };

  return (
    <div className="category-page-container__apartments-card__images">
      <Slider {...settings}>
        {apartment.pictures.map((picture, index) => (
          <img className="picture" src={picture} alt="1" key={index} />
        ))}
      </Slider>
    </div>
  );
};
