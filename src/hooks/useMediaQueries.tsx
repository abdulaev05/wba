'use client';

import useMediaQuery from './useMediaQuery';

const useMediaQueries = () => {
  const xxl = useMediaQuery('(min-width: 1320px)');
  const xl = useMediaQuery('(min-width: 1200px)');
  const lg = useMediaQuery('(min-width: 992px)');
  const md = useMediaQuery('(min-width: 768px)');
  const sm = useMediaQuery('(min-width: 576px)');

  return { xxl, xl, lg, md, sm };
};

export default useMediaQueries;
