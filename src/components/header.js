/** @jsx jsx */
import { graphql, Link, useStaticQuery } from 'gatsby'
import { jsx } from 'theme-ui'
import Toggle from './toggle'

export default function Header() {
  const data = useStaticQuery(
    graphql`
      {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <header
      sx={{
        p: 5,
      }}
    >
      <h3 sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link sx={{ color: 'text' }} to={'/'}>
          {data.site.siteMetadata.title}
        </Link>
        <Toggle />
      </h3>
    </header>
  )
}
