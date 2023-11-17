// styles
import styles from '@/styles/components/ui/icons.module.scss';

const DropArrow = () => {
  return (
    <span className={styles.drop_arrow}>
      <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.72846 9.21967C6.03307 8.92678 6.52693 8.92678 6.83154 9.21967L12 14.1893L17.1685 9.21967C17.4731 8.92678 17.9669 8.92678 18.2715 9.21967C18.5762 9.51256 18.5762 9.98744 18.2715 10.2803L12.5515 15.7803C12.2469 16.0732 11.7531 16.0732 11.4485 15.7803L5.72846 10.2803C5.42385 9.98744 5.42385 9.51256 5.72846 9.21967Z"></path>
      </svg>
    </span>
  );
};

export default DropArrow;
