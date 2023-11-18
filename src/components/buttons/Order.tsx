import { FC } from 'react';
import { TSimpleBtn } from '@/types/typeButtons';

import { useAppDispatch } from '@/hooks/redux';
import { toggleBurgerMenu } from '@/store/reducers/burgerMenuSlice';
import Phone from '../Icons/Phone';
// styles
import styles from '../../styles/components/ui/buttons.module.scss';

const Order: FC<TSimpleBtn> = ({ content }) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(toggleBurgerMenu(false));
  };

  return (
    <button className={styles.btn} onClick={handleClick}>
      <Phone fill="white" />
      <span>{content}</span>
    </button>
  );
};

export default Order;
