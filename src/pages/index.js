/** @jsx jsx */
import { graphql, Link, useStaticQuery } from 'gatsby'
import { jsx } from 'theme-ui'
import Layout from '../components/layout.js'

export default function Index() {
  const data = useStaticQuery(graphql`
    {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              date
              title
            }
          }
        }
        totalCount
      }
    }
  `)

  return (
    <Layout>
      <ul>
        {data.allMdx.edges.map(edge => (
          <li
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              pb: 3,
            }}
            key={edge.node.fields.slug}
          >
            <Link
              to={edge.node.fields.slug}
              sx={{
                position: 'relative',
                color: 'link',
                textDecoration: 'none',
                outline: 'none',

                '&:before': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '1px',
                  backgroundColor: 'link',
                  transform: 'scaleX(0)',
                  transition: 'all 0.2s cubic-bezier(.82, 0, .12, 1) 0s',
                },

                '&:hover:before': {
                  visibility: 'visible',
                  transform: 'scaleX(1)',
                },
              }}
            >
              <span>{edge.node.frontmatter.title}</span>
            </Link>
            <time>{edge.node.frontmatter.date}</time>
          </li>
        ))}
      </ul>
    </Layout>
  )
}
