import React from 'react'
import Header from './header'
import Footer from './footer'
import layoutStyles from './layout.module.scss'

export default function Layout({children}) {
    return (
        <div className={layoutStyles.container}>
            <Header />
            <div className={layoutStyles.content}>
                <div className={layoutStyles.main}>
                    {children}
                </div>
                <Footer />
            </div>
        </div>
    )
}
