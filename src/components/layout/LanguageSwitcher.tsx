import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';
import { Button } from '../ui/Button';
import { Modal } from '../ui/Modal';

interface Language {
  code: string;
  name: string;
  flag: string;
  nativeName: string;
  countryCode: string;
}

const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇬🇧', nativeName: 'English', countryCode: 'GB' },
  { code: 'de', name: 'German', flag: '🇩🇪', nativeName: 'Deutsch', countryCode: 'DE' },
  { code: 'tr', name: 'Turkish', flag: '🇹🇷', nativeName: 'Türkçe', countryCode: 'TR' },
  { code: 'es', name: 'Spanish', flag: '🇪🇸', nativeName: 'Español', countryCode: 'ES' },
  { code: 'fr', name: 'French', flag: '🇫🇷', nativeName: 'Français', countryCode: 'FR' },
  { code: 'it', name: 'Italian', flag: '🇮🇹', nativeName: 'Italiano', countryCode: 'IT' },
  { code: 'nl', name: 'Dutch', flag: '🇳🇱', nativeName: 'Nederlands', countryCode: 'NL' },
  { code: 'ru', name: 'Russian', flag: '🇷🇺', nativeName: 'Русский', countryCode: 'RU' },
  { code: 'ja', name: 'Japanese', flag: '🇯🇵', nativeName: '日本語', countryCode: 'JP' },
  { code: 'hi', name: 'Hindi', flag: '🇮🇳', nativeName: 'हिन्दी', countryCode: 'IN' },
  { code: 'zh', name: 'Chinese', flag: '🇨🇳', nativeName: '中文', countryCode: 'CN' },
  { code: 'ko', name: 'Korean', flag: '🇰🇷', nativeName: '한국어', countryCode: 'KR' }
];

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(true)}
        className="!px-3 space-x-2"
      >
        <Languages className="w-4 h-4" />
        <span>{`${currentLanguage.code.toUpperCase()} - ${currentLanguage.countryCode}`} ▼</span>
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Select Language"
        className="max-w-xs"
        style={{ zIndex: 1000 }} // Ensure the popover is above other elements
      >
        <div className="grid grid-cols-1 gap-2">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`flex items-center space-x-3 w-full p-2 rounded-lg transition-colors
                ${lang.code === i18n.language ? 'bg-secondary/20' : 'hover:bg-gray-100'}`}
            >
              <span className="text-xl">{lang.flag}</span>
              <div className="flex flex-col items-start">
                <span className="font-medium">{lang.name}</span>
                <span className="text-sm text-gray-500">{lang.nativeName}</span>
              </div>
            </button>
          ))}
        </div>
      </Modal>
    </>
  );
};