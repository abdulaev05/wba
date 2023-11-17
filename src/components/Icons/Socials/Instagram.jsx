import { useState } from 'react';

// styles
import styles from '@/styles/components/ui/icons.module.scss';

const Instagram = ({ size }) => {
  return (
    <a href="/" className={styles.icon} style={{ width: size, height: size }} target="_blank">
      <div className={`${styles.wrapper_round} ${styles.instagram}`}>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 551.034 551.034">
          <linearGradient
            id="SVGID_1_"
            gradientUnits="userSpaceOnUse"
            x1="275.517"
            y1="4.57"
            x2="275.517"
            y2="549.72"
            gradientTransform="matrix(1 0 0 -1 0 554)"
          >
            <stop offset="0" style={{ stopColor: '#FFC107' }} />
            <stop offset="0.507" style={{ stopColor: '#F44336' }} />
            <stop offset="0.99" style={{ stopColor: '#9C27B0' }} />
          </linearGradient>
          <path d="M386.878,0H164.156C73.64,0,0,73.64,0,164.156v222.722 c0,90.516,73.64,164.156,164.156,164.156h222.722c90.516,0,164.156-73.64,164.156-164.156V164.156 C551.033,73.64,477.393,0,386.878,0z M495.6,386.878c0,60.045-48.677,108.722-108.722,108.722H164.156 c-60.045,0-108.722-48.677-108.722-108.722V164.156c0-60.046,48.677-108.722,108.722-108.722h222.722 c60.045,0,108.722,48.676,108.722,108.722L495.6,386.878L495.6,386.878z" />
          <path d="M275.517,133C196.933,133,133,196.933,133,275.516s63.933,142.517,142.517,142.517 S418.034,354.1,418.034,275.516S354.101,133,275.517,133z M275.517,362.6c-48.095,0-87.083-38.988-87.083-87.083 s38.989-87.083,87.083-87.083c48.095,0,87.083,38.988,87.083,87.083C362.6,323.611,323.611,362.6,275.517,362.6z" />
          <circle cx="418.31" cy="134.07" r="34.15" />
        </svg>
      </div>
    </a>
  );
};

export default Instagram;
