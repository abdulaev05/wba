import { useState } from 'react';

// styles
import styles from '@/styles/components/ui/icons.module.scss';

const Search = (props) => {
  const size = props.size;
  const hover = props.hover ? props.hover : props.color;
  const [color, setColor] = useState(props.color);

  return (
    <div className={styles.icon} style={{ width: size, height: size }}>
      <svg
        className={styles.transition}
        onMouseEnter={() => setColor(hover)}
        onMouseLeave={() => setColor(props.color)}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        style={{ fill: color }}
      >
        <path d="M15.7 14.3l-4.2-4.2c-0.2-0.2-0.5-0.3-0.8-0.3 0.8-1 1.3-2.4 1.3-3.8 0-3.3-2.7-6-6-6s-6 2.7-6 6 2.7 6 6 6c1.4 0 2.8-0.5 3.8-1.4 0 0.3 0 0.6 0.3 0.8l4.2 4.2c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.3 0.4-0.9 0-1.3zM6 10.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"></path>
      </svg>
    </div>
  );
};

export default Search;
