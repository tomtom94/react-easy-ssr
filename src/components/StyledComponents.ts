import styled from 'styled-components'

export const TestComponentForNothing = styled.ul(
  (props: { color: string }) => `
  display: flex;
  background-color: ${props.color};
  `
)
