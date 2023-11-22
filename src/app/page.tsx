'use client';
import { SimpleSlider } from '@/components/sliders/SimpleSlider';

import { Slider, Slide } from '@/components/sliders/Slider';
import OurProjects from '@/components/OurProjects';
import ChoosingHelp from '@/components/ChoosingHelp';
import FAQ from '@/components/FAQ';

//?styles
import styles from '@/styles/pages/home.module.scss';

//?types
import { TSlides, TSliderOptions } from '@/types/typeSliders';

//?imgs
import imgs from '@/imgs/imgs';

const Home = () => {
  const sliderOptions: TSliderOptions = {
    transition: 500,
    loop: true,
    autoplay: false,
  };

  const slides: TSlides[] = [
    { id: 1, content: '12sefsefsefsefsef' },
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
          <SimpleSlider options={sliderOptions}>
            {slides.map((elem, id) => {
              return <Slide key={id}>{elem.content}</Slide>;
            })}
          </SimpleSlider>
        </div>
      </div>
      <OurProjects />
      <ChoosingHelp />
      <FAQ />
    </main>
  );
};

export default Home;
