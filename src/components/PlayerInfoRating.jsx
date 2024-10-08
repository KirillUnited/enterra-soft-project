import React from 'react'

export default function PlayerInfoRating({ rating = 0 }) {
    return (
        <div className="player-info-rating">
            {
                new Array(rating).fill(1).map((_, index) => (
                    <svg key={index} className="player-info-rating-star" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 0L5.24731 2.45763L8 2.88136L5.97849 4.78814L6.45161 7.5L4 6.22881L1.54839 7.5L1.97849 4.78814L0 2.88136L2.75269 2.45763L4 0Z" fill="#FAFF1A" />
                    </svg>
                )
                )
            }
        </div>
    )
}
