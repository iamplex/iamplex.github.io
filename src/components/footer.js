/** @jsx jsx **/
import { graphql, useStaticQuery } from 'gatsby'
import { jsx } from 'theme-ui'

export default function Footer() {
  const data = useStaticQuery(
    graphql`
      {
        site {
          siteMetadata {
            author
          }
        }
      }
    `
  )

  return (
    <footer
      sx={{
        p: 5,
      }}
    >
      <p sx={{ fontSize: 0, textAlign: 'right' }}>
        © {new Date().getFullYear()} {data.site.siteMetadata.author}
      </p>
    </footer>
  )
}
