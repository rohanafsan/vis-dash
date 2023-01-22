import React, { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SideNavBar from './components/SideNavBar';


// Router component that renders the SideNavBar and Dashboard components
function App() {

  return (
    <div>
      <BrowserRouter>
      <SideNavBar>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
      </SideNavBar>
      </BrowserRouter>
    </div>
  );
}

export default App;