import './styles/app.scss';
import React from 'react';
import Spinner from './components/Spinner.jsx';
import PlayerInfo from './components/PlayerInfo.jsx';
import Avatar from './assets/avatar.png';
import Loader from './components/Loader.jsx';
import TournamentItem from './components/TournamentItem.jsx';
import tournaments from './data/tournaments.js';
import useLoading from './hooks/useLoading.js';
import SEO from './components/SEO.jsx';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  const { percent, isLoaded } = useLoading(0);
  const [selectedEl, setSelectedEl] = React.useState(false);

  return (
    <HelmetProvider>
      <div className='app'>
        <SEO />
        <div className='hero'>
          <h1>Poker</h1>
          {isLoaded && <Spinner />}
        </div>
        <PlayerInfo name="LongUserName" rating={5} avatar={Avatar} />
        {isLoaded && <Loader loading={percent} />}
        <div className="grid">
          {
            !isLoaded &&
            tournaments.list.map((item, index) => {
              return <TournamentItem key={item.id} {...item} selectedEl={selectedEl} setSelectedEl={setSelectedEl} />
            })
          }
        </div>
      </div>
    </HelmetProvider>
  )
}

export default App
