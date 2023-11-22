import { FC, useState } from 'react';
import Link from 'next/link';
import { useAppDispatch } from '@/hooks/redux';
import { toggleBurgerMenu } from '@/store/reducers/burgerMenuSlice';

import Dropdown from '../Dropdown';
import DropArrow from '../Icons/DropArrow';

//?types
import { THeaderNav } from '@/types/typeNavs';

export const NavList: FC<{ navList: THeaderNav }> = ({ navList }) => {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const Open = () => {
    setIsOpen(true);
  };
  const Close = () => {
    setIsOpen(false);
  };

  const CloseBurgerMenu = () => {
    dispatch(toggleBurgerMenu(false));
  };

  if (!!navList.content && !!navList.droplist) {
    return (
      <li className="nav_item" onMouseEnter={Open} onMouseLeave={Close}>
        <p className="nav_item__link">
          {navList.content}
          <DropArrow />
        </p>
        <Dropdown droplist={navList.droplist} isOpen={isOpen} />
      </li>
    );
  }

  if (!!navList.content) {
    return (
      <li className="nav_item" onClick={CloseBurgerMenu}>
        <Link href={`/${navList.href}`} className="nav_item__link">
          {navList.content}
        </Link>
      </li>
    );
  }

  return <></>;
};
