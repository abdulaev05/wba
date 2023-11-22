'use client';

//types
import { TSlide, TSlider } from '@/types/typeSliders';
//styles
import styles from '@/styles/components/ui/slider.module.scss';

import { useState, useEffect, useRef, FC, Children } from 'react';

const Slide: FC<TSlide> = ({ children }) => {
  return <div className={`${styles.slider__slide}`}>{children}</div>;
};

const Slider: FC<TSlider> = ({ children, options = { transition: 500, loop: false, autoplay: false } }) => {
  const { transition: TRANSITION, loop: LOOP, autoplay: AUTOPLAY } = options;
  const INTERVAL_AUTOPLAY = TRANSITION + 2500;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [index, setIndex] = useState(0);
  const [position, setPosition] = useState(0);
  const [paginationFirst, setPaginationFirst] = useState(1);

  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);

  const slidesElRef = useRef<HTMLDivElement>(null!);
  const prevElRef = useRef<HTMLDivElement>(null!);
  const nextElRef = useRef<HTMLDivElement>(null!);

  const childrenLength = Children.count(children);

  ////////////////////////
  const prevDisable = () => prevElRef.current.classList.add(styles.button__disabled);
  const nextDisable = () => nextElRef.current.classList.add(styles.button__disabled);
  const buttonsUndisable = () => {
    setTimeout(() => {
      prevElRef.current.classList.remove(styles.button__disabled);
      nextElRef.current.classList.remove(styles.button__disabled);
    }, TRANSITION);
  };
  //////////////////

  const prevSlide = () => {
    if (!slidesElRef.current) return;
    if (prevElRef.current.classList.contains(styles.button__disabled)) return;
    const slides = slidesElRef.current.children || [];

    prevDisable();
    buttonsUndisable();
    setPaginationFirst((prev) => {
      if (prev - 1 < 1) return slides.length;
      return prev - 1;
    });

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
    if (nextElRef.current.classList.contains(styles.button__disabled)) return;

    const slides = slidesElRef.current.children;

    nextDisable();
    buttonsUndisable();
    setPaginationFirst((prev) => {
      if (prev + 1 > slides.length) return 1;
      return prev + 1;
    });

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
  const handleTouchStart: React.TouchEventHandler<HTMLDivElement> | undefined = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove: React.TouchEventHandler<HTMLDivElement> | undefined = (e) => {
    setEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!startX || !endX) return;

    const distance = endX - startX;
    if (distance > 10) prevSlide();
    if (distance < -10) nextSlide();

    setStartX(0);
    setEndX(0);
  };

  //!

  //?перенос последнего слайда в начало при загрузке страницы
  useEffect(() => {
    if (!slidesElRef?.current?.children?.length) return;

    const slides: any = slidesElRef.current.children;
    const count = slides.length - 1;
    const slideLength = slides.length;

    if (LOOP && slides) slides[count].style.transform = `translateX(${-slideLength * 100}%)`;
  }, []);

  useEffect(() => {
    if (!slidesElRef?.current?.children?.length) return;

    const slides: any = slidesElRef.current.children;

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

  //?disable buttons prev and next
  useEffect(() => {
    if (!slidesElRef?.current?.children?.length) return;

    const slides: any = slidesElRef.current.children;

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
      <div className={styles.wrapper}>
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
        <div className={styles.slider__buttons}>
          <div ref={prevElRef} className={`${styles.slider__button} ${styles.slider__button__prev}`} onClick={prevSlide}></div>
          <div className={styles.slider__pagination}>
            <span>{paginationFirst}</span> / <span>{childrenLength}</span>
          </div>
          <div ref={nextElRef} className={`${styles.slider__button} ${styles.slider__button__next}`} onClick={nextSlide}></div>
        </div>
      </div>
    </div>
  );
};

export { Slider, Slide };
