import React, { useState } from 'react';
import Head from 'next/head';
import { useTheme } from '../src/ThemeProvider';

export default function Fun() {
  const theme = useTheme();
  const [bgColor, setBgColor] = useState('#ffffff');

  const changeBackgroundColor = () => {
    const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 100%, 90%)`;
    setBgColor(randomColor);
  };

  return (
    <div className="fun" style={{ backgroundColor: bgColor }}>
      <Head>
        <title>Fun Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Aloha!</h1>
        <button onClick={changeBackgroundColor}>Change Background Color</button>
        <p>Why did the scarecrow become a successful car salesman? Because he was outstanding in his field!</p>
        <div className="placeholder-content">
          <p>Placeholder content for layout</p>
        </div>
      </main>

      <style jsx global>{`
        .fun {
          font-size: ${theme.fontSizes.body};
          color: ${theme.colors.text};
          font-family: ${theme.fonts.body};
        }
        h1 {
          font-size: ${theme.fontSizes.heading};
          color: ${theme.colors.primary};
          font-family: ${theme.fonts.heading};
        }
        button {
          padding: 10px 20px;
          font-size: ${theme.fontSizes.body};
          font-family: ${theme.fonts.body};
          background-color: ${theme.colors.primary};
          color: #fff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        button:hover {
          background-color: ${theme.colors.secondary};
        }
        .placeholder-content {
          margin-top: 20px;
          padding: 20px;
          background-color: ${theme.colors.background};
          border: 1px solid ${theme.colors.primary};
        }
      `}</style>
    </div>
  );
}
