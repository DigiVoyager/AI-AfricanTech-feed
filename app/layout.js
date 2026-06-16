import { Analytics } from '@vercel/analytics/next';

export const metadata = {
  title: 'Bumblebee News — AI & Tech for African Creative Builders',
  description: 'AI and tech news for African creative economy founders and operators, plain language, no jargon',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', background: '#faf6ef', color: '#2b1d14' }}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
