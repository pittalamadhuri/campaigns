import { useEffect } from 'react';
import './App.css';
import CampaignList from './components/views/campaignList/campaignList';
import HeaderComponent from './components/views/header/header';
import { CAMPAIGNS } from './constants/campaignList';
import { useStore } from './state/state';

function App() {

  const { initCampaigns } = useStore((state) => state)
  useEffect(() => {
    initCampaigns(CAMPAIGNS);
  }, []);

  return (
    <div className="App">
      <HeaderComponent />
      <CampaignList />
    </div>
  );
}

export default App;
