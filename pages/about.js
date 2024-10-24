import React from 'react';
import Link from 'next/link';
import { useTheme } from '../src/ThemeProvider';

const About = () => {
  const theme = useTheme();

  return (
    <div className="about">
      <h1>About CoPilot Search</h1>
      <p>
        CoPilot Search is a powerful search engine that helps you find the information you need quickly and efficiently. 
        With advanced search algorithms and a user-friendly interface, CoPilot Search provides accurate and relevant results 
        for your queries.
      </p>
      <h2>Features</h2>
      <ul>
        <li>Fast and accurate search results</li>
        <li>Advanced filtering options</li>
        <li>User-friendly interface</li>
        <li>Personalized search experience</li>
      </ul>
      <h2>Benefits</h2>
      <ul>
        <li>Save time by finding information quickly</li>
        <li>Get relevant results tailored to your needs</li>
        <li>Easy to use, even for beginners</li>
        <li>Enhanced productivity with advanced search features</li>
      </ul>
      <Link href="/">Back to Home</Link>

      <style jsx>{`
        .about {
          font-size: ${theme.fontSizes.body};
          color: ${theme.colors.text};
          font-family: ${theme.fonts.body};
          padding: 20px;
          background-color: ${theme.colors.background};
        }
        h1 {
          font-size: ${theme.fontSizes.heading};
          color: ${theme.colors.primary};
          font-family: ${theme.fonts.heading};
        }
        h2 {
          font-size: ${theme.fontSizes.body};
          color: ${theme.colors.secondary};
          font-family: ${theme.fonts.heading};
        }
        ul {
          list-style-type: disc;
          padding-left: 20px;
        }
        li {
          margin-bottom: 10px;
        }
        a {
          color: ${theme.colors.primary};
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default About;
