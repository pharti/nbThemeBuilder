import React from 'react';
import { themes } from './theme';

export const ThemeContext = React.createContext({
    theme: themes.team1,
});