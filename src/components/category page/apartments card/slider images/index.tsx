'use client';
import Image from 'next/image';
import { Apartment } from '../../../types/type';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

import './style.scss';
import { useEffect, useState } from 'react';

interface MyProps {
  apartment: Apartment;
  apartmentIndex: number;
}

export const SliderImages = ({ apartment, apartmentIndex }: MyProps) => {
  // const [ref] = useKeenSlider<HTMLDivElement>({
  //   slides: {
  //     perView: 2,
  //     spacing: 15,
  //   },
  //   loop: true,
  // });

  const settings = {
    className: 'center',
    centerPadding: '0px',
    centerMode: false,
    infinite: true,
    draggable: true,
    autoplaySpeed: 0,
    autoplay: false,
    slidesToShow: 2,
    speed: 500,
    rows: 1,
  };

  return (
    <div className="category-page-container__apartments-card__images">
      <Slider {...settings}>
        {apartment.pictures.map((picture, index) => (
          <div className="category-page-container__apartments-card__images-picture" key={index}>
            {apartmentIndex < 4 ? (
              <>
                {index < 2 ? (
                  <Image
                    priority
                    fill
                    sizes="200px"
                    quality={100}
                    alt="0"
                    src={picture}
                    className="category-page-container__apartments-card__images-picture"
                  />
                ) : (
                  <Image fill sizes="200px" loading="lazy" quality={100} alt="0" src={picture} />
                )}
              </>
            ) : (
              <Image fill sizes="200px" loading="lazy" quality={100} alt="0" src={picture} />
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

// const [currentSlide, setCurrentSlide] = useState(0);
// const [loaded, setLoaded] = useState(false);
// const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
//   initial: 0,
//   loop: true,
//   mode: 'free',
//   slideChanged(slider) {
//     setCurrentSlide(slider.track.details.rel);
//   },
//   created() {
//     setLoaded(true);
//   },
//   slides: {
//     perView: 2,
//     spacing: 10,
//   },
// });

// function Arrow(props: { disabled: boolean; left?: boolean; onClick: (e: any) => void }) {
//   const disabeld = props.disabled ? ' arrow--disabled' : '';
//   return (
//     <svg
//       onClick={props.onClick}
//       className={`arrow ${props.left ? 'arrow--left' : 'arrow--right'} ${disabeld}`}
//       xmlns="http://www.w3.org/2000/svg">
//       {props.left && <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />}
//       {!props.left && <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />}
//     </svg>
//   );
// }

// <div className="category-page-container__apartments-card__images">
//   <div className="navigation-wrapper">
//     <div
//       ref={sliderRef}
//       className="keen-slider category-page-container__apartments-card__images-picture">
//       {apartment.pictures.map((src, idx) => (
//         <img className={`keen-slider__slide ${'number-slide' + idx} `} width={200} src={src} key={idx} />
//       ))}
//     </div>

//     {loaded && instanceRef.current && (
//       <>
//         <Arrow
//           left
//           onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()}
//           disabled={currentSlide === 0}
//         />

//         <Arrow
//           onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}
//           disabled={currentSlide === instanceRef.current.track.details.slides.length - 1}
//         />
//       </>
//     )}
//   </div>
// </div>
