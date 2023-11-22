import { FC } from 'react';

//?styles
import styles from '@/styles/components/ui/navigation.module.scss';

//?types
import { THeaderNav } from '@/types/typeNavs';

//?reducers
import { NavList } from './Nav';

const BurgerMenuNav: FC<{ navList: THeaderNav[] }> = ({ navList }) => {
  return (
    <nav className={styles.nav_burgerMenu}>
      <ul className={styles.nav_burgerMenu__list}>
        {navList.map((element, index) => {
          return <NavList key={index} navList={element} />;
        })}
      </ul>
    </nav>
  );
};

export default BurgerMenuNav;
