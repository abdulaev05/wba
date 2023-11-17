import { useAppDispatch } from '@/hooks/redux';
import { toggleBurgerMenu } from '@/store/reducers/burgerMenuSlice';
import Phone from '../Icons/Phone';
// styles
import styles from '../../styles/components/ui/buttons.module.scss';

const Order = ({ content }) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(toggleBurgerMenu(false));
  };

  return (
    <button className={styles.btn} onClick={handleClick}>
      <Phone color="white" />
      <span>{content}</span>
    </button>
  );
};

export default Order;
