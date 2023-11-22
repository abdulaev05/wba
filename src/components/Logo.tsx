import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from '@/styles/components/ui/logo.module.scss';

import logo from '@/imgs/logo.svg';

type TLogo = {
  width: string;
  height: string;
};

const Logo: FC<TLogo> = ({ width, height }) => {
  return (
    <Link href="/" className={styles.logo} style={{ width: `${width}px`, height: `${height}px` }}>
      <Image src={logo} alt="logo" />
    </Link>
  );
};

export default Logo;
