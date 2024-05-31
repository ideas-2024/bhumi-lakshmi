import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ProductContainer from './containers/Product';
import ProductDetailsContainer from './containers/ProductDetails';
import ContactContainer from './containers/Contact';
import ErrorContainer from './containers/Error';
import { QueryClient } from '@tanstack/query-core';
import { QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { HeaderComponent } from './components/Header';
import { FooterComponent } from './components/Footer';
import HomeContainer from './containers/Home';

function App() {

  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <HomeContainer />
      },
      {
        path: '/products',
        element: <ProductContainer />
      },
      {
        path: '/product/:id',
        element: <ProductDetailsContainer />
      },
      {
        path: "/contactus",
        element: <ContactContainer />
      },
      {
        path: '*',
        element: <ErrorContainer />
      }
    ]
  )
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <>
      <HeaderComponent />
        <React.Suspense>
          <div className='px-8 py-8 sm:px-24 sm:py-12'>
          <RouterProvider router={router} />
          </div>
        </React.Suspense>
        <FooterComponent />
      </>
      
    </QueryClientProvider>
  )
}

export default App
