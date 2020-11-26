import styled, { keyframes, css } from 'styled-components'

export const TestComponentForNothing: any = styled.ul`
  ${(props: any) =>
    css`
      display: flex;
      background-color: ${props.position};
    `}
`
