import Link from 'next/link';
import { useState } from 'react';
import { useAppDispatch } from '@/hooks/redux';
import { toggleBurgerMenu } from '@/store/reducers/burgerMenuSlice';

import DropArrow from './Icons/DropArrow';

import styles from '@/styles/components/ui/dropdown.module.scss';

const Dropdown = ({ element }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();

  const Open = () => {
    setIsOpen(true);
  };

  const Close = () => {
    setIsOpen(false);
  };

  const CloseBurgerMenu = () => {
    dispatch(toggleBurgerMenu(false));
  };

  //return

  if (!!element.listName && !!element.droplist) {
    return (
      <li className={styles.dropdown__item} onMouseEnter={Open} onMouseLeave={Close}>
        <p className={styles.dropdown__link}>
          {element.listName}
          <DropArrow />
        </p>
        <ul className={`${styles.dropdown} ${isOpen ? styles.open : styles.closed}`}>
          {element.droplist.map((el, id) => {
            if (!el.listName) return;
            return (
              <li
                className={styles.dropdown__item}
                key={id}
                onClick={() => {
                  Close();
                  CloseBurgerMenu();
                }}
              >
                <Link href={`/${el.href}`} className={styles.dropdown__link}>
                  {el.listName}
                </Link>
              </li>
            );
          })}
        </ul>
      </li>
    );
  }

  if (!!element.listName) {
    return (
      <li className={styles.dropdown__item} onMouseEnter={Open} onMouseLeave={Close} onClick={CloseBurgerMenu}>
        <Link href={`/${element.href}`} className={styles.dropdown__link}>
          {element.listName}
        </Link>
      </li>
    );
  }

  return <></>;
};

export default Dropdown;
