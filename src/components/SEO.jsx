import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function SEO({title, children}) {
    return (
        <Helmet>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest"></link>
            <title>{`${title ? `${title} | ` : ''}Enterra Soft`}</title>
            {children}
        </Helmet>
    )
}
