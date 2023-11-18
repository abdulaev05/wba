import { FC } from 'react';
import { TSimpleBtn } from '@/types/typeButtons';

import Link from 'next/link';
import { useAppDispatch } from '@/hooks/redux';
import { toggleBurgerMenu } from '@/store/reducers/burgerMenuSlice';
import Calc from '../Icons/Calculator';

// styles
import styles from '@/styles/components/ui/buttons.module.scss';

const Calculator: FC<TSimpleBtn> = ({ content }) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(toggleBurgerMenu(false));
  };

  return (
    <Link href="calc" className={styles.btn} onClick={handleClick}>
      <Calc fill="white" />
      <span>{content}</span>
    </Link>
  );
};

export default Calculator;
