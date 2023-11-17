'use client';

import StoreProvider from '@/store/storeProvider';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <div className="wrapper">
        <Header />
        {children}
        <Footer />
      </div>
    </StoreProvider>
  );
};

export default Wrapper;
