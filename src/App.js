import { CssBaseline, ThemeProvider } from '@mui/material';
import './assets/styles/App.css';
import AppRoutes from './routes/AppRoutes';
import theme from './utils/theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;