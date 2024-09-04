import React from 'react'
import PlayerInfoBalance from './PlayerInfoBalance'
import PlayerInfoRating from './PlayerInfoRating'

export default function PlayerInfo({ name = '', rating = 0, avatar = '' }) {
    return (
        <div className='player-info'>
            <div className='player-info-title'>
                <p className='player-info-name'>{name}</p>
                {rating > 0 && <PlayerInfoRating rating={rating} />}
            </div>
            <div className="player-info-avatar">
                <img width={32} height={32} src={avatar} alt={name} />
            </div>
            <PlayerInfoBalance value="100,500.00" isVisible={true} />
        </div>
    )
}
