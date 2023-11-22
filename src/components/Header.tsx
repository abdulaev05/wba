'use client';

import { useLayoutEffect, useRef } from 'react';
import useMediaQueries from '@/hooks/useMediaQueries';

//types
import { THeaderNav } from '@/types/typeNavs';

import styles from '@/styles/components/multi/header.module.scss';

//HeaderTop
import PhoneNumber from './PhoneNumber';
import Socials from './Socials';

//HeaderMiddle
import Logo from './Logo';

//HeaderBottom
import Navigation from './navigations/HeaderNav';
import Basket from './Icons/Basket';
import Search from './Icons/Search';
import Order from './buttons/Order';
import Callback from './buttons/Callback';
import Calculator from './buttons/Calculator';

//mobile header
import BurgerMenu from './BurgerMenu';

const Header = () => {
  const { md } = useMediaQueries();
  const headerRef = useRef<HTMLHeadingElement>(null!);

  const navList: THeaderNav[] = [
    {
      href: 'window',
      content: 'Окна',
      droplist: [
        { href: 'Простое окно', content: 'Простое окно' },
        { href: 'Окно с защитой от шума', content: 'Окно с защитой от шума' },
        { href: 'Энергоэффективное окно', content: 'Энергоэффективное окно' },
        { href: 'Окно с солнцезащитой', content: 'Окно с солнцезащитой' },
      ],
    },
    {
      href: 'facades',
      content: 'Фасады',
      droplist: [
        { href: '12334234', content: '12334234' },
        { href: 'sdf12314134sfsd', content: 'sdf12314134sfsd' },
      ],
    },
    {
      href: 'door',
      content: 'Двери',
      droplist: [
        { href: 'Входная дверь', content: 'Входная дверь' },
        { href: 'Межкомнатная (офисная) дверь', content: 'Межкомнатная (офисная) дверь' },
        { href: 'Балконные двери', content: 'Балконные двери' },
      ],
    },
    { href: 'client-help', content: 'Помощь покупателю' },
    { href: 'about', content: 'О компании' },
  ];

  useLayoutEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0 && headerRef?.current) headerRef.current.style.position = 'sticky';
    });
  }, []);

  ///////////////////////

  if (md) {
    return (
      <header className={styles.header}>
        <div className={styles.top}>
          <div className="container">
            <div className="row" style={{ justifyContent: 'space-between' }}>
              <PhoneNumber content="+7-988-655-91-00" />
              <Socials />
            </div>
          </div>
        </div>
        <div className={styles.middle}>
          <div className="container">
            <div className="row" style={{ justifyContent: 'space-between' }}>
              <Logo width="161" height="50" />
              <div className="buttons" style={{ display: 'flex', flexDirection: 'row', gap: '5px' }}>
                <Order content="Заказать звонок" />
                <Callback content="Записать на замер" />
                <Calculator content="Калькулятор" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className="container">
            <div className="row" style={{ justifyContent: 'space-between' }}>
              <Navigation navList={navList} />
              <div className={styles.bottom__shopBarIcons}>
                <Search hover="rgb(51, 108, 233)" />
                <Basket hover="rgb(51, 108, 233)" />
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header ref={headerRef} className={styles.mobile_header}>
      <div className="container">
        <div className="row">
          <div className={styles.mobile_header__container}>
            <Logo width="80" height="25" />
            <BurgerMenu navList={navList} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
