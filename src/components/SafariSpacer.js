import React from 'react'

import './SafariSpacer.css'

export default function SafariSpacer({ add = 0 }) {
    return (
        <div className="safari_only">
            <div style={{ height: 90 + add }} />
        </div>
    )
}
