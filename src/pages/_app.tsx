import React from 'react';
import '../App.scss';

import "../component/fontawesome/fontawesome";
import {Header} from "../component/header/Header";
import {NavMenu} from "../component/header/NavMenu";
import Footer from "../component/footer/Footer";
import {Logo} from "../component/logo/Logo";
import ContactDialog from "../component/contactDialog/ContactDialog";
import {store} from "../store";
import {Provider} from "react-redux";
import {AppProps} from "next/app";

export default function App({Component, pageProps}: AppProps){


  return (
      <Provider store={store}>
        <Header
            leftContent={
              <button title='Scroll back to top' aria-label={'Scroll back to top'} onClick={() => window.scroll({ top: 0, left: 0, behavior: "smooth"})}>
                <Logo/>
                <span className='hidden'>Scroll back to top</span>
              </button>
            }
            rightContent={

              <NavMenu
                  description={"Page sections"}
                  entries={[
                    {
                      title: "Projects",
                      link: "#projects",
                      description: 'Scroll to project section',
                      scroll: true
                    },
                    {
                      title: "About",
                      link: "#about",
                      description: 'Scroll to about section',
                      scroll: true
                    }
                  ]}/>
            }
        />
        <Component {...pageProps}/>
        <Footer/>
        <ContactDialog/>
      </Provider>
  );
}

