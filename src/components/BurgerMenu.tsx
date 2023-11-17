import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { toggleBurgerMenu } from '@/store/reducers/burgerMenuSlice';

import styles from '@/styles/components/ui/burger_menu.module.scss';

import Burger from '@/components/Icons/Burger';
import Navigation from './Navigation';
import Order from './buttons/Order';
import Callback from './buttons/Callback';
import Calculator from './buttons/Calculator';

//!!! ИЗМЕНИТЬ СТИЛИ ЧТОБЫ НЕБЫЛО OVERFLOWS

type droplist = { href: string; listName: string } | null;

type list = {
  href: string;
  listName: string;
  droplist: droplist[];
};

const BurgerMenu = () => {
  const dispatch = useAppDispatch();
  const burgerIsActive = useAppSelector((state) => state.bm.isActive);

  const list: list[] = [
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

  const handleClickBackground = () => {
    dispatch(toggleBurgerMenu(false));
  };

  useEffect(() => {
    burgerIsActive ? (document.body.style.overflowY = 'hidden') : (document.body.style.overflowY = 'auto');
  }, [burgerIsActive]);

  return (
    <>
      <div className={`${styles.burger_menu} ${burgerIsActive ? styles.active : ''}`}>
        <div className={`${styles.bar1}`} onClick={handleClickBackground}></div>
        <div className={`${styles.bar2}`}>
          <div className={styles.bar2__container}>
            <Navigation listItems={list} />
            <div className="buttons" style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <Order content="Заказать звонок" />
              <Callback content="Записать на замер" />
              <Calculator content="Калькулятор" />
            </div>
          </div>
        </div>
      </div>
      <Burger />
    </>
  );
};

export default BurgerMenu;
