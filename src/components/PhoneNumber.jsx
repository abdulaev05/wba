import Phone from './Icons/Phone';

import styles from '@/styles/components/ui/phone-number.module.scss';

const PhoneNumber = (props) => {
  return (
    <a href={`tel:${props.number}`} className={styles.phone_number}>
      <Phone />
      <span>{props.number}</span>
    </a>
  );
};

export default PhoneNumber;
