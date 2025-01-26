import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
     experimental: {
         appDir: true
     },
     output: 'export',
     basePath: '/RicconApp-Frontend',
};
 
export default withNextIntl(nextConfig);