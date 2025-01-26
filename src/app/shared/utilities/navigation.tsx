import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

export const useNavigation = () => {
  const router = useRouter();
  const currentLocale = useLocale();

  const goToPage = (url: string) => {
    router.push(url);
  };

  const getLocalizedPath = (basePath: string): string => {    
    if (basePath.startsWith(`/${currentLocale}`)) {
      return basePath;
    }
    return `/${currentLocale}${basePath}`;
  };

  const navigateTo = (basePath: string) => {
    const localizedPath = getLocalizedPath(basePath);
    goToPage(localizedPath);
  };

  return { goToPage, navigateTo, getLocalizedPath };
};