import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

// Traduzindo data globalmente de En-US para Pt-BR
import moment from 'moment'
import 'moment/dist/locale/pt-br'
moment.locale('pt-br')

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
