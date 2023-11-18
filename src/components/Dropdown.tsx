import Link from 'next/link';
import { FC, useState } from 'react';
import { useAppDispatch } from '@/hooks/redux';
import { toggleBurgerMenu } from '@/store/reducers/burgerMenuSlice';

import DropArrow from './Icons/DropArrow';
//types
import { THeaderNav } from '@/types/typeNavs';
//styles
import styles from '@/styles/components/ui/dropdown.module.scss';

// type TElementProps = {
//   element: THeaderNav[];
// };

const Dropdown: FC<{ element: THeaderNav }> = ({ element }) => {
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

  if (!!element.content && !!element.droplist) {
    return (
      <li className={styles.dropdown__item} onMouseEnter={Open} onMouseLeave={Close}>
        <p className={styles.dropdown__link}>
          {element.content}
          <DropArrow />
        </p>
        <ul className={`${styles.dropdown} ${isOpen ? styles.open : styles.closed}`}>
          {element.droplist.map((el, id) => {
            if (!el.content) return;
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
                  {el.content}
                </Link>
              </li>
            );
          })}
        </ul>
      </li>
    );
  }

  if (!!element.content) {
    return (
      <li className={styles.dropdown__item} onMouseEnter={Open} onMouseLeave={Close} onClick={CloseBurgerMenu}>
        <Link href={`/${element.href}`} className={styles.dropdown__link}>
          {element.content}
        </Link>
      </li>
    );
  }

  return <></>;
};

export default Dropdown;
