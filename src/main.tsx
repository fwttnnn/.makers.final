import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { store } from "@/stores"
import { Provider as ReduxProvider } from "react-redux"
import { ThemeProvider } from "@mui/material/styles"
import { theme } from "@/theme"

import "@/main.css"

import Layout from "@/layouts"

/**
 * NOTE: redux (barebone) request dari mas Hendro
 *       MUI juga kalo bisa
 */

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
          <Layout.Default />
      </ThemeProvider>
    </ReduxProvider>
  </StrictMode>,
)
