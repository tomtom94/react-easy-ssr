import React, { FC, useEffect, useState, useRef } from 'react'
import { hot } from 'react-hot-loader/root'
import { useHistory } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import eventMessageStyle from '../assets/jss/components/eventMessageStyle'
import Button from './Button'
import CloseImageUrl, { ReactComponent as CloseImage } from '../assets/images/61155.svg'

interface Props {
  message: any
  event: 'error' | 'success'
  refresh?: boolean
  onClose?: () => void
}

const EventMessage: FC<Props> = ({ message, event, refresh, onClose, children, ...props }) => {
  const classes = eventMessageStyle(props)
  const history = useHistory()
  const [isNotificationOpened, setIsNotificationOpened] = useState(false)

  const timeout1 = useRef<number>()
  const timeout2 = useRef<number>()
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
            onKeyDown={e => {
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

export default hot(EventMessage)
