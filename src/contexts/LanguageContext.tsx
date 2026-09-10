import React, { createContext, useContext, useState } from 'react';
import type { Lang } from '@/i18n/translations';
import { translations } from '@/i18n/translations';

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (section: keyof typeof translations, key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'ID',
  setLang: () => {},
  t: (_section, key) => key,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>('ID');

  const t = (section: keyof typeof translations, key: string): string => {
    const sectionData = translations[section] as Record<string, Record<Lang, string>>;
    return sectionData[key]?.[lang] ?? sectionData[key]?.['ID'] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
