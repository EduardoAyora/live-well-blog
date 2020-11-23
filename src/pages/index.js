import React from 'react'
import Layout from '../components/layout'
import {Link, graphql, useStaticQuery} from 'gatsby'
import indexStyles from './index.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLongArrowAltRight} from '@fortawesome/free-solid-svg-icons'
import '../styles/index.scss'

export default function Index() {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost (sort: {fields: publishedDate, order: DESC}) {
                edges {
                    node {
                        title
                        slug
                        publishedDate(formatString: "DD-MM-YYYY")
                    }
                }
            }
        }
    `)

    const posts = data.allContentfulBlogPost.edges.map(edge => (
        <article className={indexStyles.post} key={edge.node.slug}>
            <h2 className={indexStyles.postTitle}>
                <Link to={`/blog/${edge.node.slug}`}>{edge.node.title}</Link>
            </h2>
            <p className={indexStyles.postMeta}>
                Publicado el {edge.node.publishedDate}
            </p>
            <p className={indexStyles.readMore}>
                <Link to={`/blog/${edge.node.slug}`}>
                    Seguir leyendo
                    <FontAwesomeIcon icon={faLongArrowAltRight} />
                </Link>
            </p>
        </article>
    ))

    return (
        <Layout>
            <main>
                {posts}
            </main>
        </Layout>
    )
}
