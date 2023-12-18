import choosingHelp from '@/styles/components/multi/choosing-help.module.scss';
import inputs from '@/styles/components/ui/inputs.module.scss';
import btn from '@/styles/components/ui/buttons.module.scss';

const ChoosingHelp = () => {
  return (
    <section className={choosingHelp.choosing_help}>
      <div className="container">
        <form method="POST" className={choosingHelp.container}>
          <div className={choosingHelp.text}>
            <h3 className={choosingHelp.text__title}>Поможем с выбором</h3>
            <p className={choosingHelp.text__subtitle}>
              Заполните форму и наши эксперты бесплатно помогут вам подобрать подходящее окно под ваши параметры.
            </p>
          </div>
          <div className={choosingHelp.form}>
            <input type="text" className={inputs.square_input} name="input-city" placeholder="Ваш город" required />
            <input type="text" className={inputs.square_input} name="input-username" placeholder="Ваше имя" required />
            <input type="number" className={inputs.square_input} name="input-number" placeholder="Телефон" required />
            <label className={choosingHelp.privacy_policy}>
              <div className={inputs.check_anim}>
                <input id="cbtest-19" type="checkbox" />
                <label className={inputs.check_box} htmlFor="cbtest-19"></label>
              </div>
              {/* <input type="checkbox" name="checkbox" id="" className={inputs.checkbox} /> */}
              <div className={choosingHelp.privacy_policy__text}>
                Cогласен с{' '}
                <a className={choosingHelp.link} href="/reglament" target="_blank">
                  Политикой конфиденциальности
                </a>{' '}
                и{' '}
                <a className={choosingHelp.link} href="/agreement" target="_blank">
                  Условиями сайта
                </a>
              </div>
            </label>
            <button type="submit" className={btn.square_btn}>
              Оставить заявку на подбор
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ChoosingHelp;
