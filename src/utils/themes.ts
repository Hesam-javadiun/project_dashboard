enum ThemeColors {
  LIGHT = "LIGHT",
  DARK = "DARK",
}

export type Theme = keyof typeof ThemeColors;

class Themes {
  colors;
  constructor() {
    this.colors = ThemeColors;
  }

  getBrowserDefault() {
    return ThemeColors.DARK;
  }

  private assignClassBasedOnGivenTheme(
    givenTheme: Theme,
    theme: Theme,
    classes: string[]
  ) {
    if (theme === givenTheme) {
      const concatenatedClasses = classes.join(" ");
      return concatenatedClasses;
    } else {
      return "";
    }
  }

  generateAssignClassFunction(givenTheme: Theme, theme: Theme) {
    return this.assignClassBasedOnGivenTheme.bind(null, givenTheme, theme);
  }
}
const themes = new Themes();

export default themes;
