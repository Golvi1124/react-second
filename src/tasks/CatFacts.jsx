import { useState } from "react";
import CatTabs from "../components/CatTabs";
import CatTabContent from "../components/CatTabContent";
// import './App.css'; - Later will make this pretty with CSS

export default function CatFacts() {
  const [activeCatTab, setActiveCatTab] = useState();

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Cat Facts</h2>
      <p>What do you want to know?</p>
      <img
        src="https://c.files.bbci.co.uk/13674/production/_126167497_cat.png"
        alt="cat"
        style={{ maxWidth: "50%", height: "auto" }}
      />
      <p>Click on the tab below to get started!</p>
      <CatTabs onTabChange={setActiveCatTab} />
      <CatTabContent tab={activeCatTab} />
    </div>
  );
}
// https://catfact.ninja/facts?limit=5
