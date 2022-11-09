import React from 'react';
import '../App.scss';

import Navbar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";
import ContactDialog from "../component/contactDialog/ContactDialog";
import {store} from "../store";
import {Provider} from "react-redux";
import {AppProps} from "next/app";

export default function App({Component, pageProps}: AppProps){


  return (
      <Provider store={store}>
        <Navbar links={[
            {
                label: 'Projects',
                url: '#projects'
            },
            {
                label: 'About',
                url: '#about'
            }
        ]}/>
        <Component {...pageProps}/>
        <Footer/>
        <ContactDialog/>
      </Provider>
  );
}

