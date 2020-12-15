/** @jsx jsx **/
import { jsx } from 'theme-ui'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout.js'

export default function BlogPost({ data }) {
  return (
    <Layout>
      <h2 sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
        <span>{data.mdx.frontmatter.title}</span>
        <time>{data.mdx.frontmatter.date}</time>
      </h2>
      <MDXProvider>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        date
        title
      }
    }
  }
`
