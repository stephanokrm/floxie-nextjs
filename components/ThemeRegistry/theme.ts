import { Manrope } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const font = Manrope({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const theme = createTheme({
  typography: {
    fontFamily: font.style.fontFamily,
  },
});

export default theme;
