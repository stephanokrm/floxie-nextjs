import { Poppins } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const font = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const theme = createTheme({
  typography: {
    fontFamily: font.style.fontFamily,
  },
});

export default theme;
