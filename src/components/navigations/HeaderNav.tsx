import { FC } from 'react';

import { NavList } from './Nav';

//?types
import { THeaderNav } from '@/types/typeNavs';
//?styles
import styles from '@/styles/components/ui/navigation.module.scss';

const HeaderNav: FC<{ navList: THeaderNav[] }> = ({ navList }) => {
  return (
    <nav className={styles.nav_header}>
      <ul className={styles.nav_header__list}>
        {navList.map((navList, index) => {
          return <NavList key={index} navList={navList} />;
        })}
      </ul>
    </nav>
  );
};

export default HeaderNav;
