import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'

export default function Blog() {
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
        <div>
            <h1>Blog</h1>
            <ul>
                {posts}
            </ul>
            <Link to='/'>home</Link>
        </div>
    )
}
