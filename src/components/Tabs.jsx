import { useState } from 'react';
import { useTheme } from '../themes/themeContext';

const tabData = [
  { name: 'CookieClicker', color: 'gold' },
  { name: 'CatFacts', color: 'lightpink' },
  { name: 'Users', color: 'lightblue' },
];

function Tabs({ onTabChange }) {
  const [activeTab, setActiveTab] = useState('CookieClicker');
  const { theme } = useTheme();

  return (
    <div className="tabs">
      {tabData.map((tab) => (
        <button
          key={tab.name}
          onClick={() => {
            setActiveTab(tab.name);
            onTabChange(tab.name);
          }}
          style={{
            backgroundColor:
              theme === 'dark' ? darken(tab.color) : tab.color,
          }}
          className={activeTab === tab.name ? 'active' : ''}
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
}

function darken(color) {
  return color.replace('light', 'dark'); // crude method; works with named colors
}

export default Tabs;