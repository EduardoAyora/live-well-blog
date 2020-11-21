import React from 'react'
import Header from './header'
import Footer from './footer'
import layoutStyles from './layout.module.scss'

export default function Layout({children}) {
    return (
        <div className={layoutStyles.container}>
            <Header className={layoutStyles.header} />
            <div className={layoutStyles.body}>
                {children}
                <Footer className={layoutStyles.footer} />
            </div>
        </div>
    )
}
