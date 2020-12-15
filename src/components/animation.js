import { keyframes } from '@emotion/core'
import styled from '@emotion/styled'

const upDown = keyframes`
  from {
    transform: translateY(0)
  }
  to {
    transform: translateY(200px)
  }
`

const upDownWide = keyframes`
  from {
    transform: translateY(0)
  }
  to {
    transform: translateY(200px)
  }
`

export const Static = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`

export const UpDown = styled.div`
  animation: ${upDown} 6s ease-in-out infinite alternate;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`

export const UpDownWide = styled.div`
  animation: ${upDownWide} 18s ease-in-out infinite alternate;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`
