'use client';

import Image from 'next/image';
import { Apartment } from '../../../types/type';

import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import './style.scss';

interface MyProps {
  apartment: Apartment;
  apartmentIndex: number;
}

export const SliderImages = ({ apartment, apartmentIndex }: MyProps) => {
  return (
    <Swiper
      modules={[Navigation, A11y]}
      spaceBetween={15}
      slidesPerView={2}
      navigation
      className="category-page-container__apartments-card__images">
      {apartment.pictures.map((picture, index) => (
        <span key={picture.id}>
          {apartmentIndex < 4 ? (
            index < 2 ? (
              <SwiperSlide key={picture.id}>
                <div className="category-page-container__apartments-card__images-picture">
                  <Image
                    priority
                    fill
                    sizes="375px"
                    style={{ objectFit: 'cover' }}
                    alt={`Фотография Апартамента ${picture.id.split('-')[0]}. Номер ${
                      picture.id.split('-')[1]
                    }`}
                    src={picture.img}
                  />
                </div>
              </SwiperSlide>
            ) : (
              <SwiperSlide key={picture.id}>
                <div className="category-page-container__apartments-card__images-picture">
                  <Image
                    fill
                    sizes="300px"
                    style={{ objectFit: 'cover' }}
                    alt={`Фотография Апартамента ${picture.id.split('-')[0]}. Номер ${
                      picture.id.split('-')[1]
                    }`}
                    src={picture.img}
                  />
                </div>
              </SwiperSlide>
            )
          ) : (
            <SwiperSlide key={picture.id}>
              <div className="category-page-container__apartments-card__images-picture">
                <Image
                  fill
                  sizes="375px"
                  style={{ objectFit: 'cover' }}
                  alt={`Фотография Апартамента ${picture.id.split('-')[0]}. Номер ${
                    picture.id.split('-')[1]
                  }`}
                  src={picture.img}
                />
              </div>
            </SwiperSlide>
          )}
        </span>
      ))}
    </Swiper>
  );
};

//  style={{
//                       width: 'calc(86px + 287 * (100vw / 1920))',
//                       height: 'calc(165px + 105 * (100vw / 1920))',
//                     }}

{
  /* <div ref={ref} className="keen-slider">

    </div> */
}

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
