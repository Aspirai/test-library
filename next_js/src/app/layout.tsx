import '@/app/globals.css';
import { Inter as FontSans } from 'next/font/google';

import StyledComponentsRegistry from '@/lib/registry';
import { cn } from '@/lib/utils';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en" suppressHydrationWarning>
    <head />
    <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </body>
  </html>
);

export default RootLayout;
