import React, { useState, useEffect } from 'react';
import { Button, Menu, Dropdown, Space, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, DollarOutlined, ReadOutlined, ProfileOutlined, MenuOutlined } from '@ant-design/icons';

import icon from '../images/cryptocurrency.png';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <div className="maniax-container">
                <svg viewBox="0 10 410 100" className="maniax-svg">
            <symbol id="s-text">
              <text textAnchor="middle" x="50%" y="80%">CryptoManiax</text>
            </symbol>

            <g className = "g-ants">
              <use xlinkHref="#s-text" class="text-copy"></use>
              <use xlinkHref="#s-text" class="text-copy"></use>
              <use xlinkHref="#s-text" class="text-copy"></use>
              <use xlinkHref="#s-text" class="text-copy"></use>
              <use xlinkHref="#s-text" class="text-copy"></use>
            </g>
          </svg>
        </div>
        
      <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}  ><MenuOutlined /></Button>
      </div>
      {activeMenu && (
      <Menu>
        <Menu.Item icon={<HomeOutlined />}>
          <Link to="/cryptomaniax-app">Home</Link>
        </Menu.Item>
        <Menu.Item icon={<DollarOutlined />}>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item icon={<ProfileOutlined />}>
          <Link to="/nfts">NFTs</Link>
        </Menu.Item>
        <Menu.Item icon={<ReadOutlined />}>
          <Link to="/news">News</Link>
        </Menu.Item>
      </Menu>
      )}
    </div>
  );
};

export default Navbar;