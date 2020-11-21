import React from 'react'
import Layout from '../components/layout'
import {Link, graphql, useStaticQuery} from 'gatsby'
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
        <li key={edge.node.slug}>
            <Link to={`/blog/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.publishedDate}</p>
            </Link>
        </li>
    ))

    return (
        <Layout>
            <h1>Blog</h1>
            <ul>
                {posts}
            </ul>
        </Layout>
    )
}
