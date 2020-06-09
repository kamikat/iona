import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import IonaProvider from './provider';
import DefaultApp from './ui';

const Iona = ({ name, version, description, baseUrl, component: App=DefaultApp, children }) => {
  return (
    <IonaProvider>
      {children}
      <Router>
        <App
          name={name}
          version={version}
          description={description}
          baseUrl={baseUrl}/>
      </Router>
    </IonaProvider>
  );
};

export default Iona;
