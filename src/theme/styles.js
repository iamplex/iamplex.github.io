const root = {
  fontSize: 1,
  fontFamily: 'body',
  lineHeight: 'body',
  fontWeight: 'body',
  bg: 'body',
}

const mdx = {
  p: {
    mb: 4,
    color: 'text',
    fontSize: 1,
    fontFamily: 'body',
    lineHeight: 'body',
  },

  a: {
    color: 'link',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },

  h1: {
    fontFamily: 'heading',
    lineHeight: 'heading',
    fontWeight: 'heading',
    mt: 4,
    mb: 4,
    fontSize: 6,
  },

  h2: {
    fontFamily: 'heading',
    lineHeight: 'heading',
    fontWeight: 'heading',
    mt: 4,
    mb: 4,
    fontSize: 5,
  },

  h3: {
    fontFamily: 'heading',
    lineHeight: 'heading',
    fontWeight: 'heading',
    mt: 4,
    mb: 4,
    fontSize: 4,
  },

  h4: {
    fontFamily: 'heading',
    lineHeight: 'heading',
    fontWeight: 'heading',
    mt: 4,
    mb: 4,
    fontSize: 3,
  },

  h5: {
    fontFamily: 'heading',
    lineHeight: 'heading',
    fontWeight: 'heading',
    mt: 4,
    mb: 4,
    fontSize: 2,
  },

  h6: {
    fontFamily: 'heading',
    lineHeight: 'heading',
    fontWeight: 'heading',
    mt: 4,
    mb: 4,
    fontSize: 1,
  },

  img: {
    maxWidth: '100%',
  },

  inlineCode: {
    borderRadius: '.3em',
    py: 1,
    px: 2,
    mx: 1,
    backgroundColor: '#44474e',
    color: '#fff',
    fontFamily: 'monospace',
  },

  ol: {
    mb: 4,
  },

  ul: {
    mb: 4,
  },

  li: {
    mb: 3,
  },

  blockquote: {
    px: 4,
    mx: -4,
    mt: 4,
    mb: 4,
    color: '#999',
    fontSize: 3,
    fontStyle: 'italic',
    borderLeft: '0.24em solid #999',
  },

  hr: {
    mb: 4,
  },

  table: {
    width: '100%',
    borderCollapse: 'separate',
    borderSpacing: 0,
  },
  th: {
    textAlign: 'left',
    borderBottomStyle: 'solid',
  },
  td: {
    textAlign: 'left',
    borderBottomStyle: 'solid',
  },
}

const pre = {
  fontFamily: 'monospace',
  fontSize: 14,
  py: 3,
  px: 4,
  my: 4,
  mx: -4,
  borderRadius: 6,
  overflowX: 'auto',
  tabSize: 4,
  hyphens: 'none',
}

const code = {
  backgroundColor: '#1e2231',
  color: '#ffffff',
  '.tag': {
    color: '#fc929e',
  },
  '.attr-name': {
    color: 'rgb(197, 165, 197)',
  },
  '.attr-value': {
    color: '#8dc891',
  },
  '.comment,.block-comment,.prolog,.doctype,.cdata': {
    color: '#999999',
  },
  '.property,.number,.function-name,.constant,.symbol,.deleted': {
    color: '#5a9bcf',
  },
  '.boolean': {
    color: '#ff8b50',
  },
  '.string': {
    color: '#8dc891',
  },
  '.punctuation': {
    color: 'rgb(136, 198, 190)',
  },
  '.selector,.char,.builtin,.inserted': {
    color: '#D8DEE9',
  },
  '.function': {
    color: '#79b6f2',
  },
  '.operator,.entity,.url,.variable': {
    color: '#d7deea',
  },
  '.keyword': {
    color: '#c5a5c5',
  },
  '.at-rule,.class-name': {
    color: '#FAC863',
  },
  '.important': {
    fontWeight: '400',
  },
  '.bold': {
    fontWeight: 'bold',
  },
  '.italic': {
    fontStyle: 'italic',
  },
  '.namespace': {
    opacity: 0.7,
  },
  '.highlight': {
    display: 'block',
    my: -0,
    mx: -4,
    py: 0,
    px: '28px',
    backgroundColor: '#4c5573',
    borderLeft: '4px solid #00c4ff',
  },
}

export default {
  root,
  ...mdx,
  pre,
  code,
}
