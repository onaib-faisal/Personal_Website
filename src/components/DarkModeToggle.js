// components/DarkModeToggle.js

import React from 'react';
import { useDarkMode } from '../context/DarkModeContext';

function DarkModeToggle() {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    return (
        <button onClick={toggleDarkMode}>
            {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
    );
}

export default DarkModeToggle;
