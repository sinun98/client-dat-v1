import React from 'react';
import { Menubar } from 'primereact/menubar';
import '../styles/App.scss';

function Header() {
  const items = [
    {
      label: 'DAT-Client',
      disabled: true,
      
    },
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      url: '/evaluation',
      
    },
  ];

  return (
    <header>
      <Menubar model={items} />
    </header>
  );
}

export default Header;
