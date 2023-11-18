import { FC } from 'react';
import Dropdown from './Dropdown';

//types
import { THeaderNav } from '@/types/typeNavs';
//styles
import styles from '@/styles/components/ui/navigation.module.scss';

const Navigation: FC<{ navList: THeaderNav[] }> = ({ navList }) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        {!!navList &&
          navList.map((element, index) => {
            return <Dropdown element={element} key={index} />;
          })}
      </ul>
    </nav>
  );
};

export default Navigation;
