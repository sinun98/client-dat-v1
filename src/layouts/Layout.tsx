import React , { ReactNode }from 'react';
import Header from './Header';
import Footer from './Footer';

import '../styles/App.scss';

interface LayoutProps {
    children: ReactNode;  
  }
  
function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Header />
      <main className="main">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;