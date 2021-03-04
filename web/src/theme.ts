import { Theme, createMuiTheme, responsiveFontSizes } from "@material-ui/core";

const palette = {
  eggshell: "#e8ddcb",
  oak: "#cdb380",
  aqua: "#036564",
  aqua_dark: "#033649",
  aqua_darker: "#031634",
};

function theme(): Theme {
  const theme = responsiveFontSizes(
    createMuiTheme({
      palette: {
        type: "dark",
        primary: {
          main: palette.oak,
          // main: palette._dark,
          // dark: will be calculated from palette.primary.main,
          // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
          main: palette.eggshell,
          // dark: will be calculated from palette.secondary.main,
          contrastText: palette.aqua,
        },
        // Used by `getContrastText()` to maximize the contrast between
        // the background and the text.
        contrastThreshold: 3,
        // Used by the functions below to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: 0.2,
      },
    })
  );
  return theme;
}

export default theme;
