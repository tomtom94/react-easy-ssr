import styled from 'styled-components'
import transition from '../assets/jss/theme/transition'
import breakpoints from '../assets/jss/theme/breakpoints'

export const NotificationContainer = styled.div(
  (props: { type: 'notification' | 'block'; isOpen: boolean; index: number | undefined }) => `
  ${
    props.type === 'block'
      ? `
        flex: 1,
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 2rem;
        `
      : props.type === 'notification'
      ? `
          position: fixed;
          zIndex: ${typeof props.index === 'number' ? 3000 + props.index : 3000};
          zIndex: 3000;
          bottom: -10rem;
          right: 2rem;
          ${breakpoints('down', 'sm')} {
            right: 1rem;
          }
          transition: all 350ms ${transition.easing.easeInOut};
          `
      : ``
  }

  ${
    props.isOpen && typeof props.index === 'number'
      ? `
      bottom: ${3 + props.index * 6}rem;
      ${breakpoints('down', 'sm')} {
        bottom: ${2 + props.index * 6}rem;
      }
  `
      : ``
  }
  `
)
