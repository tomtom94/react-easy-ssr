import styled, { keyframes, css } from 'styled-components'

export const Table: any = styled.ul`
  ${(props: any) =>
    css`
      position: relative;
      list-style-type: none;
      padding: 0;
      margin: 0;
      background-color: transparent;
      border-radius: 4px;
      height: ${(1 + props.numberTeams) * 30 + 12 + props.numberTeams}px;
    `}
`

export const Row: any = styled.li`
  ${(props: any) => {
    if (props.position) {
      return css`
        position: absolute;
        z-index: ${1000 - props.position};
        display: flex;
        width: calc(100% - 0px);
        height: 30px;
        padding: 3px 10px;
        border-radius: 6px;
        background-color: ${props.colorToDisplay ? props.colorToDisplay : '#edf4f5'};
        transform: translateY(${props.position * 31}px);
        will-change: transform;
        transition: transform 1200ms linear;
      `
    }
    return css`
      position: absolute;
      z-index: 1000;
      display: flex;
      width: calc(100% - 0px);
      height: 30px;
      padding: 6px 10px;
      border-radius: 3px;
      background-color: transparent;
    `
  }}
`
export const Cell: any = styled.div`
  ${(props: any) => {
    return css`
      flex: ${props.flex};
      display: flex;
      align-items: center;
    `
  }}
`

export const ContainerScrollFixed: any = styled.div`
  ${(props: any) => {
    return css`
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: ${props.isDefined
        ? props.isScrolled
          ? props.isMaxScroll
            ? 'flex-end'
            : 'flex-start'
          : 'flex-start'
        : 'flex-start'};
    `
  }}
`

export const ScrollFixed: any = styled.div`
  ${(props: any) => {
    if (props.isScrolled && !props.isMaxScroll) {
      return css`
        position: ${props.isDefined ? (props.isMaxScroll ? 'static' : 'fixed') : 'static'};
        top: 0;
        left: ${props.leftOffset}px;
        width: ${props.widthItem}px;
      `
    }
    if (!props.noFullWidth) {
      return css`
        width: 100%;
      `
    }
  }}
`
