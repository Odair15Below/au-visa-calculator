import React from 'react';
import { createTheme, CssBaseline, ThemeProvider, responsiveFontSizes, Container, Alert, Box, Typography } from '@material-ui/core';
import CategoriesTabs from './components/CategoriesTabs';
import ButtonAppBar from './components/NavBar';
import ScoreBar from './components/ScoreBar';
import { getDarkModePreference } from './store/app';
import { useSelector } from 'react-redux';
import SnackBarAlert from './components/SnackBarAlert';
import { HOME_AFFAIRS_SNAPSHOT } from './scoring/snapshot';

export default function App() {

  // dark theme handling
  const preferDarkMode = useSelector(getDarkModePreference);
  let theme = createTheme({
    palette: {
      mode: preferDarkMode ? 'dark' : 'light',
    },
  });
  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <CssBaseline />
        <ButtonAppBar />
        <Container sx={{ padding: 0 }} maxWidth="md">
          <ScoreBar />
          <Box m={2} >
            <Alert severity="info" m='2' >
              <Typography variant='caption'>Answer each Points Category. Pathway Scores for 189, 190, and 491 are Awarded Points from a Home Affairs Snapshot — not an invitation or visa grant.</Typography>
            </Alert>
          </Box>
          <CategoriesTabs />
          <SnackBarAlert />
          <Box m={2} mb={4}>
            <Typography variant='caption' color='text.secondary'>
              Not migration advice. Points Test as at {HOME_AFFAIRS_SNAPSHOT.asAt} ({HOME_AFFAIRS_SNAPSHOT.source}). Confirm against{' '}
              <a href={HOME_AFFAIRS_SNAPSHOT.sourceUrl}>Home Affairs</a> before you lodge an EOI.
            </Typography>
          </Box>
        </Container>
      </React.StrictMode>
    </ThemeProvider>
  );
}