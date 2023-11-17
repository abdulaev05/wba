import { useAppDispatch } from '@/hooks/redux';
import { toggleBurgerMenu } from '@/store/reducers/burgerMenuSlice';
import Ruler from '../Icons/Ruler';
// styles
import styles from '../../styles/components/ui/buttons.module.scss';

const Callback = ({ content }) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(toggleBurgerMenu(false));
  };

  return (
    <button className={styles.btn} onClick={handleClick}>
      <Ruler color="white" />
      <span>{content}</span>
    </button>
  );
};

export default Callback;
