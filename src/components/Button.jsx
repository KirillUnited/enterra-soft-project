import React from 'react'

export default function Button({
    className = '',
    type,
    disabled,
    children
}) {
    return (
        <button className={`button ${className}`} type={type} disabled={disabled}>{children}</button>
    )
}
