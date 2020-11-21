import React from 'react'
import Layout from '../components/layout'
import {Link, graphql, useStaticQuery} from 'gatsby'
import indexStyles from './index.module.scss'
import '../styles/index.scss'

export default function Index() {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost (sort: {fields: publishedDate, order: DESC}) {
                edges {
                    node {
                        title
                        slug
                        publishedDate(formatString: "MMMM Do, YYYY")
                    }
                }
            }
        }
    `)

    const posts = data.allContentfulBlogPost.edges.map(edge => (
        <article className={indexStyles.post} key={edge.node.slug}>
            
            <Link to={`/blog/${edge.node.slug}`}></Link>
            <Link to={`/blog/${edge.node.slug}`}></Link>
            <h2>
                <Link to={`/blog/${edge.node.slug}`}>{edge.node.title}</Link>
            </h2>
            <p>{edge.node.publishedDate}</p>
            <p>
                <Link to={`/blog/${edge.node.slug}`}>Seguir leyendo</Link>
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
