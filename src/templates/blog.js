import React from 'react'
import Layout from '../components/layout'
import {Link} from 'gatsby'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'

export const query = graphql`
    query($slug: String!) {
        contentfulBlogPost(slug: {eq: $slug}) {
            title
            publishedDate(formatString: "MMMM Do, YYYY")
            body {
                json
            }
        }
    }
`

const options = {
    renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: node => {
            const fields = node.data.target.fields
            return <img alt={fields.title['en-US']} src={fields.file['en-US'].url} />
        }
    }
}

export default function Blog({data}) {
    return (
        <Layout>
            <div>---- header ---</div>
            <h1>{data.contentfulBlogPost.title}</h1>
            <p>{data.contentfulBlogPost.publishedDate}</p>
            {documentToReactComponents(data.contentfulBlogPost.body.json, options)}
            <Link to='/'>Inicio</Link>
        </Layout>
    )
}
