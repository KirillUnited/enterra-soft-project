import './styles/app.scss';
import React from 'react';
import Spinner from './components/Spinner.jsx';
import PlayerInfo from './components/PlayerInfo.jsx';
import Avatar from './assets/avatar.png';
import Loader from './components/Loader.jsx';
import { useEffect } from 'react';
import TournamentItem from './components/TournamentItem.jsx';
import tournaments from './data/tournaments.js';

function App() {
  const [loading, setLoading] = React.useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setLoading(prev => (prev < 100 ? prev + 1 : 100));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='app'>
      <div className='hero'>
        <h1>Poker</h1>
        {loading < 100 && <Spinner />}
      </div>
      <PlayerInfo name="LongUserName" rating={5} avatar={Avatar} />
      {loading < 100 && <Loader loading={loading} />}
      <div className="grid">
        {tournaments.list.map((item, index) => <TournamentItem key={item.id} {...item} />)}
      </div>
    </div>
  )
}

export default App
