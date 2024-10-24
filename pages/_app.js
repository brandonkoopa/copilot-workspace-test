import { ThemeProvider } from '../src/ThemeProvider'; // Adjust the path

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;