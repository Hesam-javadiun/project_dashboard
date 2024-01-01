import React from 'react';
import themes from '~utils/themes';
import type { Theme } from '~utils/themes';

export type themeContextStateType = {
    theme: Theme,
    ToggleTheme : () => void,
    forDarkMode: (classes: string[]) => string,
    forLightMode: (classes: string[]) => string
}

const defaultContextValue : themeContextStateType = {
    theme: themes.getBrowserDefault(),
    ToggleTheme : () => {},
    forDarkMode: () => '',
    forLightMode: () => ''
}

export const ThemeContext = React.createContext(defaultContextValue)
