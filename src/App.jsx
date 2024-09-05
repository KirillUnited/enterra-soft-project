import './styles/app.scss';
import React from 'react';
import Spinner from './components/Spinner.jsx';
import PlayerInfo from './components/PlayerInfo.jsx';
import Avatar from './assets/avatar.png';
import Loader from './components/Loader.jsx';
import TournamentItem from './components/TournamentItem.jsx';
import tournaments from './data/tournaments.js';
import useLoading from './hooks/useLoading.js';

function App() {
  const {percent, isLoaded} = useLoading(0);

  return (
    <div className='app'>
      <div className='hero'>
        <h1>Poker</h1>
        {isLoaded && <Spinner />}
      </div>
      <PlayerInfo name="LongUserName" rating={5} avatar={Avatar} />
      {isLoaded && <Loader loading={percent} />}
      <div className="grid">
        {tournaments.list.map((item, index) => <TournamentItem key={item.id} {...item} />)}
      </div>
    </div>
  )
}

export default App
