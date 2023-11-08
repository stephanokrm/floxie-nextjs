import { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import { ThemeRegistry } from "@/components/ThemeRegistry/ThemeRegistry";
import { ReactQueryRegistry } from "@/components/ReactQueryRegistry";
import { ElevateAppBar } from "@/components/ElevateAppBar";

export const metadata = {
  title: "Floxie",
  description: "Next.js App Router + Material UI v5",
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ReactQueryRegistry>
          <ThemeRegistry>
            <ElevateAppBar>{children}</ElevateAppBar>
          </ThemeRegistry>
        </ReactQueryRegistry>
        <Analytics />
      </body>
    </html>
  );
}
