import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaMoon, FaGlobe, FaBars, FaXmark } from 'react-icons/fa6';

import { useTheme } from './ThemeContext.jsx';
// import { useAuth } from '../../context/AuthContext'; // To be used later

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  // const { isAuthenticated } = useAuth(); // Mocking for now
  const isAuthenticated = false; 

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setLangDropdownOpen] = useState(false);
  const langDropdownRef = useRef(null);

  const navLinks = [
    { name: t('navbar.home'), path: '/' },
    { name: t('navbar.events'), path: '/events' },
    { name: t('navbar.gallery'), path: '/gallery' },
    { name: t('navbar.about'), path: '/about' },
  ];

  const languages = {
    en: 'English',
    si: 'සිංහල',
    ta: 'தமிழ்',
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLangDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target)) {
        setLangDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [langDropdownRef]);

  const activeLinkStyle = "text-primary font-bold";
  const inactiveLinkStyle = "text-light-text dark:text-dark-text hover:text-primary dark:hover:text-primary";

  return (
    <nav className="bg-light-surface dark:bg-dark-surface shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-primary">
            MediaClub
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-baseline space-x-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => `${isActive ? activeLinkStyle : inactiveLinkStyle} px-3 py-2 rounded-md text-sm font-medium transition-colors`}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Right side icons & buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Dropdown */}
            <div className="relative" ref={langDropdownRef}>
              <button onClick={() => setLangDropdownOpen(!isLangDropdownOpen)} className="p-2 rounded-full text-light-text dark:text-dark-text hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none">
                <FaGlobe size={20} />
              </button>
              <AnimatePresence>
                {isLangDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white dark:bg-dark-surface ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >
                    <div className="py-1">
                      {Object.keys(languages).map((lng) => (
                        <button
                          key={lng}
                          onClick={() => changeLanguage(lng)}
                          className={`${i18n.resolvedLanguage === lng ? 'bg-gray-100 dark:bg-gray-600' : ''} block w-full text-left px-4 py-2 text-sm text-light-text dark:text-dark-text hover:bg-gray-100 dark:hover:bg-gray-600`}
                        >
                          {languages[lng]}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Theme Toggle */}
            <button onClick={toggleTheme} className="p-2 rounded-full text-light-text dark:text-dark-text hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none">
              {theme === 'light' ? <FaMoon size={20} /> : <FaSun size={20} />}
            </button>

            {/* Auth Button */}
            {isAuthenticated ? (
              <Link to="/dashboard" className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-accent transition-colors">
                {t('navbar.dashboard')}
              </Link>
            ) : (
              <Link to="/login" className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-accent transition-colors">
                {t('navbar.login')}
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleTheme} className="p-2 rounded-full text-light-text dark:text-dark-text focus:outline-none mr-2">
              {theme === 'light' ? <FaMoon size={20} /> : <FaSun size={20} />}
            </button>
            <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-light-text dark:text-dark-text focus:outline-none">
              {isMobileMenuOpen ? <FaXmark size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-light-surface dark:bg-dark-surface border-t border-light-border dark:border-dark-border"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) => `${isActive ? activeLinkStyle : inactiveLinkStyle} block px-3 py-2 rounded-md text-base font-medium`}
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="border-t border-light-border dark:border-dark-border my-2 pt-2">
                {isAuthenticated ? (
                  <Link to="/dashboard" onClick={() => setMobileMenuOpen(false)} className="block w-full text-left bg-primary text-white px-3 py-2 rounded-md text-base font-medium hover:bg-accent transition-colors text-center">
                    {t('navbar.dashboard')}
                  </Link>
                ) : (
                  <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="block w-full text-left bg-primary text-white px-3 py-2 rounded-md text-base font-medium hover:bg-accent transition-colors text-center">
                    {t('navbar.login')}
                  </Link>
                )}
              </div>
              <div className="flex justify-center items-center pt-2">
                {Object.keys(languages).map((lng) => (
                  <button key={lng} onClick={() => changeLanguage(lng)} className={`px-3 py-1 text-sm rounded-md mx-1 ${i18n.resolvedLanguage === lng ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-700'}`}>
                    {lng.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;