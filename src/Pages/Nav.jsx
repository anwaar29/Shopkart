import React, { useState } from 'react';
import './Style.css';

const Navbar = ({ items }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isMobileMenuOpen ? 'open' : ''}`}>
      <div className={`navbar-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`}>{item.name}</a>
              {item.child && (
                <ul>
                  {item.child.map((subItem) => (
                    <li key={subItem.id}>
                      <a href={`#${subItem.id}`}>{subItem.name}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-toggle" onClick={toggleMobileMenu}>
        <span>&#9776;</span>
      </div>
    </nav>
  );
};

const Nav = () => {
  const navbar = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    {
      name: 'Our Products',
      id: 'product',
      child: [
        { name: 'Product 1', id: 'p1' },
        { name: 'Product 2', id: 'p2' },
        { name: 'Product 3', id: 'p3' },
        { name: 'Product 4', id: 'p4' },
      ],
    },
    { name: 'Contact Us', id: 'contact' },
  ];

  return (
    <div className="App">
      <Navbar items={navbar} />
      {/* Your content goes here */}
    </div>
  );
};

export default Nav;
