import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { toggleBurgerMenu } from '@/store/reducers/burgerMenuSlice';
//types
import { THeaderNav } from '@/types/typeNavs';
//styles
import styles from '@/styles/components/ui/burger_menu.module.scss';

import Burger from '@/components/Icons/Burger';
import Navigation from './Navigation';
import Order from './buttons/Order';
import Callback from './buttons/Callback';
import Calculator from './buttons/Calculator';

//!!! ИЗМЕНИТЬ СТИЛИ ЧТОБЫ НЕБЫЛО OVERFLOWS

const BurgerMenu: FC<{ navList: THeaderNav[] }> = ({ navList }) => {
  const dispatch = useAppDispatch();
  const burgerIsActive = useAppSelector((state) => state.bm.isActive);

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
            <Navigation navList={navList} />
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
