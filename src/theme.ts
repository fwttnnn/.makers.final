import { createTheme } from "@mui/material/styles"

export const theme = createTheme({
  typography: {
    fontFamily: [
      "'Times New Roman'", "Times", "serif"
    ].join(','),
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        color: "transparent",
        elevation: 0,
      },
      styleOverrides: {
        root: {
          color: "inherit",
        },
      },
    },
  },
})
