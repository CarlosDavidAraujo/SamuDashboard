import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#fbb91c",
    },
    secondary: {
      main: "#10949e",
    },
    warning: {
      main: "#ff9800",
    },
    success: {
      main: "#4caf50",
    },
    background: {
      default: "#F6F1F1",
    },
  },
  typography: {
    fontFamily: "Roboto",
  },
  components: {
    MuiToggleButtonGroup: {
      variants: [
        {
          props: { variant: "contained", color: "secondary" },
          style: () => ({
            backgroundColor: "white",
            "& .MuiToggleButton-root.Mui-selected": {
              backgroundColor: theme.palette.secondary.main,
              color: "white",
            },
          }),
        },
      ],
    },
  },
});
