import styled, { css } from 'styled-components'

interface JustForFunProps {
  type: 'notification' | 'block'
}

export const JustForFun = styled.div<JustForFunProps>`
  ${(props) =>
    props.type === 'block' &&
    css`
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 2rem;
    `}
`
