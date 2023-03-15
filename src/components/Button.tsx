import React, { FC, ReactNode } from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import buttonStyle from '../assets/jss/components/buttonStyle'

interface Props {
  children: ReactNode
  onClick?: () => void
  link?: string
  model?: 'event'
}

const Button: FC<Props> = ({ children, link, model, onClick, ...props }) => {
  const classes = buttonStyle(props)

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={classNames(classes.button, model === 'event' && classes.eventModel)}>
        {children}
      </button>
    )
  }
  if (link) {
    return (
      <Link to={link}>
        <button type="button" className={classNames(classes.button, model === 'event' && classes.eventModel)}>
          {children}
        </button>
      </Link>
    )
  }

  return (
    <button type="submit" className={classNames(classes.button, model === 'event' && classes.eventModel)}>
      {children}
    </button>
  )
}

export default Button
