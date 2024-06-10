import React from "react";
import { createRoot } from 'react-dom/client';
import Header from './component/Header';
import WelcomeMessage from './component2/Mian'; 
import WelcomeMessage2 from './component3/Main2'; 


const App = () => {
  return (
    <>
      <Header />
      <WelcomeMessage /> 
      <WelcomeMessage2 />
    </>
  );
};

createRoot(document.getElementById('root')).render(<App />); // Render the App component
