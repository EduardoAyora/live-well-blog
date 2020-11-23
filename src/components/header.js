import React from 'react'
import Img from 'gatsby-image'
import {Link} from 'gatsby'
import {graphql, useStaticQuery} from 'gatsby'
import InstagramIcon from '../../static/icons/instagram.svg'
import headerStyles from './header.module.scss'

export default function Header() {
    const data = useStaticQuery(graphql`
        query Images {
            imageDesktop: file(relativePath: {eq: "images/logo.png"}) {
                id
                childImageSharp {
                    fixed(width: 270, height: 126) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            imageMobile: file(relativePath: { eq: "images/logo.png" }) {
                id
                childImageSharp {
                    fixed(width: 150, height: 70) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `)
    const sources = [
        {
            ...data.imageMobile.childImageSharp.fixed,
            media: `(max-width: 800px)`
        },
        {
            ...data.imageDesktop.childImageSharp.fixed,
            media: `(min-width: 801px)`
        }
    ]
    return (
        <div className={headerStyles.container}>
            <div className={headerStyles.inside}>
                <Link to='/'>
                    <Img fixed={sources} alt='logo de live well' />
                </Link>
                <a href='https://www.instagram.com/live.well.77/?hl=es-la' target='__blank'><InstagramIcon className={headerStyles.instagramIcon} /></a>
            </div>
        </div>
    )
}
