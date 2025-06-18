import { useState } from 'react';
import CatTabs from '../components/CatTabs';
import CatTabContent from '../components/CatTabContent';
// import './App.css'; - Later will make this pretty with CSS

export default function CatFacts() {
  const [activeCatTab, setActiveCatTab] = useState();

  return (
    <>
      <CatTabs onTabChange={setActiveCatTab} />
      <CatTabContent tab={activeCatTab} />
    </>
  );
}

// https://catfact.ninja/facts?limit=5 