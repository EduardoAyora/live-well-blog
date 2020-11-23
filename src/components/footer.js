import React from 'react'
import footerStyles from './footer.module.scss'

export default function Footer() {
    return (
        <div className={footerStyles.footer}>
            Web diseñada por <a href='https://eduardoayora.com/' target='__blank'>Eduardo Ayora</a>
        </div>
    )
}
