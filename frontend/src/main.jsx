import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import axios from 'axios'
import { API_BASE } from './config'

// Set axios default baseURL so existing calls using relative paths work
axios.defaults.baseURL = API_BASE

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
