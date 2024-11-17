import * as React from "react"
import * as ReactDOM from "react-dom/client"
import {
  createBrowserRouter, RouterProvider
} from "react-router-dom"
import './index.css'
import App from './App.tsx'
import Services from "./Services.tsx"
import Clientes from "./Clientes.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/services",
    element: <Services />
  },
  {
    path: "/clientes",
    element: <Clientes />
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
