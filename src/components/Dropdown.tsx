import { FC } from 'react';
import Link from 'next/link';
import { useAppDispatch } from '@/hooks/redux';
import { toggleBurgerMenu } from '@/store/reducers/burgerMenuSlice';

//?styles
import styles from '@/styles/components/ui/dropdown.module.scss';

//?types
import { droplistType } from '@/types/typeNavs';

const Dropdown: FC<{ droplist?: droplistType[]; isOpen: boolean }> = ({ droplist = [], isOpen }) => {
  const dispatch = useAppDispatch();

  const CloseBurgerMenu = () => {
    dispatch(toggleBurgerMenu(false));
  };

  return (
    <ul className={`${styles.dropdown} ${isOpen ? styles.open : ''}`}>
      {droplist.map((el, id) => {
        if (!el.content) return;
        return (
          <li className="nav_item" key={id} onClick={CloseBurgerMenu}>
            <Link href={`/${el.href}`} className="nav_item__link">
              {el.content}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Dropdown;
