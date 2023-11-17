import ChoosingHelp from '@/components/ChoosingHelp';

import styles from '@/styles/pages/calculator.module.scss';

const pageCalc = () => {
  return (
    <main>
      <section className={styles.calc}>
        <div className="container">
          <div className={styles.container}>
            <div className={styles.window}>
              <div className={styles.window__content}></div>
            </div>
            <div className={styles.options}>
              <div className="options__content">
                <div className={styles.options__material}>
                  <div className="">fssfe</div>
                  <div className="">sefsef</div>
                  <div className="">32424</div>
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
