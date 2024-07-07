import { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import "../index2.css"

function ThemeToggler() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Add logic to toggle the theme in your application
  };

  return (
    <Button variant="secondary" onClick={toggleTheme} className="me-2 theme-toggler">
      {isDarkMode ? <FaSun /> : <FaMoon />}
    </Button>
  );
}

export default ThemeToggler;
