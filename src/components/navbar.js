import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ style }) => {
  const [nameTitleStyle, setNameTitleStyle] = useState('');
  const [navItemsStyle, setNavItemsStyle] = useState('');
  const [nameFooter, setNameFooter] = useState('');

  const navBar = ['Home', 'Portfolio','CV','Bio','Contact' ];

  const setStyles = () => {
    switch (style) {
      case 'dark':
        setNameTitleStyle('mt-5 ml-5 font-redhat text-white text-5xl');
        setNavItemsStyle('text-2xl cursor-pointer text-slate-400 hover:text-white');
        setNameFooter('mt-5 font-redhat text-xs text-slate-400');
        break;
      // You can add more styles for different cases if needed

      case 'light':
        setNameTitleStyle('mt-5 ml-5 font-redhat black text-5xl');
        setNavItemsStyle('text-2xl cursor-pointer text-slate-600 hover:text-white');
        setNameFooter('mt-5 font-redhat text-xs text-slate-600');

      default:
        setNameTitleStyle('mt-5 ml-5 font-redhat text-black text-5xl');
        setNavItemsStyle('text-2xl cursor-pointer text-gray-600 hover:text-black');
        setNameFooter('mt-5 font-redhat text-xs text-gray-600');
        break;
    }
  };

  useEffect(() => {
    setStyles();
  }, [style]);

  return (
    <div className="w-32 ml-5 font-mono flex flex-col items-center text-center justify-center">
      <div className={nameTitleStyle}>
        JASON <br />
        PHELPS
      </div>

      <div className="font-redhat mt-5">
        {navBar.map((item) => (
          <div key={item} className="mb-3">
            <Link
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className={navItemsStyle}
            >
              {item}
            </Link>
          </div>
        ))}
      </div>

      <div className={nameFooter}>
        © 2024 Jason Phelps
      </div>
    </div>
  );
};

export default NavBar;
