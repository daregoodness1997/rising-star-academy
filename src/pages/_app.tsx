import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function App({ Component, pageProps }: AppProps) {
  const lightTheme = createTheme({
    type: "light",
    theme: {
      colors: {},
    },
  });

  const darkTheme = createTheme({
    type: "dark",
    className: "light-modern",
    theme: {
      colors: {
         primary: '#4ADE7B',
      },
    },
  });
  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </NextThemesProvider>
  );
}
