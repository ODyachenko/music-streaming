import './globals.scss';
import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import { store } from '../redux/store';
import { Provider } from 'react-redux';

const quicksand = Quicksand({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Music streaming app',
  description: 'Music streaming app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
