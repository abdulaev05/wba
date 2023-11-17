import Dropdown from './Dropdown';

//styles
import styles from '@/styles/components/ui/navigation.module.scss';

const Navigation = ({ listItems }) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        {!!listItems &&
          listItems.map((element, index) => {
            return <Dropdown element={element} key={index} />;
          })}
      </ul>
    </nav>
  );
};

export default Navigation;
