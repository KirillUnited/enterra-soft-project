import React from 'react'
import UnvisibleIcon from '../assets/unvisible-icon.svg?react'
import VisibleIcon from '../assets/visible-icon.svg?react'

export default function PlayerInfoBalance({ value = 0, isVisible }) {
    const [visible, setVisible] = React.useState(isVisible)
    const handleClick = () => {
        setVisible(!visible)
    }
    return (
        <button className={`player-info-balance ${visible ? 'shown' : ''}`} onClick={handleClick}>
            <span className="player-info-balance-icon">
                {visible ? <UnvisibleIcon /> : <VisibleIcon />}
            </span>
            {
                visible ? <span className="player-info-balance-value">{`$${value}`}</span> : <span className="player-info-balance-value">Show balance</span>
            }
        </button>
    )
}
