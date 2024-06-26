import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import { ThemeContextProvider } from './components/ThemeContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeContextProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </ThemeContextProvider>
)
