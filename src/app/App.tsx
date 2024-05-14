import { RouterProvider } from "react-router-dom";

import { router } from "@/pages/router";
import { ThemeProvider } from "@/components/theme-provider";

import "./index.css";

export const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};
