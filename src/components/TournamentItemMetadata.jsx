import React from 'react'
import ClockIcon from '../assets/clock-icon.svg?react'
import PlayerIcon from '../assets/player-icon.svg?react'
import TourneyIcon from '../assets/tourney-icon.svg?react'

export default function TournamentItemMetadata({
    date = '',
    players = '',
    tourney = '',
}) {
    return (
        <>
            <div className="tournamentItem-date tournamentItem-metadata-item">
                <ClockIcon className="tournamentItem-icon" />
                <span>{date}</span>
            </div>
            <div className='tournamentItem-metadata'>
                <div className="tournamentItem-metadata-item">
                    <PlayerIcon className="tournamentItem-icon" />
                    <span>{players}</span>
                </div>
                <div className="tournamentItem-metadata-item">
                    <TourneyIcon className="tournamentItem-icon" />
                    <span>{tourney}</span>
                </div>
            </div>
        </>
    )
}
