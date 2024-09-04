import React from 'react'

export default function Loader({ loading }) {
  return (
    <div className='loader'>
        <div className="loader-progress">
            <div className="loader-progress-value" style={{ 'width': `${loading}%` }}></div>
        </div>
        <p className="loader-text">Loading {loading}%</p>
    </div>
  )
}
