import React from 'react';
import Head from 'next/head';
import { useTheme } from '../src/ThemeProvider';  // Adjust the path

export default function Home() {
  const theme = useTheme();  // Access the theme

  return (
    <div className="home">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Aloha!</h1>
      </main>

      {/* Apply theme styles using inline styles or styled JSX */}
      <style jsx global>{`
        .home {
          font-size: ${theme.fontSizes.body};
          color: ${theme.colors.text};
          font-family: ${theme.fonts.body};
        }
        h1 {
          font-size: ${theme.fontSizes.heading};
          color: ${theme.colors.primary};
          font-family: ${theme.fonts.heading};
        }
      `}</style>
    </div>
  );
}