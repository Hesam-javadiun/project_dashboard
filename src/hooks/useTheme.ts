import { useContext } from "react";
import { ThemeContext } from "~context/theme-context";
import type { themeContextStateType } from "~context/theme-context";

type UseThemeOutput = Omit<themeContextStateType, 'theme'>;

const useTheme = (): UseThemeOutput => {
  const {  ToggleTheme, forDarkMode, forLightMode } =
    useContext(ThemeContext);

  return {  ToggleTheme, forDarkMode, forLightMode };
};

export default useTheme;
