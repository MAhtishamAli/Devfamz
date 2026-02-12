import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, name, type }) {
    return (
        <Helmet>
            { /* Standard metadata tags */}
            <title>{title}</title>
            <meta name='description' content={description} />

            { /* End of standard metadata tags */}

            { /* Facebook tags */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />

            { /* End of Facebook tags */}

            { /* Twitter tags */}
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content={type} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />

            { /* End of Twitter tags */}
        </Helmet>
    )
}

SEO.defaultProps = {
    title: 'DevFamz | Enterprise AI & Cloud Solutions',
    description: 'DevFamz delivers enterprise-grade Cloud, AI, and Cybersecurity solutions. We engineer digital infrastructure for the future.',
    name: 'DevFamz',
    type: 'website'
}
