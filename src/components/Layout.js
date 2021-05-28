import React from 'react';
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
import SEO from './SEO';
import Header from './Header';
import Footer from './Footer';
import SubFooter from './SubFooter';
import '../scss/style.scss';

deckDeckGoHighlightElement();

const Layout = props => (
  <>
    <SEO />
    <div className={`page${props.bodyClass ? ` ${props.bodyClass}` : ''}`}>
      <div id="wrapper" className="wrapper">
        <Header />
        {props.children}
      </div>
      <Footer />
      <SubFooter />
    </div>
  </>
);

export default Layout;
