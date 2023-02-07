import Layout from '@/components/layout';
import { Nunito } from '@next/font/google';
import './reset.scss'
import './globals.scss';


const nunito = Nunito({
  weight: '400',
  style: 'normal',
  subsets: ['cyrillic'],
});


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={nunito.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Layout.Header />
        {children}
      </body>
    </html>
  );
}
