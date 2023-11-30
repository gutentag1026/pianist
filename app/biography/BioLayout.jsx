'use client'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
    spacing: 8,
  });
  
export const BioLayout = ({bio}) => {
    return  <ThemeProvider theme={darkTheme}>
                <Box
                    sx={{     
                        bgcolor: 'rgba(0,0,0,0)',
                        color: 'text.secondary',
                        borderRadius: 1,
                        textAlign: 'left',
                        p: 4,
                        mx:3,
                        fontSize: 18,
                        fontWeight: 'light' ,
                        lineHeight: 1.5
                    }}
                    >
                   {bio}
                    </Box>
                </ThemeProvider>
            }