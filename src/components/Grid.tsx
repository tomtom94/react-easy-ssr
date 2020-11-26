// This component is copy past of the Material-ui one, here https://github.com/mui-org/material-ui/blob/next/packages/material-ui/src/Grid/Grid.js

// A grid component using the following libs as inspiration.
//
// For the implementation:
// - https://getbootstrap.com/docs/4.3/layout/grid/
// - https://github.com/kristoferjoseph/flexboxgrid/blob/master/src/css/flexboxgrid.css
// - https://github.com/roylee0704/react-flexbox-grid
// - https://material.angularjs.org/latest/layout/introduction
//
// Follow this flexbox Guide to better understand the underlying model:
// - https://css-tricks.com/snippets/css/a-guide-to-flexbox/

import React, { ReactNode } from 'react'
import classNames from 'classnames'
import { createUseStyles, useTheme } from 'react-jss'
import { Theme } from '../assets/jss/theme/index'

const SPACINGS: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const GRID_SIZES: (string | number | true)[] = ['auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

function generateGrid(globalStyles, theme, breakpoint) {
  const styles = {}
  const noMediaClassNames = {}

  GRID_SIZES.forEach((size: any) => {
    const key = `grid-${breakpoint}-${size}`
    noMediaClassNames[key] = {}

    if (size === true) {
      // For the auto layouting
      styles[key] = {
        flexBasis: 0,
        flexGrow: 1,
        maxWidth: '100%'
      }
      return
    }

    if (size === 'auto') {
      styles[key] = {
        flexBasis: 'auto',
        flexGrow: 0,
        maxWidth: 'none'
      }
      return
    }

    // Keep 7 significant numbers.
    const width = `${Math.round((size / 12) * 10e7) / 10e5}%`

    // Close to the bootstrap implementation:
    // https://github.com/twbs/bootstrap/blob/8fccaa2439e97ec72a4b7dc42ccc1f649790adb0/scss/mixins/_grid.scss#L41
    styles[key] = {
      flexBasis: width,
      flexGrow: 0,
      maxWidth: width
    }
  })

  // No need for a media query for the first size.
  if (breakpoint === 'xs') {
    Object.assign(globalStyles, styles)
  } else {
    Object.assign(globalStyles, noMediaClassNames, { [theme.breakpoints.up(breakpoint)]: styles })
  }
}

function getOffset(val, div = 1) {
  const parse = parseFloat(val)
  return `${parse / div}${String(val).replace(String(parse), '') || 'px'}`
}

function generateGutter(theme, breakpoint) {
  const styles = {}

  SPACINGS.forEach(spacing => {
    const themeSpacing = theme.spacing(spacing)

    if (themeSpacing === 0) {
      return
    }

    styles[`spacing-${breakpoint}-${spacing}`] = {
      margin: `-${getOffset(themeSpacing, 2)}`,
      width: `calc(100% + ${getOffset(themeSpacing)})`,
      '& > $item': {
        padding: getOffset(themeSpacing, 2)
      }
    }
  })

  return styles
}

// Default CSS values
// flex: '0 1 auto',
// flexDirection: 'row',
// alignItems: 'flex-start',
// flexWrap: 'nowrap',
// justifyContent: 'flex-start',
export const styles = createUseStyles((theme: Theme) => {
  return {
    /* Styles applied to the root element */
    root: {},
    /* Styles applied to the root element if `container={true}`. */
    container: {
      boxSizing: 'border-box',
      display: 'flex',
      flexWrap: 'wrap',
      width: '100%'
    },
    /* Styles applied to the root element if `item={true}`. */
    item: {
      boxSizing: 'border-box',
      margin: '0' // For instance, it's useful when used with a `figure` element.
    },
    /* Styles applied to the root element if `zeroMinWidth={true}`. */
    zeroMinWidth: {
      minWidth: 0
    },
    /* Styles applied to the root element if `direction="column"`. */
    'direction-xs-column': {
      flexDirection: 'column'
    },
    /* Styles applied to the root element if `direction="column-reverse"`. */
    'direction-xs-column-reverse': {
      flexDirection: 'column-reverse'
    },
    /* Styles applied to the root element if `direction="rwo-reverse"`. */
    'direction-xs-row-reverse': {
      flexDirection: 'row-reverse'
    },
    /* Styles applied to the root element if `wrap="nowrap"`. */
    'wrap-xs-nowrap': {
      flexWrap: 'nowrap'
    },
    /* Styles applied to the root element if `wrap="reverse"`. */
    'wrap-xs-wrap-reverse': {
      flexWrap: 'wrap-reverse'
    },
    /* Styles applied to the root element if `alignItems="center"`. */
    'align-items-xs-center': {
      alignItems: 'center'
    },
    /* Styles applied to the root element if `alignItems="flex-start"`. */
    'align-items-xs-flex-start': {
      alignItems: 'flex-start'
    },
    /* Styles applied to the root element if `alignItems="flex-end"`. */
    'align-items-xs-flex-end': {
      alignItems: 'flex-end'
    },
    /* Styles applied to the root element if `alignItems="baseline"`. */
    'align-items-xs-baseline': {
      alignItems: 'baseline'
    },
    /* Styles applied to the root element if `alignContent="center"`. */
    'align-content-xs-center': {
      alignContent: 'center'
    },
    /* Styles applied to the root element if `alignContent="flex-start"`. */
    'align-content-xs-flex-start': {
      alignContent: 'flex-start'
    },
    /* Styles applied to the root element if `alignContent="flex-end"`. */
    'align-content-xs-flex-end': {
      alignContent: 'flex-end'
    },
    /* Styles applied to the root element if `alignContent="space-between"`. */
    'align-content-xs-space-between': {
      alignContent: 'space-between'
    },
    /* Styles applied to the root element if `alignContent="space-around"`. */
    'align-content-xs-space-around': {
      alignContent: 'space-around'
    },
    /* Styles applied to the root element if `justify="center"`. */
    'justify-xs-center': {
      justifyContent: 'center'
    },
    /* Styles applied to the root element if `justify="flex-end"`. */
    'justify-xs-flex-end': {
      justifyContent: 'flex-end'
    },
    /* Styles applied to the root element if `justify="space-between"`. */
    'justify-xs-space-between': {
      justifyContent: 'space-between'
    },
    /* Styles applied to the root element if `justify="space-around"`. */
    'justify-xs-space-around': {
      justifyContent: 'space-around'
    },
    /* Styles applied to the root element if `justify="space-evenly"`. */
    'justify-xs-space-evenly': {
      justifyContent: 'space-evenly'
    },
    ...generateGutter(theme, 'xs'),
    ...theme.breakpoints.keys.reduce((accumulator, key) => {
      // Use side effect over immutability for better performance.
      generateGrid(accumulator, theme, key)

      return accumulator
    }, {})
  }
})

interface Props {
  id?: string
  children: ReactNode
  alignContent?: 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around'
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline'
  className?: string
  container?: boolean
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  item?: boolean
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'
  lg?: 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  md?: 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  sm?: 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  spacing?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  xl?: 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  xs?: 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  zeroMinWidth?: boolean
}

const Grid = function Grid(props: Props) {
  const theme = useTheme()
  const classes: any = styles({ theme })
  const {
    alignContent = 'stretch',
    alignItems = 'stretch',
    className: classNameProp,
    container = false,
    direction = 'row',
    item = false,
    justify = 'flex-start',
    xs = false,
    sm = false,
    md = false,
    lg = false,
    xl = false,
    spacing = 0,
    wrap = 'wrap',
    zeroMinWidth = false,
    ...rest
  } = props

  const className = classNames(
    classes.root,
    {
      [classes.container]: container,
      [classes.item]: item,
      [classes.zeroMinWidth]: zeroMinWidth,
      [classes[`spacing-xs-${String(spacing)}`]]: container && spacing !== 0,
      [classes[`direction-xs-${String(direction)}`]]: direction !== 'row',
      [classes[`wrap-xs-${String(wrap)}`]]: wrap !== 'wrap',
      [classes[`align-items-xs-${String(alignItems)}`]]: alignItems !== 'stretch',
      [classes[`align-content-xs-${String(alignContent)}`]]: alignContent !== 'stretch',
      [classes[`justify-xs-${String(justify)}`]]: justify !== 'flex-start',
      [classes[`grid-xs-${String(xs)}`]]: xs !== false,
      [classes[`grid-sm-${String(sm)}`]]: sm !== false,
      [classes[`grid-md-${String(md)}`]]: md !== false,
      [classes[`grid-lg-${String(lg)}`]]: lg !== false,
      [classes[`grid-xl-${String(xl)}`]]: xl !== false
    },
    classNameProp
  )

  return <div className={className} {...rest} />
}

export default Grid
