import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FormDataProvider } from '../src/utils/FormDataContext';
import router from './router';
import './index.css';

const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      networkMode: "offlineFirst",
    },
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <FormDataProvider>
        <RouterProvider router={router} />
      </FormDataProvider>
    </QueryClientProvider>
  </StrictMode>
);
