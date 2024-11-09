import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, Twitter, Linkedin, Facebook } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-center space-x-2 mb-8">
          <Eye className="h-8 w-8 text-secondary" />
          <span className="text-xl font-semibold text-primary">Horus BDC</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Solutions</h3>
            <ul className="mt-4 space-y-4">
              <li><Link to="/services" className="text-base text-gray-500 hover:text-gray-900">Analytics</Link></li>
              <li><Link to="/services" className="text-base text-gray-500 hover:text-gray-900">Commerce</Link></li>
              <li><Link to="/services" className="text-base text-gray-500 hover:text-gray-900">Insights</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Support</h3>
            <ul className="mt-4 space-y-4">
              <li><Link to="/contact" className="text-base text-gray-500 hover:text-gray-900">Documentation</Link></li>
              <li><Link to="/contact" className="text-base text-gray-500 hover:text-gray-900">Guides</Link></li>
              <li><Link to="/contact" className="text-base text-gray-500 hover:text-gray-900">API Status</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              <li><Link to="/about" className="text-base text-gray-500 hover:text-gray-900">About</Link></li>
              <li><Link to="/about" className="text-base text-gray-500 hover:text-gray-900">Blog</Link></li>
              <li><Link to="/about" className="text-base text-gray-500 hover:text-gray-900">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-4">
              <li><Link to="/about" className="text-base text-gray-500 hover:text-gray-900">Privacy</Link></li>
              <li><Link to="/about" className="text-base text-gray-500 hover:text-gray-900">Terms</Link></li>
              <li><Link to="/contact" className="text-base text-gray-500 hover:text-gray-900">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <a href="https://twitter.com/horusbdc" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com/company/horusbdc" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://facebook.com/horusbdc" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Facebook</span>
              <Facebook className="h-6 w-6" />
            </a>
          </div>
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            &copy; {new Date().getFullYear()} Horus BDC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};