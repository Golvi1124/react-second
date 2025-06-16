// Import React and necessary components, App Layout
import React, { useState } from 'react';
import Header from './components/Header';
import ThemeToggle from './components/ThemeToggle';
import Tabs from './components/Tabs';
import TabContent from './components/TabContent';
import './App.css'; // style with theme-aware classes

function App() {
  const [selectedTab, setSelectedTab] = useState('CookieClicker');

  return (
    <>
      <Header />
      <ThemeToggle />
      <Tabs onTabChange={setSelectedTab} />
      <TabContent tab={selectedTab} />
    </>
  );
}

export default App;
