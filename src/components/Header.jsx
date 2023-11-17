'use client';

import { useLayoutEffect, useRef } from 'react';
import useMediaQueries from '@/hooks/useMediaQueries';

import styles from '@/styles/components/multi/header.module.scss';

//HeaderTop
import PhoneNumber from './PhoneNumber';
import Socials from './Socials';

//HeaderMiddle
import Logo from './Logo';

//HeaderBottom
import Navigation from './Navigation';
import Basket from './Icons/Basket';
import Search from './Icons/Search';
import Order from './buttons/Order';
import Callback from './buttons/Callback';
import Calculator from './buttons/Calculator';

//mobile header
import BurgerMenu from './BurgerMenu';

const Header = () => {
  const { md } = useMediaQueries();
  const headerRef = useRef(null);

  const list = [
    {
      href: 'window',
      listName: 'Окна',
      droplist: [
        { href: 'Простое окно', listName: 'Простое окно' },
        { href: 'Окно с защитой от шума', listName: 'Окно с защитой от шума' },
        { href: 'Энергоэффективное окно', listName: 'Энергоэффективное окно' },
        { href: 'Окно с солнцезащитой', listName: 'Окно с солнцезащитой' },
      ],
    },
    {
      href: 'facades',
      listName: 'Фасады',
      droplist: [
        { href: '12334234', listName: '12334234' },
        { href: 'sdf12314134sfsd', listName: 'sdf12314134sfsd' },
      ],
    },
    {
      href: 'door',
      listName: 'Двери',
      droplist: [
        { href: 'Входная дверь', listName: 'Входная дверь' },
        { href: 'Межкомнатная (офисная) дверь', listName: 'Межкомнатная (офисная) дверь' },
        { href: 'Балконные двери', listName: 'Балконные двери' },
      ],
    },
    { href: 'client-help', listName: 'Помощь покупателю' },
    { href: 'about', listName: 'О компании' },
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
              <PhoneNumber number="+7-988-655-91-00" />
              <Socials color="rgb(197, 199, 205)" />
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
              <Navigation listItems={list} />
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
            <Logo width="100" height="31.25" />
            <Socials />
            <BurgerMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
