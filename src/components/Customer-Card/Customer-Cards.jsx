import { useState, useEffect, useRef } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import './Customer-Cards.scss';

export const CustomerCards = () => {
  const [cardIndex, setCardIndex] = useState(1);
  const swiperRef = useRef(null);

  useEffect(() => {
    swiperRef.current = new Swiper('.mySwiper', {
      slidesPerView: 1,
      pagination: {
        el: '.navigation-block',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
      navigation: {
        nextEl: '.swipe--left',
        prevEl: '.swipe--right',
      },
    });

    swiperRef.current.on('slideChange', () => {
      setCardIndex(swiperRef.current?.realIndex + 1);
    });

    return () => {
      swiperRef.current.destroy();
    };
  }, []);

  const handleNextSlide = () => {
    swiperRef.current.slideNext();
  };

  const handlePrevSlide = () => {
    swiperRef.current.slidePrev();
  };

  return (
    <div className="main--wrapper">
      <div className='wrapper'>
      <h2 className='main__title main__title--tablet-desktop'>
            People love Big<br /> <span className='main__title--important '>Invest</span>
          </h2>
          <h2 className='main__title main__title--phone'>
            People love <br />{' '}
            <span className='main__title--important'>Big Invest</span>
          </h2>
          <div className='navigation-block--forPC'>
            <button
              className='swipe swipe--left'
              onClick={handlePrevSlide}
              disabled={cardIndex === 1}
            ></button>
            <p className='navigation-block__pagination-counter'>
              <b>
                {'0' + cardIndex} / {'0' + (swiperRef.current?.slides?.length || 4)}
              </b>
            </p>
            <button
              className='swipe swipe--right'
              disabled={cardIndex === swiperRef.current?.slides?.length}
              onClick={handleNextSlide}
            ></button>
          </div>
        <div className='swiper mySwiper'>
          <div className='swiper-wrapper'>
            <div className='swiper-slide'>
              <div className='card-container'>
                <div className='customer-block'>
                  <img
                    src='../../../src/images/content/customer-photo.svg'
                    className='customer-block__photo'
                  ></img>
                  <div className="bio--wrapper">
                    <h3 className='customer-block__name'>Albert Abello</h3>
                    <p className='customer-block__profession'>Director of Growth</p>
                  </div>
                </div>
                <div className='commas-container'>
                  <img
                    src='../../../src/images/content/commas.svg'
                    className='commas'
                  ></img>
                </div>
                <div className='review-block'>
                  <p className='review-block__text'>
                    <strong>
                      This magical product actually works! It has radically
                      changed the way we build our audiences. Increasing new
                      customer sales by 6x in our most mature market.
                    </strong>
                  </p>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
              <div className='card-container'>
                <div className='customer-block'>
                  <img
                    src='../../../src/images/content/customer-photo.svg'
                    className='customer-block__photo'
                  ></img>
                  <div className="bio--wrapper">
                    <h3 className='customer-block__name'>Albert Abello</h3>
                    <p className='customer-block__profession'>Director of Growth</p>
                  </div>
                </div>
                <div className='commas-container'>
                  <img
                    src='../../../src/images/content/commas.svg'
                    className='commas'
                  ></img>
                </div>
                <div className='review-block'>
                  <p className='review-block__text'>
                    <strong>
                      This magical product actually works! It has radically
                      changed the way we build our audiences. Increasing new
                      customer sales by 6x in our most mature market.
                    </strong>
                  </p>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
              <div className='card-container'>
                <div className='customer-block'>
                  <img
                    src='../../../src/images/content/customer-photo.svg'
                    className='customer-block__photo'
                  ></img>
                  <div className="bio--wrapper">
                    <h3 className='customer-block__name'>Albert Abello</h3>
                    <p className='customer-block__profession'>Director of Growth</p>
                  </div>
                </div>
                <div className='commas-container'>
                  <img
                    src='../../../src/images/content/commas.svg'
                    className='commas'
                  ></img>
                </div>
                <div className='review-block'>
                  <p className='review-block__text'>
                    <strong>
                      This magical product actually works! It has radically
                      changed the way we build our audiences. Increasing new
                      customer sales by 6x in our most mature market.
                    </strong>
                  </p>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
              <div className='card-container'>
                <div className='customer-block'>
                  <img
                    src='../../../src/images/content/customer-photo.svg'
                    className='customer-block__photo'
                  ></img>
                  <div className="bio--wrapper">
                    <h3 className='customer-block__name'>Albert Abello</h3>
                    <p className='customer-block__profession'>Director of Growth</p>
                  </div>
                </div>
                <div className="content-wrapper">
                  <div className='commas-container'>
                    <img
                      src='../../../src/images/content/commas.svg'
                      className='commas'
                    ></img>
                  </div>
                  <div className='review-block'>
                    <p className='review-block__text'>
                      <strong>
                        This magical product actually works! It has radically
                        changed the way we build our audiences. Increasing new
                        customer sales by 6x in our most mature market.
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='navigation-block'>
            <button
              className='swipe swipe--left'
              onClick={handlePrevSlide}
              disabled={cardIndex === 1}
            ></button>
            <p className='navigation-block__pagination-counter'>
              <b>
                {'0' + cardIndex} / {'0' + (swiperRef.current?.slides?.length || 4)}
              </b>
            </p>
            <button
              className='swipe swipe--right'
              disabled={cardIndex === swiperRef.current?.slides?.length}
              onClick={handleNextSlide}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};
