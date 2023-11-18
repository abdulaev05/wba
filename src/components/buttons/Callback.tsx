import { FC } from 'react';
import { TSimpleBtn } from '@/types/typeButtons';

import { useAppDispatch } from '@/hooks/redux';
import { toggleBurgerMenu } from '@/store/reducers/burgerMenuSlice';
import Ruler from '../Icons/Ruler';
// styles
import styles from '../../styles/components/ui/buttons.module.scss';

const Callback: FC<TSimpleBtn> = ({ content }) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(toggleBurgerMenu(false));
  };

  return (
    <button className={styles.btn} onClick={handleClick}>
      <Ruler fill="white" />
      <span>{content}</span>
    </button>
  );
};

export default Callback;
