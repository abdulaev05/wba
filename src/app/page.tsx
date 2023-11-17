'use client';

import OurProjects from '@/components/OurProjects';
import ChoosingHelp from '@/components/ChoosingHelp';
import FAQ from '@/components/FAQ';
import { Slider, Slide } from '@/components/Slider';

// Import styles
import styles from '@/styles/pages/home.module.scss';

type TypeSlides = {
  id: number;
  content: string;
};

type TypeSliderOptions = {
  transition: number;
  loop: boolean;
  autoplay: boolean;
};

const Home = () => {
  const sliderOptions: TypeSliderOptions = {
    transition: 300,
    loop: true,
    autoplay: false,
  };

  const slides: TypeSlides[] = [
    { id: 1, content: '123' },
    { id: 2, content: 'dsv' },
    { id: 3, content: 'vsv' },
    { id: 4, content: '546bd' },
    { id: 5, content: '546bdsef342' },
    { id: 6, content: '546bd3245trfdvjff' },
    { id: 7, content: '123scv' },
  ];

  return (
    <main className={styles.home}>
      <div style={{ width: '100%', height: '500px' }}>
        <div className="container">
          <Slider options={sliderOptions}>
            {slides.map((el) => {
              return <Slide key={el.id}>{el.content}</Slide>;
            })}
          </Slider>
        </div>
      </div>
      <OurProjects />
      <ChoosingHelp />
      <FAQ />
    </main>
  );
};

export default Home;
