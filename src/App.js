import React, { Fragment } from 'react';
import './App.css';
import Header from '../src/components/Layouts/header';
import Footer from '../src/components/Layouts/Footer';
import Home from '../src/container/Home'
function App() {
  return (
     <Fragment>
       <Header />
        <Home />
       <Footer />
     </Fragment>
  );
}

export default App;
