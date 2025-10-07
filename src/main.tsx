import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import './css/index.css'
import { Provider } from "react-redux";
import App from './App.tsx'
import { store } from './app/store.ts';
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './app/queryClient.ts';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <App />
      </Provider>
    </QueryClientProvider>
  </StrictMode>,
)
