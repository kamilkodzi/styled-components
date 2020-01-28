import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
// import Button from './components/common/Button';
import { ThemeProvider } from 'styled-components';
import LightTheme from './theme/light';
import DarkTheme from './theme/dark';
import PasswordInput from './components/common/PasswordInput';
import { Button } from 'reactstrap';
import PrimaryButton from './components/common/PrimaryButton';
import Spinner from './components/common/Spiner';

function App() {

  const [theme, setTheme] = useState(LightTheme);
  const [showPassword, setShowPassword] = useState(false);

  const handleToggleTheme = () => {
    setTheme(theme.id === 'light' ? DarkTheme : LightTheme)
  }

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  }

  return (
    <ThemeProvider theme={theme}>
      <section>
        {/* <PasswordInput showPassword={showPassword} /> */}
        {/* <Button onClick={handleTogglePassword}>
          {showPassword?'Hide':'Show'}
        </Button> */}
        {/* <Button color='primary'>
          Primary Button
        </Button>
        <PrimaryButton>
          New Primary Button
        </PrimaryButton> */}
        <Spinner/>
      </section>
    </ThemeProvider>
  );
}

export default App;
