import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { store } from "@/stores"
import { Provider as ReduxProvider } from "react-redux"

import "@/main.css"

import Layout from "@/layouts"

const Redux = {
  Provider: ReduxProvider
}

/**
 * NOTE: redux (barebone) request dari mas Hendro
 *       MUI juga kalo bisa
 */

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Redux.Provider store={store}>
      <Layout.Default />
    </Redux.Provider>
  </StrictMode>,
)
