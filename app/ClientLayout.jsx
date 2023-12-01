"use client"
import { createTheme, ThemeProvider } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
    spacing: 8,
});

export default function ClientLayout({
    children}) {
    return (
      <ThemeProvider theme={darkTheme}>
        {children}
      </ThemeProvider>
    )
  } 