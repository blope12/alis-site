import React from "react";
import { createRoot } from 'react-dom/client';
import Header from './component/Header';
import WelcomeMessage from './component2/Mian'; 
import WelcomeMessage2 from './component3/Main2'; 
import WelcomeMessage3 from './component4/Main3';
import WelcomeMessage4 from './component5/Main4';

const App = () => {
  return (
    <>
      <Header />
      <WelcomeMessage /> 
      <WelcomeMessage2 />
      <WelcomeMessage3 />
      <WelcomeMessage4 />

    </>
  );
};

createRoot(document.getElementById('root')).render(<App />); // Render the App component
