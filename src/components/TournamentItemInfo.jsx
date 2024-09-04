import React from 'react'
import PinIcon from '../assets/pin-icon.svg?react'
import KickIcon from '../assets/kick-icon.svg?react'
import ProBountyIcon from '../assets/pro-bounty-icon.svg?react'
import RapidIcon from '../assets/rapid-icon.svg?react'

const typeIconList = {
    'Knockout': <KickIcon />,
    'ProBounty': <ProBountyIcon />,
    'Rapid': <RapidIcon />,
}
export default function TournamentItemInfo({
    pin = false,
    tag = '',
    name = '',
    types = [],
}) {
    const renderTypeList = () => {
        return types.map((t, i) => {
            return <span key={i} className='tournamentItem-tag tournamentItem-type'>{typeIconList[t]}</span>
        })
    }
    
    return (
        <div className='tournamentItem-info'>
            <div className='tournamentItem-tags'>
                {pin && <PinIcon />}
                <span className='tournamentItem-tag'>{tag}</span>
                {renderTypeList()}
            </div>
            <h3 className='tournamentItem-name'>{name}</h3>
        </div>
    )
}
