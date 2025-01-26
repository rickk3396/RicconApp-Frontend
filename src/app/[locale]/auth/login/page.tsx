"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { LoginForm } from './components';
import { useNavigation } from '@/app/shared/utilities/navigation';
import { LanguageSwitcher } from '@/app/shared/components';

const formSchema = z.object({
  email: z.string().min(2, { message: 'Campo requerido' }),
  password: z.string().min(2, { message: 'Campo requerido' }),
});

type LoginFormData = z.infer<typeof formSchema>;

const LoginPage: React.FC = () => {
  const t = useTranslations('AuthLogin');
  const { navigateTo } = useNavigation();

  const form = useForm<LoginFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className='max-w-md mx-auto'>
          <Card className='mb-3'>
            <LanguageSwitcher />
          </Card>
          <Card className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <CardHeader className='space-y-1 sm:mx-auto sm:w-full sm:max-w-sm'>
              <CardTitle className='text-2xl font-bold text-center text-default-600'>{t('title')}</CardTitle>
              <CardDescription className='text-center'>{t('description')}</CardDescription>
            </CardHeader>

            <CardContent>
              <LoginForm onSubmit={onSubmit} form={form} />
            </CardContent>

            <CardFooter className='flex justify-between'>
              <Button variant='link' className='text-default-600 bg-transparent hover:bg-transparent'>
                {t('linkForgotPassword')}
              </Button>
              <Button
                variant='link'
                className='text-default-600 bg-transparent hover:bg-transparent'
                onClick={() => navigateTo('/auth/register')}
              >
                {t('linkCreateAccount')}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
}

export default LoginPage;