import React, { FC, useEffect, useState, useRef, ReactNode } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import eventMessageStyle from '../assets/jss/components/eventMessageStyle'
import Button from './Button'
import CloseImageUrl from '../assets/images/61155.svg'

interface Props {
  children?: ReactNode
  message: string
  event: 'error' | 'success'
  refresh?: boolean
  onClose?: () => void
}

const EventMessage: FC<Props> = ({ message, event, refresh, onClose, children, ...props }) => {
  const classes = eventMessageStyle(props)
  const [isNotificationOpened, setIsNotificationOpened] = useState(false)

  const timeout1 = useRef<NodeJS.Timeout>()
  const timeout2 = useRef<NodeJS.Timeout>()
  useEffect(() => {
    if (onClose) {
      setTimeout(() => {
        setIsNotificationOpened(true)
        // Must leave some time for the DOM to rerender
      }, 200)
      timeout1.current = setTimeout(() => {
        setIsNotificationOpened(false)
      }, 2650)
      timeout2.current = setTimeout(() => {
        onClose()
      }, 3000)
    }
    return () => {
      if (onClose) {
        clearTimeout(timeout1.current)
        clearTimeout(timeout2.current)
      }
    }
  }, [onClose])

  return (
    <div
      className={classNames({
        [classes.containerBlock]: !onClose,
        [classes.containerNotification]: onClose,
        [classes.containerNotificationOpen]: isNotificationOpened
      })}
    >
      <div className={classNames(classes.message, classes[event])}>
        {onClose && (
          <button
            type="button"
            className={classes.closingButton}
            onClick={onClose}
            onKeyDown={(e) => {
              if (e.key === 'Escape') {
                onClose()
              }
            }}
          >
            <img src={CloseImageUrl} alt="Close" />
          </button>
        )}
        <span>
          {event === 'error' && <FontAwesomeIcon icon="exclamation-triangle" />}
          {event === 'success' && <FontAwesomeIcon icon="thumbs-up" />}
        </span>
        <div>
          <p>{message}</p>
          {refresh && (
            <Button
              onClick={() => {
                window.location.reload()
              }}
              model="event"
            >
              Try to refresh the page
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default EventMessage
