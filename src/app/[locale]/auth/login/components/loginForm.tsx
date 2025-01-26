"use client"

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useTranslations } from 'next-intl';
import { UseFormReturn } from 'react-hook-form';

interface LoginFormData {
  email: string;
  password: string;
}

interface LoginFormProps {
  onSubmit: (data: LoginFormData) => void; // Especifica el tipo de `data`
  form: UseFormReturn<LoginFormData>; // Usa el tipo correcto para el objeto de formulario
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, form }) => {
  const t = useTranslations('AuthLogin.loginForm');

  return (
    <>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-3'>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('labelEmail')}</FormLabel>
                <FormControl>
                  <Input placeholder={t('emailMesssage')} {...field} autoComplete='email' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('labelPassword')}</FormLabel>
                <FormControl>
                  <Input placeholder={t('passwordMessage')} {...field} type='password' autoComplete='current-password' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit' className='flex w-full justify-center'>
            {t('buttonSingIn')}
          </Button>
        </form>
      </Form>
    </>
  );
}

export default LoginForm