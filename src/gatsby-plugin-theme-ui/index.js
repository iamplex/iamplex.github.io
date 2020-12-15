import { colors, shadows, sizes, space, styles, typography } from '../theme'

export default {
  initialColorModeName: 'dark',

  sizes,
  space,
  shadows,

  colors,
  ...typography,
  styles,

  layout: {
    container: {
      p: 5,
      mx: 'auto',
      maxWidth: 800,
      bg: 'container',
    },
  },
}
