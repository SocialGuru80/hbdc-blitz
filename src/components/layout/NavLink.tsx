import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../utils/cn';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

export const NavLink: React.FC<NavLinkProps> = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={cn(
        'text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200',
        isActive && 'text-primary font-semibold'
      )}
    >
      {children}
    </Link>
  );
};