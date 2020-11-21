import React from 'react'
import headerStyles from './header.module.scss'

export default function Header() {
    return (
        <div className={headerStyles.container}>
            <div className={headerStyles.inside}>
                <span>un bonito header</span>
                <span className={headerStyles.burgerMenu}>|||</span>
            </div>
        </div>
    )
}
