import React from 'react'
import Img from 'gatsby-image'
import {graphql, useStaticQuery} from 'gatsby'
import headerStyles from './header.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    const data = useStaticQuery(graphql`
        query Images {
            image: file(relativePath: {eq: "logo.png"}) {
                id
                childImageSharp {
                    fixed(width: 150, height: 70) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `)
    return (
        <div className={headerStyles.container}>
            <div className={headerStyles.inside}>
                <Img fixed={data.image.childImageSharp.fixed} alt='live well logo' />
                <FontAwesomeIcon className={`${headerStyles.burgerMenu} fa-2x`} icon={faBars} />
            </div>
        </div>
    )
}
