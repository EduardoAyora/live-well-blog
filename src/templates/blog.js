import React from 'react'
import Layout from '../components/layout'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import Head from '../components/head'
import blogStyles from './blog.module.scss'

export const query = graphql`
    query($slug: String!) {
        contentfulBlogPost(slug: {eq: $slug}) {
            title
            publishedDate(formatString: "DD-MM-YYYY")
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
            return <img alt={fields.title['en-US']} src={fields.file['en-US'].url} style={{maxWidth:'100%'}} />
        }
    }
}

export default function Blog({data}) {
    return (
        <Layout>
            <Head title={data.contentfulBlogPost.title} />
            <div className={blogStyles.postHeader}>
                <h1 className={blogStyles.title}>
                    {data.contentfulBlogPost.title}
                </h1>
                <p className={blogStyles.date}>
                    Publicado el {data.contentfulBlogPost.publishedDate}
                </p>
            </div>
            <main className={blogStyles.main}>
                {documentToReactComponents(data.contentfulBlogPost.body.json, options)}
            </main>
        </Layout>
    )
}
