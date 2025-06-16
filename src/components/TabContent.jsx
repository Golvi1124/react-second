import CookieClicker from '../tasks/CookieClicker';
import CatFacts from '../tasks/CatFacts';
import Users from '../tasks/Users';

function TabContent({ tab }) {
  switch (tab) {
    case 'CatFacts': return <CatFacts />;
    case 'Users': return <Users />;
    case 'CookieClicker':
    default: return <CookieClicker />;
  }
}
export default TabContent;