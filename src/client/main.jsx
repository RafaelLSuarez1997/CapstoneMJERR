import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.less';

import { Provider } from 'react-redux';
import store from './store';

import AuthForm from './features/auth/AuthForm';
import Items from './features/items/Items.jsx';
import Root from './layout/Root.jsx';
import SingleItem from './features/items/SingleItem.jsx';
import ContactUs from './features/items/ContactUs';
import Cart from './features/cart/Cart.jsx';
import SpecificItems from './features/items/SpecificItems.jsx';
import AllItems from './features/items/AllItems.jsx';
import AboutUs from './features/items/Aboutus.jsx';
import News from './features/items/News.jsx';
import Careers from './features/items/Careers.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ShopContextProvider } from './features/cart/ShopContext.jsx';
import Checkout from './features/cart/Checkout.jsx';
import ThankYouMessage from './features/cart/ThankYouMessage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ShopContextProvider>
        <Root />
      </ShopContextProvider>
    ),
    children: [
      { path: '/', element: <Items /> },
      { path: '/all', element: <AllItems /> },
      { path: '/:id', element: <SingleItem /> },
      { path: "/brand/:brand", element: <SpecificItems /> },
      { path: '/contact', element: <ContactUs /> },
      { path: '/login', element: <AuthForm /> },
      { path: '/cart', element: <Cart /> },
      { path: '/checkout', element: <Checkout /> },
      { path: '/checkout-message/:orderId', element: <ThankYouMessage /> },
      { path: '/about', element: <AboutUs /> },
      { path: '/news', element: <News /> },
      { path: '/careers', element: <Careers /> },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
