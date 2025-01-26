"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Locale } from '@/locales';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import ReactCountryFlag from 'react-country-flag';

const languages = [
  { code: 'es', name: 'Español' },
  { code: 'us', name: 'English' }
];

export const LanguageSwitcher: React.FC = () => {
  const router = useRouter();
  const currentLocale = useLocale() as Locale; // Obtén el idioma actual

  function handleLocaleChange(newLocale: Locale): void {
    // Establece la cookie para el nuevo locale
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;

    // Obtén la ruta actual
    const currentPath = window.location.pathname;

    // Cambia la URL para incluir el nuevo locale
    const newPath = currentPath.replace(`/${currentLocale}`, `/${newLocale}`);
    
    // Navega a la nueva URL
    router.push(newPath);
  }

  return (
    <Select value={currentLocale} onValueChange={handleLocaleChange}>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {languages.map((language) => (
            <SelectItem key={language.code} value={language.code}>
              <SelectLabel>
                <ReactCountryFlag
                  countryCode={language.code}
                  svg
                  style={{ width: '1.4em', height: '1.1em', marginRight: 10 }}
                />
                {language.name}
              </SelectLabel>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};