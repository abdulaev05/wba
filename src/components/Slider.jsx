'use client';

import styles from '@/styles/components/ui/slider.module.scss';

import { useState, useEffect, useRef } from 'react';

const Slide = ({ children }) => {
  return <div className={`${styles.slider__slide}`}>{children}</div>;
};

const Slider = ({ children, options = { transition: 500, loop: false, autoplay: false } }) => {
  const { transition: TRANSITION, loop: LOOP, autoplay: AUTOPLAY } = options;
  const INTERVAL_AUTOPLAY = TRANSITION + 1500;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [index, setIndex] = useState(0);
  const [position, setPosition] = useState(0);

  const [startX, setStartX] = useState(null);
  const [endX, setEndX] = useState(null);

  const slidesElRef = useRef();
  const prevElRef = useRef(null);
  const nextElRef = useRef(null);

  ////////////////////////
  const prevDisable = () => (prevElRef.current.disabled = true);
  const nextDisable = () => (nextElRef.current.disabled = true);
  const buttonsUndisable = () => {
    setTimeout(() => {
      prevElRef.current.disabled = false;
      nextElRef.current.disabled = false;
    }, TRANSITION);
  };
  //////////////////

  const prevSlide = () => {
    const slides = slidesElRef.current.children || [];

    prevDisable();
    buttonsUndisable();

    if (LOOP) {
      setCurrentIndex((prevIndex) => prevIndex - 1);

      setIndex((prev) => (prev - 1 < 0 ? slides.length - 1 : prev - 1));

      if (index === 0) setPosition((prev) => (prev -= slides.length * 100));

      return;
    }

    setCurrentIndex((prev) => {
      if (prev - 1 < 0) return prev;
      return prev - 1;
    });
  };

  const nextSlide = () => {
    if (!slidesElRef.current) return;

    const slides = slidesElRef.current.children;

    nextDisable();
    buttonsUndisable();

    if (LOOP) {
      setCurrentIndex((prevIndex) => prevIndex + 1);

      setIndex((prev) => (prev + 1 > slides.length - 1 ? 0 : prev + 1));

      if (index === slides.length - 1) setPosition((prev) => (prev += slides.length * 100));

      return;
    }

    setCurrentIndex((prev) => {
      if (prev + 1 > slides.length - 1) return prev;
      return prev + 1;
    });
  };

  //!SwipeSlide
  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!startX || !endX) return;

    const distance = endX - startX;
    if (distance > 10) prevSlide();
    if (distance < -10) nextSlide();

    setStartX(null);
    setEndX(null);
  };

  //!
  //перенос последнего слайда в начало при загрузке страницы
  useEffect(() => {
    if (!slidesElRef?.current?.children?.length) return;

    const slides = slidesElRef.current.children;
    const count = slides.length - 1;
    const slideLength = slides.length;

    if (LOOP && slides) slides[count].style.transform = `translateX(${-slideLength * 100}%)`;
  }, []);

  useEffect(() => {
    if (!slidesElRef?.current?.children?.length) return;

    const slides = slidesElRef.current.children;

    //перенос слайдов в конец и в начало при смене кадра
    if (slides) slides[index].style.transform = `translateX(${position}%)`;

    //Autoplay
    if (AUTOPLAY) {
      const interval = setInterval(() => {
        nextSlide();
      }, INTERVAL_AUTOPLAY);

      return () => clearInterval(interval);
    }
  }, [position, index]);

  useEffect(() => {
    if (!slidesElRef?.current?.children?.length) return;

    const slides = slidesElRef.current.children;

    //disabled button on end and first slide
    if (LOOP) return;

    if (currentIndex === slides.length - 1) {
      setTimeout(() => {
        nextDisable();
      }, TRANSITION);
    }

    if (currentIndex === 0) {
      setTimeout(() => {
        prevDisable();
      }, TRANSITION);
    }
  }, [currentIndex, handleTouchEnd]);

  return (
    <div className={styles.slider}>
      {children && (
        <div className={styles.container}>
          <button ref={prevElRef} className={`${styles.slider__button} ${styles.slider__button__prev}`} onClick={prevSlide}>
            &#10094;
          </button>
          <div
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            ref={slidesElRef}
            className={styles.slider__slides}
            style={{ transform: `translateX(${-currentIndex * 100}%)`, transition: `all ${TRANSITION}ms` }}
          >
            {children}
          </div>
          <button ref={nextElRef} className={`${styles.slider__button} ${styles.slider__button__next}`} onClick={nextSlide}>
            &#10095;
          </button>
        </div>
      )}
    </div>
  );
};

export { Slider, Slide };
