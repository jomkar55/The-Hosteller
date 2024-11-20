'use client'
import "./globals.css";
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import store from '../redux/store';
import client from '../lib/apolloClient';
import Navbar from "@/src/components/navbar/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>The Hosteller</title>
        <link rel="icon" href={`https://www.thehosteller.com/Assets/logo_icon.png`} />
      </head>
      <body>
        <ApolloProvider client={client}>
          <Provider store={store}>
            <Navbar/>
            {children}
          </Provider>
        </ApolloProvider>
      </body>
    </html>
  );
}
