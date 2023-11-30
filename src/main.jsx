import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { router } from './Routes/Router';
import Authprovider from './Authprovider/Authprovider';
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Authprovider>
  <QueryClientProvider client={queryClient}>
  <div className='max-w-[1350px] mx-auto '>
        <RouterProvider router={router} />
      </div>
  </QueryClientProvider>
   </Authprovider>
  </React.StrictMode>,
)
