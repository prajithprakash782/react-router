import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import NotFoundPage from './components/NotFoundPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Header from './components/Header';

import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import UserPage from './components/UserPage';
import UserDetailPage from './components/UserDetailPage';
import { createTheme, ThemeProvider } from '@mui/material';

function App() {

  const theme = createTheme({
    palette:{
      primary:{
        main:"#03e67c"
      }
    }
  })
  return (
    <div>
      <ThemeProvider theme={theme}>
      <Header />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/users" element={<ProtectedRoute><UserPage/></ProtectedRoute>} />
        <Route path="/user/:id" element={<ProtectedRoute><UserDetailPage /></ProtectedRoute>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
