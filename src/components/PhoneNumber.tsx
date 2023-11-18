import { FC } from 'react';
import { TSimpleBtn } from '@/types/typeButtons';
import Phone from './Icons/Phone';

import styles from '@/styles/components/ui/phone-number.module.scss';

const PhoneNumber: FC<TSimpleBtn> = ({ content }) => {
  return (
    <a href={`tel:${content}`} className={styles.phone_number}>
      <Phone />
      <span>{content}</span>
    </a>
  );
};

export default PhoneNumber;
