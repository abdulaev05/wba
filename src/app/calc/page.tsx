import ChoosingHelp from '@/components/ChoosingHelp';

import styles from '@/styles/pages/calculator.module.scss';
import inputs from '@/styles/components/ui/inputs.module.scss';

import { windows } from '@/imgs/imgs';

const pageCalc = () => {
  return (
    <main>
      <section className={styles.calc}>
        <div className="container">
          <div className={styles.container}>
            <div className={styles.window}>
              <div className={styles.window__content}>
                <div className={styles.window__canvas}>
                  <img className={styles.window__canvas__window} src={windows.window1_gl.src} alt="" />
                  <div className={styles.window__canvas__bottom}>
                    <span>1 300</span>
                    <span>мм</span>
                  </div>
                  <div className={styles.window__canvas__right}>
                    <span>1 300</span>
                    <span>мм</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.options}>
              <div className={styles.options__content}>
                <div className={styles.options__container}>
                  <div className={styles.options__title}>Тип окна</div>
                  <div className={styles.options__types}>
                    <div className={`${styles.options__type} ${styles.options__type__active}`}>
                      <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 13.5V46.5H42V13.5H18ZM40 44.5H20V15.5H40V44.5Z" fill="currentColor"></path>
                      </svg>
                    </div>
                    <div className={styles.options__type}>
                      <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g>
                          <path
                            d="M15.5996 13.5V46.5H45.5996V13.5H15.5996ZM17.5996 44.5V15.5H29.5996V44.5H17.5996ZM43.5996 44.5H31.5996V15.5H43.5996V44.5Z"
                            fill="currentColor"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <div className={styles.options__type}>
                      <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M53.7002 13.5V11.5H6.7002V48.5H53.7002V13.5ZM8.7002 46.5V13.5H21.7002V46.5H8.7002ZM23.7002 46.5V13.5H36.7002V46.5H23.7002ZM38.7002 46.5V13.5H51.6002V46.5H38.7002Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <div className={styles.options__type}>
                      <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M11.7998 9V51H49.7998V9H11.7998ZM13.7998 49V23H23.7998V49H13.7998ZM25.7998 49V23H35.7998V49H25.7998ZM47.7998 49H37.7998V23H47.7998V49ZM47.7998 21H13.7998V11H47.7998V21Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <div className={styles.options__type}>
                      <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M30.4004 10.5C22.1109 10.5 15.4004 17.2653 15.4004 25.6224V49.5H45.4004V25.6224C45.4004 17.2653 38.6899 10.5 30.4004 10.5ZM39.8741 16.0714L30.953 25.0653V12.1714C34.4267 12.251 37.5846 13.7633 39.8741 16.0714ZM29.3741 12.1714V25.0653L20.6899 16.3102C22.9004 14.002 25.9793 12.4102 29.3741 12.1714ZM19.6635 17.5837L27.6372 25.6224H16.9793C16.9793 22.598 18.0057 19.8122 19.6635 17.5837ZM16.9793 47.9082V27.2143H24.8741V47.9082H16.9793ZM26.453 47.9082V27.2143H34.3478V47.9082H26.453ZM43.8214 47.9082H35.9267V27.2143H43.8214V47.9082ZM32.6109 25.6224L40.9004 17.2653C42.7162 19.5735 43.8214 22.4388 43.8214 25.6224H32.6109Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <div className={styles.options__type}>
                      <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8 7.5H52V39.4H24V52.5H8V7.5ZM10 37.5V50.5H22V37.5H10ZM22 35.5H10V9.5H22V35.5ZM24 37.5H36V9.5H24V37.5ZM38 37.5H50V9.5H38V37.5Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className={styles.options__container}>
                  <div className={styles.options__title}>Створки</div>
                  <div className={styles.options__stvorka}></div>
                </div>
                <div className={styles.options__container}>
                  <div className={styles.options__title}>Параметры окна</div>
                </div>
                <div className={styles.options__container}>
                  <div className={styles.options__title}>Дополнительные опции</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ChoosingHelp />
    </main>
  );
};

export default pageCalc;
