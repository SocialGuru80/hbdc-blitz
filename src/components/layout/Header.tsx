import React from 'react';
import { Link } from 'react-router-dom';
import { Eye } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { NavLink } from './NavLink';
import { LanguageSwitcher } from './LanguageSwitcher';

export const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="fixed top-0 w-full bg-light/80 backdrop-blur-md border-b border-surface z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Eye className="h-8 w-8 text-secondary" />
            <span className="text-xl font-semibold text-primary">Horus BDC</span>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/">{t('nav.home')}</NavLink>
            <NavLink to="/services">{t('nav.services')}</NavLink>
            <NavLink to="/about">{t('nav.about')}</NavLink>
            <NavLink to="/contact">{t('nav.contact')}</NavLink>
          </nav>
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <Link to="/contact" className="btn btn-primary">
              {t('common.getStarted')}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};