import Link from 'next/link';
import Image from 'next/image';

import styles from '@/styles/components/ui/logo.module.scss';

import imgs from '@/imgs/imgs';

const Logo = ({ width, height }) => {
  return (
    <Link href="/" className={styles.logo} style={{ width: `${width}px`, height: `${height}px` }}>
      <Image src={imgs.logo} alt="logo" />
    </Link>
  );
};

export default Logo;
