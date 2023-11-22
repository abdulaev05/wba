import Image from 'next/image';

import styles from '@/styles/components/multi/ourProjects.module.scss';
import { headerSliderImgs } from '@/imgs/imgs';

const OurProjects = () => {
  return (
    <section className={styles.ourProjects}>
      <div className="container">
        <div className="row">
          <div className={styles.container}>
            <h1 className="title">Продукция WBA</h1>
            <div className={styles.gallery}>
              <Image className={styles.item} src={headerSliderImgs.livingRoom} alt="liveingRoom" />
              <Image className={styles.item} src={headerSliderImgs.luxury} alt="luxury" />
              <Image className={styles.item} src={headerSliderImgs.stylish} alt="stylish" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProjects;
