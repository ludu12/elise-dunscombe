import React from 'react';

interface BurgerProps {
  open?: boolean;
  onClick?: () => void;
}

const BurgerMenuButton: React.FC<BurgerProps> = ({ open, onClick }) => {
  return (
    <button
      className={`hamburger hamburger--spin ${open ? 'is-active' : ''}`}
      onClick={onClick}
      type="button"
    >
      <span className="hamburger-box">
        <span className="hamburger-inner" />
      </span>
    </button>
  );
};

export default BurgerMenuButton;
