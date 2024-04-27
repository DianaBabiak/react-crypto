import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {CryptoContextProvider} from "./context/cripto-context.jsx";

const root = document.getElementById('root')

createRoot(root).render(<CryptoContextProvider><App /></CryptoContextProvider>)
